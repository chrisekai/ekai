const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Import models
const User = require('./models/User');
const Template = require('./models/Template');
const Plan = require('./models/Plan');

// Sample data
const sampleUsers = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    role: 'admin',
    organization: {
      name: 'Acme Corporation',
      industry: 'technology',
      size: 'large'
    }
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    password: 'password123',
    role: 'manager',
    organization: {
      name: 'Healthcare Plus',
      industry: 'healthcare',
      size: 'medium'
    }
  },
  {
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob.johnson@example.com',
    password: 'password123',
    role: 'user',
    organization: {
      name: 'Finance First',
      industry: 'finance',
      size: 'enterprise'
    }
  }
];

const sampleTemplates = [
  {
    name: 'Healthcare Business Continuity Template',
    description: 'Comprehensive business continuity plan template designed specifically for healthcare organizations, including HIPAA compliance requirements and patient care continuity procedures.',
    industry: 'healthcare',
    organizationSize: 'all',
    isPublic: true,
    sections: [
      {
        id: 'executive-summary',
        title: 'Executive Summary',
        description: 'High-level overview of the business continuity plan',
        content: 'This section provides a comprehensive overview of the organization\'s business continuity strategy, key objectives, and critical success factors.',
        order: 1,
        isRequired: true,
        fields: [
          {
            name: 'planPurpose',
            type: 'textarea',
            label: 'Plan Purpose',
            placeholder: 'Describe the purpose and scope of this business continuity plan',
            required: true,
            validation: { minLength: 50, maxLength: 1000 }
          },
          {
            name: 'keyObjectives',
            type: 'textarea',
            label: 'Key Objectives',
            placeholder: 'List the primary objectives of this plan',
            required: true,
            validation: { minLength: 50, maxLength: 1000 }
          }
        ]
      },
      {
        id: 'risk-assessment',
        title: 'Risk Assessment',
        description: 'Identification and analysis of potential risks and threats',
        content: 'This section identifies and analyzes potential risks that could impact the organization\'s ability to continue operations.',
        order: 2,
        isRequired: true,
        fields: [
          {
            name: 'riskCategories',
            type: 'select',
            label: 'Primary Risk Categories',
            options: ['Natural Disasters', 'Technology Failures', 'Human Error', 'Cybersecurity', 'Supply Chain', 'Regulatory'],
            required: true
          }
        ]
      },
      {
        id: 'business-impact-analysis',
        title: 'Business Impact Analysis',
        description: 'Analysis of critical business functions and their recovery requirements',
        content: 'This section analyzes the impact of disruptions on critical business functions and establishes recovery time objectives.',
        order: 3,
        isRequired: true,
        fields: [
          {
            name: 'criticalFunctions',
            type: 'textarea',
            label: 'Critical Business Functions',
            placeholder: 'List all critical business functions and their importance',
            required: true,
            validation: { minLength: 100, maxLength: 2000 }
          }
        ]
      },
      {
        id: 'recovery-procedures',
        title: 'Recovery Procedures',
        description: 'Step-by-step procedures for recovering from various types of disruptions',
        content: 'This section provides detailed procedures for recovering from different types of disruptions and restoring normal operations.',
        order: 4,
        isRequired: true,
        fields: [
          {
            name: 'recoverySteps',
            type: 'textarea',
            label: 'Recovery Steps',
            placeholder: 'Describe the key steps for recovery procedures',
            required: true,
            validation: { minLength: 100, maxLength: 2000 }
          }
        ]
      },
      {
        id: 'communication-plan',
        title: 'Communication Plan',
        description: 'Procedures for communicating during and after a disruption',
        content: 'This section outlines communication procedures for stakeholders during and after a business disruption.',
        order: 5,
        isRequired: true,
        fields: [
          {
            name: 'stakeholders',
            type: 'textarea',
            label: 'Key Stakeholders',
            placeholder: 'List key stakeholders and their contact information',
            required: true,
            validation: { minLength: 50, maxLength: 1000 }
          }
        ]
      }
    ],
    riskCategories: [
      {
        category: 'natural',
        risks: [
          {
            title: 'Natural Disasters',
            description: 'Earthquakes, floods, hurricanes, and other natural events',
            commonMitigations: ['Emergency evacuation plans', 'Backup facilities', 'Insurance coverage']
          },
          {
            title: 'Pandemic',
            description: 'Widespread illness affecting staff and operations',
            commonMitigations: ['Remote work capabilities', 'Health screening protocols', 'Vaccination programs']
          }
        ]
      },
      {
        category: 'technical',
        risks: [
          {
            title: 'IT System Failures',
            description: 'Hardware or software failures affecting critical systems',
            commonMitigations: ['Backup systems', 'Redundant infrastructure', 'Regular maintenance']
          },
          {
            title: 'Cybersecurity Incidents',
            description: 'Data breaches, ransomware, and other cyber attacks',
            commonMitigations: ['Security training', 'Multi-factor authentication', 'Regular backups']
          }
        ]
      }
    ],
    criticalFunctions: [
      {
        function: 'Patient Care',
        description: 'Direct patient care services and medical procedures',
        typicalRTO: 4,
        typicalRPO: 1,
        commonDependencies: ['Medical staff', 'Medical equipment', 'Patient records']
      },
      {
        function: 'Emergency Services',
        description: 'Emergency room and critical care services',
        typicalRTO: 2,
        typicalRPO: 0.5,
        commonDependencies: ['Emergency staff', 'Life support equipment', 'Blood bank']
      }
    ],
    complianceRequirements: [
      {
        standard: 'HIPAA',
        description: 'Health Insurance Portability and Accountability Act',
        requirements: ['Patient data protection', 'Access controls', 'Audit trails', 'Breach notification']
      }
    ],
    tags: ['healthcare', 'HIPAA', 'patient-care', 'emergency-services'],
    usageCount: 0,
    rating: { average: 0, count: 0 },
    isActive: true
  },
  {
    name: 'Financial Services Business Continuity Template',
    description: 'Comprehensive business continuity plan template for financial institutions, including SOX compliance and regulatory requirements.',
    industry: 'finance',
    organizationSize: 'all',
    isPublic: true,
    sections: [
      {
        id: 'executive-summary',
        title: 'Executive Summary',
        description: 'High-level overview of the business continuity plan',
        content: 'This section provides a comprehensive overview of the organization\'s business continuity strategy for financial services.',
        order: 1,
        isRequired: true,
        fields: [
          {
            name: 'planPurpose',
            type: 'textarea',
            label: 'Plan Purpose',
            placeholder: 'Describe the purpose and scope of this business continuity plan',
            required: true,
            validation: { minLength: 50, maxLength: 1000 }
          }
        ]
      },
      {
        id: 'regulatory-compliance',
        title: 'Regulatory Compliance',
        description: 'Compliance with financial regulations and standards',
        content: 'This section addresses compliance with financial regulations including SOX, Basel III, and other relevant standards.',
        order: 2,
        isRequired: true,
        fields: [
          {
            name: 'complianceRequirements',
            type: 'textarea',
            label: 'Compliance Requirements',
            placeholder: 'List all applicable regulatory requirements',
            required: true,
            validation: { minLength: 100, maxLength: 2000 }
          }
        ]
      }
    ],
    riskCategories: [
      {
        category: 'technical',
        risks: [
          {
            title: 'Trading System Failures',
            description: 'Failures in trading platforms and financial systems',
            commonMitigations: ['Backup trading systems', 'Manual procedures', 'Alternative platforms']
          }
        ]
      }
    ],
    criticalFunctions: [
      {
        function: 'Trading Operations',
        description: 'Financial trading and market operations',
        typicalRTO: 1,
        typicalRPO: 0.25,
        commonDependencies: ['Trading systems', 'Market data', 'Clearing systems']
      }
    ],
    complianceRequirements: [
      {
        standard: 'SOX',
        description: 'Sarbanes-Oxley Act',
        requirements: ['Internal controls', 'Financial reporting', 'Audit trails']
      }
    ],
    tags: ['finance', 'SOX', 'trading', 'compliance'],
    usageCount: 0,
    rating: { average: 0, count: 0 },
    isActive: true
  },
  {
    name: 'Technology Company Business Continuity Template',
    description: 'Business continuity plan template for technology companies, focusing on IT infrastructure and service delivery.',
    industry: 'technology',
    organizationSize: 'all',
    isPublic: true,
    sections: [
      {
        id: 'executive-summary',
        title: 'Executive Summary',
        description: 'High-level overview of the business continuity plan',
        content: 'This section provides a comprehensive overview of the organization\'s business continuity strategy for technology services.',
        order: 1,
        isRequired: true,
        fields: [
          {
            name: 'planPurpose',
            type: 'textarea',
            label: 'Plan Purpose',
            placeholder: 'Describe the purpose and scope of this business continuity plan',
            required: true,
            validation: { minLength: 50, maxLength: 1000 }
          }
        ]
      }
    ],
    riskCategories: [
      {
        category: 'technical',
        risks: [
          {
            title: 'Data Center Failures',
            description: 'Failures in data centers and cloud infrastructure',
            commonMitigations: ['Multi-region deployment', 'Backup data centers', 'Cloud redundancy']
          }
        ]
      }
    ],
    criticalFunctions: [
      {
        function: 'Service Delivery',
        description: 'Core technology services and applications',
        typicalRTO: 2,
        typicalRPO: 1,
        commonDependencies: ['Infrastructure', 'Development team', 'Customer support']
      }
    ],
    complianceRequirements: [
      {
        standard: 'ISO 27001',
        description: 'Information Security Management System',
        requirements: ['Security policies', 'Risk management', 'Incident response']
      }
    ],
    tags: ['technology', 'ISO27001', 'cloud', 'infrastructure'],
    usageCount: 0,
    rating: { average: 0, count: 0 },
    isActive: true
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/business_continuity_planner');
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Template.deleteMany({});
    await Plan.deleteMany({});
    console.log('Cleared existing data');

    // Create users
    const users = [];
    for (const userData of sampleUsers) {
      const user = new User(userData);
      await user.save();
      users.push(user);
      console.log(`Created user: ${user.email}`);
    }

    // Create templates
    const templates = [];
    for (const templateData of sampleTemplates) {
      const template = new Template({
        ...templateData,
        createdBy: users[0]._id // Assign to admin user
      });
      await template.save();
      templates.push(template);
      console.log(`Created template: ${template.name}`);
    }

    // Create sample plans
    const samplePlans = [
      {
        title: 'Acme Corporation Business Continuity Plan 2024',
        description: 'Comprehensive business continuity plan for Acme Corporation covering all critical business functions and recovery procedures.',
        organization: {
          name: 'Acme Corporation',
          industry: 'technology',
          size: 'large',
          location: {
            address: '123 Tech Street',
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
          }
        },
        owner: users[0]._id,
        status: 'active',
        version: '1.0',
        template: templates[2]._id,
        sections: [
          {
            id: 'executive-summary',
            title: 'Executive Summary',
            content: 'This business continuity plan ensures Acme Corporation can maintain operations during various types of disruptions.',
            order: 1,
            isRequired: true,
            completed: true,
            lastUpdated: new Date()
          }
        ],
        riskAssessment: {
          overallRisk: 'medium',
          risks: [
            {
              id: 'risk-1',
              title: 'Data Center Outage',
              description: 'Potential failure of primary data center affecting customer services',
              category: 'technical',
              probability: 'medium',
              impact: 'high',
              mitigation: 'Maintain backup data center with real-time replication',
              contingency: 'Activate backup systems within 2 hours'
            }
          ]
        },
        businessImpactAnalysis: {
          criticalFunctions: [
            {
              function: 'Customer Service Platform',
              description: 'Core platform serving customer applications',
              rto: 4,
              rpo: 1,
              dependencies: ['Database systems', 'API services', 'Monitoring tools'],
              impact: 'critical'
            }
          ],
          resources: [
            {
              type: 'personnel',
              name: 'Development Team',
              description: 'Software development and maintenance team',
              criticality: 'high',
              backup: 'Contract developers and offshore team'
            }
          ]
        },
        recoveryProcedures: [
          {
            id: 'proc-1',
            title: 'Data Center Recovery',
            description: 'Procedures for recovering from data center failures',
            steps: [
              {
                step: 1,
                action: 'Assess the extent of the failure',
                responsible: 'IT Operations Manager',
                timeframe: '15 minutes',
                resources: ['Monitoring tools', 'Emergency contacts']
              },
              {
                step: 2,
                action: 'Activate backup data center',
                responsible: 'Systems Administrator',
                timeframe: '30 minutes',
                resources: ['Backup systems', 'Network configuration']
              }
            ],
            triggers: ['Primary data center down', 'Network connectivity lost'],
            escalation: {
              contact: 'CTO',
              timeframe: '1 hour'
            }
          }
        ],
        communicationPlan: {
          stakeholders: [
            {
              name: 'John Doe',
              role: 'CEO',
              contact: {
                email: 'john.doe@acme.com',
                phone: '+1-555-0123',
                alternative: '+1-555-0124'
              },
              notificationLevel: 'immediate'
            }
          ],
          templates: [
            {
              type: 'incident',
              subject: 'Business Continuity Event - {event_type}',
              content: 'A business continuity event has occurred. Please follow the established procedures.'
            }
          ]
        },
        testingSchedule: [
          {
            testType: 'tabletop',
            description: 'Quarterly tabletop exercise for data center recovery',
            scheduledDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            lastConducted: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
            results: 'Test completed successfully with minor improvements needed',
            improvements: ['Update contact information', 'Review backup procedures']
          }
        ],
        lastReviewed: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        nextReview: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
      }
    ];

    for (const planData of samplePlans) {
      const plan = new Plan(planData);
      await plan.save();
      console.log(`Created plan: ${plan.title}`);
    }

    console.log('Database seeded successfully!');
    console.log(`Created ${users.length} users, ${templates.length} templates, and ${samplePlans.length} plans`);

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Run the seed function
seedDatabase();