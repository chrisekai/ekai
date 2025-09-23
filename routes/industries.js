const express = require('express');
const router = express.Router();

// @route   GET /api/industries
// @desc    Get industry-specific information and requirements
// @access  Public
router.get('/', async (req, res) => {
  try {
    const industries = {
      healthcare: {
        name: 'Healthcare',
        description: 'Healthcare organizations including hospitals, clinics, and medical practices',
        keyRisks: [
          'Patient data breaches',
          'Medical equipment failures',
          'Staff shortages',
          'Regulatory compliance violations',
          'Natural disasters affecting patient care'
        ],
        criticalFunctions: [
          'Patient care delivery',
          'Medical records management',
          'Emergency services',
          'Pharmacy operations',
          'Laboratory services'
        ],
        complianceStandards: [
          'HIPAA (Health Insurance Portability and Accountability Act)',
          'HITECH Act',
          'FDA regulations',
          'Joint Commission standards',
          'State medical board requirements'
        ],
        typicalRTO: '4-8 hours',
        typicalRPO: '1-4 hours'
      },
      finance: {
        name: 'Finance & Banking',
        description: 'Financial institutions including banks, credit unions, and investment firms',
        keyRisks: [
          'Cybersecurity attacks',
          'System outages',
          'Regulatory compliance failures',
          'Market volatility',
          'Operational errors'
        ],
        criticalFunctions: [
          'Transaction processing',
          'Customer account management',
          'Risk management',
          'Regulatory reporting',
          'Payment processing'
        ],
        complianceStandards: [
          'SOX (Sarbanes-Oxley Act)',
          'Basel III',
          'PCI DSS',
          'FFIEC guidelines',
          'State banking regulations'
        ],
        typicalRTO: '1-4 hours',
        typicalRPO: '15 minutes - 1 hour'
      },
      technology: {
        name: 'Technology',
        description: 'Technology companies including software, hardware, and IT services',
        keyRisks: [
          'Data center failures',
          'Cybersecurity incidents',
          'Software bugs and vulnerabilities',
          'Key personnel loss',
          'Supply chain disruptions'
        ],
        criticalFunctions: [
          'Software development',
          'Customer support',
          'Infrastructure management',
          'Data processing',
          'API services'
        ],
        complianceStandards: [
          'ISO 27001',
          'SOC 2',
          'GDPR',
          'CCPA',
          'Industry-specific standards'
        ],
        typicalRTO: '2-8 hours',
        typicalRPO: '1-4 hours'
      },
      manufacturing: {
        name: 'Manufacturing',
        description: 'Manufacturing companies across various industries',
        keyRisks: [
          'Supply chain disruptions',
          'Equipment failures',
          'Quality control issues',
          'Workplace safety incidents',
          'Environmental disasters'
        ],
        criticalFunctions: [
          'Production operations',
          'Quality control',
          'Supply chain management',
          'Inventory management',
          'Customer order fulfillment'
        ],
        complianceStandards: [
          'ISO 9001',
          'ISO 14001',
          'OSHA regulations',
          'FDA regulations (if applicable)',
          'Environmental regulations'
        ],
        typicalRTO: '8-24 hours',
        typicalRPO: '4-8 hours'
      },
      retail: {
        name: 'Retail',
        description: 'Retail businesses including e-commerce and brick-and-mortar stores',
        keyRisks: [
          'Point-of-sale system failures',
          'Inventory management issues',
          'Supply chain disruptions',
          'Customer data breaches',
          'Seasonal demand fluctuations'
        ],
        criticalFunctions: [
          'Sales operations',
          'Inventory management',
          'Customer service',
          'Payment processing',
          'Supply chain coordination'
        ],
        complianceStandards: [
          'PCI DSS',
          'CCPA',
          'GDPR',
          'State consumer protection laws',
          'Industry-specific regulations'
        ],
        typicalRTO: '4-12 hours',
        typicalRPO: '2-4 hours'
      },
      education: {
        name: 'Education',
        description: 'Educational institutions including schools, colleges, and universities',
        keyRisks: [
          'Student information system failures',
          'Campus safety incidents',
          'Weather-related closures',
          'Staff shortages',
          'Technology infrastructure issues'
        ],
        criticalFunctions: [
          'Student services',
          'Academic operations',
          'Administrative functions',
          'Campus safety',
          'Financial aid processing'
        ],
        complianceStandards: [
          'FERPA (Family Educational Rights and Privacy Act)',
          'COPPA',
          'State education regulations',
          'Accreditation requirements',
          'Campus safety regulations'
        ],
        typicalRTO: '8-24 hours',
        typicalRPO: '4-8 hours'
      },
      government: {
        name: 'Government',
        description: 'Government agencies and public sector organizations',
        keyRisks: [
          'Cybersecurity attacks',
          'System outages',
          'Natural disasters',
          'Budget constraints',
          'Regulatory compliance failures'
        ],
        criticalFunctions: [
          'Citizen services',
          'Public safety',
          'Administrative functions',
          'Data management',
          'Emergency response'
        ],
        complianceStandards: [
          'FISMA',
          'NIST guidelines',
          'State and local regulations',
          'Public records laws',
          'Security clearance requirements'
        ],
        typicalRTO: '4-12 hours',
        typicalRPO: '2-4 hours'
      },
      energy: {
        name: 'Energy & Utilities',
        description: 'Energy companies including power generation, distribution, and utilities',
        keyRisks: [
          'Grid failures',
          'Natural disasters',
          'Cybersecurity attacks',
          'Equipment failures',
          'Regulatory compliance issues'
        ],
        criticalFunctions: [
          'Power generation',
          'Grid management',
          'Customer service',
          'Emergency response',
          'Regulatory compliance'
        ],
        complianceStandards: [
          'NERC CIP',
          'FERC regulations',
          'EPA regulations',
          'State utility regulations',
          'ISO 27001'
        ],
        typicalRTO: '2-8 hours',
        typicalRPO: '1-2 hours'
      },
      telecommunications: {
        name: 'Telecommunications',
        description: 'Telecom companies providing voice, data, and internet services',
        keyRisks: [
          'Network outages',
          'Cybersecurity incidents',
          'Equipment failures',
          'Natural disasters',
          'Regulatory compliance issues'
        ],
        criticalFunctions: [
          'Network operations',
          'Customer service',
          'Billing systems',
          'Emergency services',
          'Infrastructure management'
        ],
        complianceStandards: [
          'FCC regulations',
          'CALEA',
          'State telecom regulations',
          'ISO 27001',
          'Industry-specific standards'
        ],
        typicalRTO: '1-4 hours',
        typicalRPO: '15 minutes - 1 hour'
      },
      transportation: {
        name: 'Transportation',
        description: 'Transportation companies including airlines, shipping, and logistics',
        keyRisks: [
          'Vehicle/aircraft failures',
          'Weather disruptions',
          'Regulatory compliance issues',
          'Security incidents',
          'Supply chain disruptions'
        ],
        criticalFunctions: [
          'Fleet operations',
          'Customer service',
          'Safety management',
          'Regulatory compliance',
          'Logistics coordination'
        ],
        complianceStandards: [
          'FAA regulations (aviation)',
          'DOT regulations',
          'TSA requirements',
          'IMO regulations (shipping)',
          'Industry-specific standards'
        ],
        typicalRTO: '4-12 hours',
        typicalRPO: '2-4 hours'
      },
      hospitality: {
        name: 'Hospitality',
        description: 'Hospitality businesses including hotels, restaurants, and tourism',
        keyRisks: [
          'Property damage',
          'Guest safety incidents',
          'System failures',
          'Staff shortages',
          'Natural disasters'
        ],
        criticalFunctions: [
          'Guest services',
          'Reservation management',
          'Food service',
          'Housekeeping',
          'Security'
        ],
        complianceStandards: [
          'Health department regulations',
          'Fire safety codes',
          'ADA compliance',
          'State hospitality regulations',
          'Industry-specific standards'
        ],
        typicalRTO: '8-24 hours',
        typicalRPO: '4-8 hours'
      },
      real_estate: {
        name: 'Real Estate',
        description: 'Real estate companies including brokers, developers, and property managers',
        keyRisks: [
          'Property damage',
          'Market fluctuations',
          'Regulatory compliance issues',
          'Tenant disputes',
          'Natural disasters'
        ],
        criticalFunctions: [
          'Property management',
          'Tenant services',
          'Financial operations',
          'Maintenance services',
          'Legal compliance'
        ],
        complianceStandards: [
          'Fair Housing Act',
          'State real estate regulations',
          'Building codes',
          'Environmental regulations',
          'Industry-specific standards'
        ],
        typicalRTO: '8-24 hours',
        typicalRPO: '4-8 hours'
      },
      consulting: {
        name: 'Consulting',
        description: 'Consulting firms providing professional services',
        keyRisks: [
          'Client data breaches',
          'Key personnel loss',
          'Project delivery failures',
          'Regulatory compliance issues',
          'Economic downturns'
        ],
        criticalFunctions: [
          'Client service delivery',
          'Project management',
          'Knowledge management',
          'Business development',
          'Administrative functions'
        ],
        complianceStandards: [
          'Professional licensing requirements',
          'Client confidentiality agreements',
          'Industry-specific regulations',
          'Data protection laws',
          'Professional standards'
        ],
        typicalRTO: '4-12 hours',
        typicalRPO: '2-4 hours'
      },
      non_profit: {
        name: 'Non-Profit',
        description: 'Non-profit organizations and charitable institutions',
        keyRisks: [
          'Funding disruptions',
          'Volunteer shortages',
          'Regulatory compliance issues',
          'Program delivery failures',
          'Donor data breaches'
        ],
        criticalFunctions: [
          'Program delivery',
          'Fundraising',
          'Volunteer management',
          'Administrative functions',
          'Community outreach'
        ],
        complianceStandards: [
          'IRS regulations',
          'State charity regulations',
          'Grant compliance requirements',
          'Donor privacy regulations',
          'Industry-specific standards'
        ],
        typicalRTO: '8-24 hours',
        typicalRPO: '4-8 hours'
      },
      other: {
        name: 'Other',
        description: 'Other industries not specifically categorized',
        keyRisks: [
          'Business-specific risks',
          'Regulatory compliance issues',
          'Technology failures',
          'Personnel issues',
          'Market disruptions'
        ],
        criticalFunctions: [
          'Core business operations',
          'Customer service',
          'Administrative functions',
          'Financial operations',
          'Compliance management'
        ],
        complianceStandards: [
          'Industry-specific regulations',
          'Data protection laws',
          'Employment regulations',
          'Environmental regulations',
          'Safety standards'
        ],
        typicalRTO: '4-12 hours',
        typicalRPO: '2-4 hours'
      }
    };

    res.json({ industries });
  } catch (error) {
    console.error('Get industries error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/industries/:industry
// @desc    Get specific industry information
// @access  Public
router.get('/:industry', async (req, res) => {
  try {
    const { industry } = req.params;
    
    // Get all industries first
    const industriesResponse = await router.stack[0].route.stack[0].handle(req, res);
    
    if (res.headersSent) return; // Response already sent
    
    const industries = industriesResponse.industries;
    
    if (!industries[industry]) {
      return res.status(404).json({ message: 'Industry not found' });
    }

    res.json({ 
      industry: industry,
      ...industries[industry]
    });
  } catch (error) {
    console.error('Get industry error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;