const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const { auth, checkPlanAccess } = require('../middleware/auth');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const uploadDir = process.env.UPLOAD_PATH || './uploads';
    try {
      await fs.mkdir(uploadDir, { recursive: true });
      cb(null, uploadDir);
    } catch (error) {
      cb(error);
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  // Allow common document types
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/plain',
    'image/jpeg',
    'image/png',
    'image/gif'
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF, Word, Excel, text, and image files are allowed.'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 10 * 1024 * 1024 // 10MB default
  },
  fileFilter: fileFilter
});

// @route   POST /api/documents/upload/:planId
// @desc    Upload a document to a plan
// @access  Private
router.post('/upload/:planId', auth, checkPlanAccess, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Check if user has edit permissions
    if (req.userRole !== 'owner' && req.userRole !== 'admin' && req.userRole !== 'editor') {
      // Clean up uploaded file
      await fs.unlink(req.file.path);
      return res.status(403).json({ message: 'Insufficient permissions to upload files' });
    }

    const Plan = require('../models/Plan');
    
    // Add attachment to plan
    const attachment = {
      filename: req.file.filename,
      originalName: req.file.originalname,
      path: req.file.path,
      size: req.file.size
    };

    req.plan.attachments.push(attachment);
    await req.plan.save();

    res.json({
      message: 'File uploaded successfully',
      attachment: {
        id: attachment._id,
        filename: attachment.filename,
        originalName: attachment.originalName,
        size: attachment.size,
        uploadedAt: attachment.uploadedAt
      }
    });
  } catch (error) {
    console.error('Upload error:', error);
    
    // Clean up uploaded file if it exists
    if (req.file) {
      try {
        await fs.unlink(req.file.path);
      } catch (unlinkError) {
        console.error('Error cleaning up file:', unlinkError);
      }
    }
    
    res.status(500).json({ message: 'Server error during file upload' });
  }
});

// @route   GET /api/documents/:planId
// @desc    Get all documents for a plan
// @access  Private
router.get('/:planId', auth, checkPlanAccess, async (req, res) => {
  try {
    const attachments = req.plan.attachments.map(attachment => ({
      id: attachment._id,
      filename: attachment.filename,
      originalName: attachment.originalName,
      size: attachment.size,
      uploadedAt: attachment.uploadedAt
    }));

    res.json({ attachments });
  } catch (error) {
    console.error('Get documents error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/documents/download/:planId/:attachmentId
// @desc    Download a specific document
// @access  Private
router.get('/download/:planId/:attachmentId', auth, checkPlanAccess, async (req, res) => {
  try {
    const { attachmentId } = req.params;
    
    const attachment = req.plan.attachments.id(attachmentId);
    if (!attachment) {
      return res.status(404).json({ message: 'Document not found' });
    }

    // Check if file exists
    try {
      await fs.access(attachment.path);
    } catch (error) {
      return res.status(404).json({ message: 'File not found on server' });
    }

    // Set appropriate headers
    res.setHeader('Content-Disposition', `attachment; filename="${attachment.originalName}"`);
    res.setHeader('Content-Type', 'application/octet-stream');
    
    // Stream the file
    const fileStream = require('fs').createReadStream(attachment.path);
    fileStream.pipe(res);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({ message: 'Server error during download' });
  }
});

// @route   DELETE /api/documents/:planId/:attachmentId
// @desc    Delete a document
// @access  Private
router.delete('/:planId/:attachmentId', auth, checkPlanAccess, async (req, res) => {
  try {
    // Check if user has edit permissions
    if (req.userRole !== 'owner' && req.userRole !== 'admin' && req.userRole !== 'editor') {
      return res.status(403).json({ message: 'Insufficient permissions to delete files' });
    }

    const { attachmentId } = req.params;
    
    const attachment = req.plan.attachments.id(attachmentId);
    if (!attachment) {
      return res.status(404).json({ message: 'Document not found' });
    }

    // Delete file from filesystem
    try {
      await fs.unlink(attachment.path);
    } catch (error) {
      console.error('Error deleting file from filesystem:', error);
      // Continue with database deletion even if file deletion fails
    }

    // Remove attachment from plan
    req.plan.attachments.pull(attachmentId);
    await req.plan.save();

    res.json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error('Delete document error:', error);
    res.status(500).json({ message: 'Server error during deletion' });
  }
});

// @route   POST /api/documents/generate-pdf/:planId
// @desc    Generate PDF from plan
// @access  Private
router.post('/generate-pdf/:planId', auth, checkPlanAccess, async (req, res) => {
  try {
    const { format = 'pdf', includeAttachments = false } = req.body;
    
    // This would integrate with a PDF generation service like Puppeteer
    // For now, return a placeholder response
    res.json({
      message: 'PDF generation functionality will be implemented',
      planId: req.params.planId,
      format,
      includeAttachments,
      status: 'pending'
    });
  } catch (error) {
    console.error('Generate PDF error:', error);
    res.status(500).json({ message: 'Server error during PDF generation' });
  }
});

// @route   GET /api/documents/templates/:industry
// @desc    Get document templates for an industry
// @access  Public
router.get('/templates/:industry', async (req, res) => {
  try {
    const { industry } = req.params;
    
    // This would return industry-specific document templates
    const templates = {
      healthcare: [
        { name: 'HIPAA Compliance Checklist', type: 'checklist', description: 'HIPAA compliance requirements checklist' },
        { name: 'Emergency Response Plan', type: 'plan', description: 'Emergency response procedures for healthcare facilities' },
        { name: 'Data Breach Response Plan', type: 'plan', description: 'Steps to follow in case of a data breach' }
      ],
      finance: [
        { name: 'SOX Compliance Checklist', type: 'checklist', description: 'Sarbanes-Oxley compliance requirements' },
        { name: 'Risk Assessment Template', type: 'template', description: 'Financial risk assessment template' },
        { name: 'Incident Response Plan', type: 'plan', description: 'Financial incident response procedures' }
      ],
      technology: [
        { name: 'Cybersecurity Incident Response', type: 'plan', description: 'Cybersecurity incident response procedures' },
        { name: 'Data Backup and Recovery Plan', type: 'plan', description: 'Data backup and recovery procedures' },
        { name: 'Vendor Risk Assessment', type: 'template', description: 'Third-party vendor risk assessment' }
      ]
    };

    const industryTemplates = templates[industry] || [];
    
    res.json({ 
      industry,
      templates: industryTemplates
    });
  } catch (error) {
    console.error('Get templates error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;