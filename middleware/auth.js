const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user || !user.isActive) {
      return res.status(401).json({ message: 'Token is not valid' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Access denied. No user found.' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: `Access denied. Required role: ${roles.join(' or ')}` 
      });
    }

    next();
  };
};

const checkPlanAccess = async (req, res, next) => {
  try {
    const planId = req.params.id || req.params.planId;
    const Plan = require('../models/Plan');
    
    const plan = await Plan.findById(planId);
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }

    // Check if user is owner or collaborator
    const isOwner = plan.owner.toString() === req.user._id.toString();
    const isCollaborator = plan.collaborators.some(
      collab => collab.user.toString() === req.user._id.toString()
    );

    if (!isOwner && !isCollaborator && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied to this plan' });
    }

    req.plan = plan;
    req.userRole = isOwner ? 'owner' : 
                  (isCollaborator ? plan.collaborators.find(
                    collab => collab.user.toString() === req.user._id.toString()
                  ).role : 'admin');

    next();
  } catch (error) {
    res.status(500).json({ message: 'Error checking plan access' });
  }
};

module.exports = {
  auth,
  authorize,
  checkPlanAccess
};