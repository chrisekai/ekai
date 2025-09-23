const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  organization: {
    name: {
      type: String,
      required: true
    },
    industry: {
      type: String,
      required: true
    },
    size: {
      type: String,
      enum: ['small', 'medium', 'large', 'enterprise'],
      required: true
    },
    location: {
      address: String,
      city: String,
      state: String,
      country: String,
      coordinates: {
        lat: Number,
        lng: Number
      }
    }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  collaborators: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    role: {
      type: String,
      enum: ['viewer', 'editor', 'admin'],
      default: 'viewer'
    },
    addedAt: {
      type: Date,
      default: Date.now
    }
  }],
  status: {
    type: String,
    enum: ['draft', 'in_review', 'approved', 'active', 'archived'],
    default: 'draft'
  },
  version: {
    type: String,
    default: '1.0'
  },
  template: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Template'
  },
  sections: [{
    id: String,
    title: String,
    content: String,
    order: Number,
    isRequired: Boolean,
    completed: {
      type: Boolean,
      default: false
    },
    lastUpdated: {
      type: Date,
      default: Date.now
    }
  }],
  riskAssessment: {
    overallRisk: {
      type: String,
      enum: ['low', 'medium', 'high', 'critical'],
      default: 'medium'
    },
    risks: [{
      id: String,
      title: String,
      description: String,
      category: {
        type: String,
        enum: ['natural', 'technical', 'human', 'economic', 'regulatory']
      },
      probability: {
        type: String,
        enum: ['low', 'medium', 'high']
      },
      impact: {
        type: String,
        enum: ['low', 'medium', 'high', 'critical']
      },
      mitigation: String,
      contingency: String
    }]
  },
  businessImpactAnalysis: {
    criticalFunctions: [{
      function: String,
      description: String,
      rto: Number, // Recovery Time Objective (hours)
      rpo: Number, // Recovery Point Objective (hours)
      dependencies: [String],
      impact: {
        type: String,
        enum: ['low', 'medium', 'high', 'critical']
      }
    }],
    resources: [{
      type: {
        type: String,
        enum: ['personnel', 'technology', 'facilities', 'suppliers', 'other']
      },
      name: String,
      description: String,
      criticality: {
        type: String,
        enum: ['low', 'medium', 'high', 'critical']
      },
      backup: String
    }]
  },
  recoveryProcedures: [{
    id: String,
    title: String,
    description: String,
    steps: [{
      step: Number,
      action: String,
      responsible: String,
      timeframe: String,
      resources: [String]
    }],
    triggers: [String],
    escalation: {
      contact: String,
      timeframe: String
    }
  }],
  communicationPlan: {
    stakeholders: [{
      name: String,
      role: String,
      contact: {
        email: String,
        phone: String,
        alternative: String
      },
      notificationLevel: {
        type: String,
        enum: ['immediate', 'urgent', 'standard', 'informational']
      }
    }],
    templates: [{
      type: {
        type: String,
        enum: ['incident', 'status', 'resolution', 'escalation']
      },
      subject: String,
      content: String
    }]
  },
  testingSchedule: [{
    testType: {
      type: String,
      enum: ['tabletop', 'walkthrough', 'simulation', 'full_test']
    },
    description: String,
    scheduledDate: Date,
    lastConducted: Date,
    results: String,
    improvements: [String]
  }],
  attachments: [{
    filename: String,
    originalName: String,
    path: String,
    size: Number,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  lastReviewed: Date,
  nextReview: Date,
  approvalHistory: [{
    approver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    status: {
      type: String,
      enum: ['approved', 'rejected', 'pending']
    },
    comments: String,
    date: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

// Index for better query performance
planSchema.index({ owner: 1, status: 1 });
planSchema.index({ 'organization.name': 1 });
planSchema.index({ 'organization.industry': 1 });

module.exports = mongoose.model('Plan', planSchema);