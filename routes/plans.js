const express = require('express');
const { body, validationResult } = require('express-validator');
const Plan = require('../models/Plan');
const { auth, authorize, checkPlanAccess } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/plans
// @desc    Get all plans for the user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const { page = 1, limit = 10, status, industry } = req.query;
    const query = {};

    // Build query based on user role
    if (req.user.role === 'admin') {
      // Admin can see all plans
    } else {
      // Regular users can only see their own plans or plans they collaborate on
      query.$or = [
        { owner: req.user._id },
        { 'collaborators.user': req.user._id }
      ];
    }

    // Add filters
    if (status) query.status = status;
    if (industry) query['organization.industry'] = industry;

    const plans = await Plan.find(query)
      .populate('owner', 'firstName lastName email')
      .populate('collaborators.user', 'firstName lastName email')
      .sort({ updatedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Plan.countDocuments(query);

    res.json({
      plans,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get plans error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/plans/:id
// @desc    Get a specific plan
// @access  Private
router.get('/:id', auth, checkPlanAccess, async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id)
      .populate('owner', 'firstName lastName email')
      .populate('collaborators.user', 'firstName lastName email')
      .populate('approvalHistory.approver', 'firstName lastName email');

    res.json({ plan });
  } catch (error) {
    console.error('Get plan error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/plans
// @desc    Create a new plan
// @access  Private
router.post('/', auth, [
  body('title').trim().isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
  body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
  body('organization.name').trim().isLength({ min: 2 }).withMessage('Organization name is required'),
  body('organization.industry').trim().isLength({ min: 2 }).withMessage('Industry is required'),
  body('organization.size').isIn(['small', 'medium', 'large', 'enterprise']).withMessage('Invalid organization size')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const planData = {
      ...req.body,
      owner: req.user._id
    };

    const plan = new Plan(planData);
    await plan.save();

    const populatedPlan = await Plan.findById(plan._id)
      .populate('owner', 'firstName lastName email');

    res.status(201).json({
      message: 'Plan created successfully',
      plan: populatedPlan
    });
  } catch (error) {
    console.error('Create plan error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/plans/:id
// @desc    Update a plan
// @access  Private
router.put('/:id', auth, checkPlanAccess, async (req, res) => {
  try {
    // Check if user has edit permissions
    if (req.userRole !== 'owner' && req.userRole !== 'admin' && req.userRole !== 'editor') {
      return res.status(403).json({ message: 'Insufficient permissions to edit this plan' });
    }

    const updates = req.body;
    const plan = await Plan.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true }
    ).populate('owner', 'firstName lastName email')
     .populate('collaborators.user', 'firstName lastName email');

    res.json({
      message: 'Plan updated successfully',
      plan
    });
  } catch (error) {
    console.error('Update plan error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/plans/:id
// @desc    Delete a plan
// @access  Private
router.delete('/:id', auth, checkPlanAccess, async (req, res) => {
  try {
    // Only owner or admin can delete
    if (req.userRole !== 'owner' && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Insufficient permissions to delete this plan' });
    }

    await Plan.findByIdAndDelete(req.params.id);

    res.json({ message: 'Plan deleted successfully' });
  } catch (error) {
    console.error('Delete plan error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/plans/:id/collaborators
// @desc    Add a collaborator to a plan
// @access  Private
router.post('/:id/collaborators', auth, checkPlanAccess, [
  body('userId').isMongoId().withMessage('Valid user ID is required'),
  body('role').isIn(['viewer', 'editor', 'admin']).withMessage('Invalid role')
], async (req, res) => {
  try {
    // Only owner or admin can add collaborators
    if (req.userRole !== 'owner' && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    const { userId, role } = req.body;

    // Check if user is already a collaborator
    const existingCollaborator = req.plan.collaborators.find(
      collab => collab.user.toString() === userId
    );

    if (existingCollaborator) {
      return res.status(400).json({ message: 'User is already a collaborator' });
    }

    // Check if user is the owner
    if (req.plan.owner.toString() === userId) {
      return res.status(400).json({ message: 'Owner cannot be added as collaborator' });
    }

    req.plan.collaborators.push({ user: userId, role });
    await req.plan.save();

    const updatedPlan = await Plan.findById(req.params.id)
      .populate('collaborators.user', 'firstName lastName email');

    res.json({
      message: 'Collaborator added successfully',
      plan: updatedPlan
    });
  } catch (error) {
    console.error('Add collaborator error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/plans/:id/collaborators/:collaboratorId
// @desc    Remove a collaborator from a plan
// @access  Private
router.delete('/:id/collaborators/:collaboratorId', auth, checkPlanAccess, async (req, res) => {
  try {
    // Only owner or admin can remove collaborators
    if (req.userRole !== 'owner' && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    req.plan.collaborators = req.plan.collaborators.filter(
      collab => collab._id.toString() !== req.params.collaboratorId
    );

    await req.plan.save();

    const updatedPlan = await Plan.findById(req.params.id)
      .populate('collaborators.user', 'firstName lastName email');

    res.json({
      message: 'Collaborator removed successfully',
      plan: updatedPlan
    });
  } catch (error) {
    console.error('Remove collaborator error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/plans/:id/approve
// @desc    Approve a plan
// @access  Private
router.post('/:id/approve', auth, checkPlanAccess, [
  body('status').isIn(['approved', 'rejected']).withMessage('Invalid approval status'),
  body('comments').optional().trim()
], async (req, res) => {
  try {
    // Only admin or owner can approve
    if (req.user.role !== 'admin' && req.userRole !== 'owner') {
      return res.status(403).json({ message: 'Insufficient permissions to approve plan' });
    }

    const { status, comments } = req.body;

    req.plan.approvalHistory.push({
      approver: req.user._id,
      status,
      comments
    });

    if (status === 'approved') {
      req.plan.status = 'approved';
    } else {
      req.plan.status = 'draft';
    }

    await req.plan.save();

    const updatedPlan = await Plan.findById(req.params.id)
      .populate('approvalHistory.approver', 'firstName lastName email');

    res.json({
      message: `Plan ${status} successfully`,
      plan: updatedPlan
    });
  } catch (error) {
    console.error('Approve plan error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/plans/:id/export
// @desc    Export plan as PDF
// @access  Private
router.get('/:id/export', auth, checkPlanAccess, async (req, res) => {
  try {
    const { format = 'pdf' } = req.query;
    
    // This would integrate with document generation service
    // For now, return the plan data
    res.json({
      message: 'Export functionality will be implemented',
      plan: req.plan,
      format
    });
  } catch (error) {
    console.error('Export plan error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;