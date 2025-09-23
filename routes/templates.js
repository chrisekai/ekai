const express = require('express');
const { body, validationResult } = require('express-validator');
const Template = require('../models/Template');
const { auth, authorize } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/templates
// @desc    Get all templates
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { industry, organizationSize, page = 1, limit = 10 } = req.query;
    const query = { isPublic: true, isActive: true };

    if (industry) query.industry = industry;
    if (organizationSize && organizationSize !== 'all') {
      query.$or = [
        { organizationSize: organizationSize },
        { organizationSize: 'all' }
      ];
    }

    const templates = await Template.find(query)
      .populate('createdBy', 'firstName lastName')
      .sort({ usageCount: -1, rating: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Template.countDocuments(query);

    res.json({
      templates,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get templates error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/templates/:id
// @desc    Get a specific template
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const template = await Template.findById(req.params.id)
      .populate('createdBy', 'firstName lastName');

    if (!template || (!template.isPublic && template.createdBy._id.toString() !== req.user?._id?.toString())) {
      return res.status(404).json({ message: 'Template not found' });
    }

    res.json({ template });
  } catch (error) {
    console.error('Get template error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/templates
// @desc    Create a new template
// @access  Private
router.post('/', auth, [
  body('name').trim().isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
  body('description').trim().isLength({ min: 10 }).withMessage('Description must be at least 10 characters'),
  body('industry').isIn([
    'healthcare', 'finance', 'technology', 'manufacturing', 'retail',
    'education', 'government', 'energy', 'telecommunications', 'transportation',
    'hospitality', 'real_estate', 'consulting', 'non_profit', 'other'
  ]).withMessage('Invalid industry'),
  body('sections').isArray({ min: 1 }).withMessage('At least one section is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const templateData = {
      ...req.body,
      createdBy: req.user._id
    };

    const template = new Template(templateData);
    await template.save();

    const populatedTemplate = await Template.findById(template._id)
      .populate('createdBy', 'firstName lastName');

    res.status(201).json({
      message: 'Template created successfully',
      template: populatedTemplate
    });
  } catch (error) {
    console.error('Create template error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/templates/:id
// @desc    Update a template
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);

    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }

    // Only creator or admin can update
    if (template.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    const updates = req.body;
    const updatedTemplate = await Template.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true }
    ).populate('createdBy', 'firstName lastName');

    res.json({
      message: 'Template updated successfully',
      template: updatedTemplate
    });
  } catch (error) {
    console.error('Update template error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/templates/:id
// @desc    Delete a template
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);

    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }

    // Only creator or admin can delete
    if (template.createdBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    await Template.findByIdAndDelete(req.params.id);

    res.json({ message: 'Template deleted successfully' });
  } catch (error) {
    console.error('Delete template error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/templates/:id/use
// @desc    Mark template as used (increment usage count)
// @access  Private
router.post('/:id/use', auth, async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);

    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }

    template.usageCount += 1;
    await template.save();

    res.json({ message: 'Template usage recorded' });
  } catch (error) {
    console.error('Use template error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/templates/:id/rate
// @desc    Rate a template
// @access  Private
router.post('/:id/rate', auth, [
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const template = await Template.findById(req.params.id);

    if (!template) {
      return res.status(404).json({ message: 'Template not found' });
    }

    const { rating } = req.body;

    // Update rating
    const newTotal = (template.rating.average * template.rating.count) + rating;
    template.rating.count += 1;
    template.rating.average = newTotal / template.rating.count;

    await template.save();

    res.json({
      message: 'Rating submitted successfully',
      rating: template.rating
    });
  } catch (error) {
    console.error('Rate template error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/templates/industries/list
// @desc    Get list of available industries
// @access  Public
router.get('/industries/list', async (req, res) => {
  try {
    const industries = [
      { value: 'healthcare', label: 'Healthcare' },
      { value: 'finance', label: 'Finance & Banking' },
      { value: 'technology', label: 'Technology' },
      { value: 'manufacturing', label: 'Manufacturing' },
      { value: 'retail', label: 'Retail' },
      { value: 'education', label: 'Education' },
      { value: 'government', label: 'Government' },
      { value: 'energy', label: 'Energy & Utilities' },
      { value: 'telecommunications', label: 'Telecommunications' },
      { value: 'transportation', label: 'Transportation' },
      { value: 'hospitality', label: 'Hospitality' },
      { value: 'real_estate', label: 'Real Estate' },
      { value: 'consulting', label: 'Consulting' },
      { value: 'non_profit', label: 'Non-Profit' },
      { value: 'other', label: 'Other' }
    ];

    res.json({ industries });
  } catch (error) {
    console.error('Get industries error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;