const express = require('express');
const { body, validationResult } = require('express-validator');
const Assessment = require('../models/Assessment');
const Plan = require('../models/Plan');
const { auth, checkPlanAccess } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/assessments
// @desc    Get all assessments for the user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const { page = 1, limit = 10, planId, status } = req.query;
    const query = {};

    // Build query based on user role
    if (req.user.role === 'admin') {
      // Admin can see all assessments
    } else {
      // Regular users can only see assessments for their plans
      const userPlans = await Plan.find({
        $or: [
          { owner: req.user._id },
          { 'collaborators.user': req.user._id }
        ]
      }).select('_id');
      
      query.plan = { $in: userPlans.map(p => p._id) };
    }

    // Add filters
    if (planId) query.plan = planId;
    if (status) query.status = status;

    const assessments = await Assessment.find(query)
      .populate('plan', 'title organization')
      .populate('assessor', 'firstName lastName email')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Assessment.countDocuments(query);

    res.json({
      assessments,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get assessments error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/assessments/:id
// @desc    Get a specific assessment
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.id)
      .populate('plan', 'title organization owner')
      .populate('assessor', 'firstName lastName email');

    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    // Check if user has access to this assessment
    const plan = assessment.plan;
    const isOwner = plan.owner.toString() === req.user._id.toString();
    const isCollaborator = plan.collaborators?.some(
      collab => collab.user.toString() === req.user._id.toString()
    );

    if (!isOwner && !isCollaborator && req.user.role !== 'admin' && assessment.assessor._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Access denied to this assessment' });
    }

    res.json({ assessment });
  } catch (error) {
    console.error('Get assessment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/assessments
// @desc    Create a new assessment
// @access  Private
router.post('/', auth, [
  body('plan').isMongoId().withMessage('Valid plan ID is required'),
  body('assessmentType').isIn(['initial', 'periodic', 'post_incident', 'compliance']).withMessage('Invalid assessment type')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { plan: planId } = req.body;

    // Check if user has access to the plan
    const plan = await Plan.findById(planId);
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }

    const isOwner = plan.owner.toString() === req.user._id.toString();
    const isCollaborator = plan.collaborators?.some(
      collab => collab.user.toString() === req.user._id.toString()
    );

    if (!isOwner && !isCollaborator && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied to this plan' });
    }

    const assessmentData = {
      ...req.body,
      assessor: req.user._id
    };

    const assessment = new Assessment(assessmentData);
    await assessment.save();

    const populatedAssessment = await Assessment.findById(assessment._id)
      .populate('plan', 'title organization')
      .populate('assessor', 'firstName lastName email');

    res.status(201).json({
      message: 'Assessment created successfully',
      assessment: populatedAssessment
    });
  } catch (error) {
    console.error('Create assessment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/assessments/:id
// @desc    Update an assessment
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.id);

    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    // Only assessor or admin can update
    if (assessment.assessor.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    const updates = req.body;
    const updatedAssessment = await Assessment.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true }
    ).populate('plan', 'title organization')
     .populate('assessor', 'firstName lastName email');

    res.json({
      message: 'Assessment updated successfully',
      assessment: updatedAssessment
    });
  } catch (error) {
    console.error('Update assessment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/assessments/:id
// @desc    Delete an assessment
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.id);

    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    // Only assessor or admin can delete
    if (assessment.assessor.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    await Assessment.findByIdAndDelete(req.params.id);

    res.json({ message: 'Assessment deleted successfully' });
  } catch (error) {
    console.error('Delete assessment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/assessments/:id/complete
// @desc    Mark assessment as completed
// @access  Private
router.post('/:id/complete', auth, async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.id);

    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    // Only assessor or admin can complete
    if (assessment.assessor.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    // Calculate overall score
    let totalScore = 0;
    let totalWeight = 0;

    assessment.categories.forEach(category => {
      if (category.weight > 0) {
        totalScore += category.score * category.weight;
        totalWeight += category.weight;
      }
    });

    assessment.overallScore = totalWeight > 0 ? Math.round(totalScore / totalWeight) : 0;

    // Determine maturity level based on score
    if (assessment.overallScore >= 90) {
      assessment.maturityLevel = 'optimizing';
    } else if (assessment.overallScore >= 75) {
      assessment.maturityLevel = 'quantitatively_managed';
    } else if (assessment.overallScore >= 60) {
      assessment.maturityLevel = 'defined';
    } else if (assessment.overallScore >= 40) {
      assessment.maturityLevel = 'managed';
    } else {
      assessment.maturityLevel = 'initial';
    }

    assessment.status = 'completed';
    await assessment.save();

    const updatedAssessment = await Assessment.findById(req.params.id)
      .populate('plan', 'title organization')
      .populate('assessor', 'firstName lastName email');

    res.json({
      message: 'Assessment completed successfully',
      assessment: updatedAssessment
    });
  } catch (error) {
    console.error('Complete assessment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/assessments/:id/report
// @desc    Generate assessment report
// @access  Private
router.get('/:id/report', auth, async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.id)
      .populate('plan', 'title organization')
      .populate('assessor', 'firstName lastName email');

    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    // Check access permissions
    const plan = assessment.plan;
    const isOwner = plan.owner.toString() === req.user._id.toString();
    const isCollaborator = plan.collaborators?.some(
      collab => collab.user.toString() === req.user._id.toString()
    );

    if (!isOwner && !isCollaborator && req.user.role !== 'admin' && assessment.assessor._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Access denied to this assessment' });
    }

    // Generate report data
    const report = {
      assessment,
      summary: {
        overallScore: assessment.overallScore,
        maturityLevel: assessment.maturityLevel,
        totalCategories: assessment.categories.length,
        completedCategories: assessment.categories.filter(c => c.score > 0).length,
        totalRecommendations: assessment.recommendations.length,
        criticalRecommendations: assessment.recommendations.filter(r => r.priority === 'critical').length
      },
      generatedAt: new Date(),
      generatedBy: req.user._id
    };

    res.json({ report });
  } catch (error) {
    console.error('Generate report error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;