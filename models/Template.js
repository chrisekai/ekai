const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true,
    enum: [
      'healthcare',
      'finance',
      'technology',
      'manufacturing',
      'retail',
      'education',
      'government',
      'energy',
      'telecommunications',
      'transportation',
      'hospitality',
      'real_estate',
      'consulting',
      'non_profit',
      'other'
    ]
  },
  organizationSize: {
    type: String,
    enum: ['small', 'medium', 'large', 'enterprise', 'all'],
    default: 'all'
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  version: {
    type: String,
    default: '1.0'
  },
  sections: [{
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: String,
    content: String,
    order: {
      type: Number,
      required: true
    },
    isRequired: {
      type: Boolean,
      default: true
    },
    fields: [{
      name: String,
      type: {
        type: String,
        enum: ['text', 'textarea', 'select', 'checkbox', 'radio', 'date', 'number']
      },
      label: String,
      placeholder: String,
      options: [String],
      required: Boolean,
      validation: {
        minLength: Number,
        maxLength: Number,
        pattern: String
      }
    }]
  }],
  riskCategories: [{
    category: {
      type: String,
      enum: ['natural', 'technical', 'human', 'economic', 'regulatory']
    },
    risks: [{
      title: String,
      description: String,
      commonMitigations: [String]
    }]
  }],
  criticalFunctions: [{
    function: String,
    description: String,
    typicalRTO: Number,
    typicalRPO: Number,
    commonDependencies: [String]
  }],
  complianceRequirements: [{
    standard: String,
    description: String,
    requirements: [String]
  }],
  tags: [String],
  usageCount: {
    type: Number,
    default: 0
  },
  rating: {
    average: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for better query performance
templateSchema.index({ industry: 1, organizationSize: 1 });
templateSchema.index({ isPublic: 1, isActive: 1 });

module.exports = mongoose.model('Template', templateSchema);