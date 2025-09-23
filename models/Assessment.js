const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan',
    required: true
  },
  assessor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  assessmentType: {
    type: String,
    enum: ['initial', 'periodic', 'post_incident', 'compliance'],
    required: true
  },
  status: {
    type: String,
    enum: ['in_progress', 'completed', 'reviewed'],
    default: 'in_progress'
  },
  overallScore: {
    type: Number,
    min: 0,
    max: 100
  },
  maturityLevel: {
    type: String,
    enum: ['initial', 'managed', 'defined', 'quantitatively_managed', 'optimizing'],
    default: 'initial'
  },
  categories: [{
    name: String,
    score: {
      type: Number,
      min: 0,
      max: 100
    },
    weight: {
      type: Number,
      min: 0,
      max: 1
    },
    questions: [{
      question: String,
      answer: {
        type: String,
        enum: ['yes', 'no', 'partial', 'not_applicable']
      },
      score: Number,
      comments: String,
      evidence: [String],
      recommendations: [String]
    }]
  }],
  strengths: [String],
  weaknesses: [String],
  recommendations: [{
    priority: {
      type: String,
      enum: ['low', 'medium', 'high', 'critical']
    },
    category: String,
    recommendation: String,
    rationale: String,
    estimatedEffort: {
      type: String,
      enum: ['low', 'medium', 'high']
    },
    estimatedCost: {
      type: String,
      enum: ['low', 'medium', 'high']
    },
    timeline: String,
    responsible: String
  }],
  complianceStatus: [{
    standard: String,
    compliant: Boolean,
    gaps: [String],
    actionItems: [String]
  }],
  nextAssessmentDate: Date,
  reportGenerated: {
    type: Boolean,
    default: false
  },
  reportPath: String
}, {
  timestamps: true
});

// Index for better query performance
assessmentSchema.index({ plan: 1, status: 1 });
assessmentSchema.index({ assessor: 1, createdAt: -1 });

module.exports = mongoose.model('Assessment', assessmentSchema);