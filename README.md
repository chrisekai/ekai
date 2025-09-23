# Business Continuity Planner

A comprehensive web application for developing and managing business continuity plans across various industries and organizations.

## Features

### Core Functionality
- **Plan Creation & Management**: Create, edit, and manage business continuity plans with industry-specific templates
- **Risk Assessment**: Comprehensive risk identification, analysis, and mitigation planning
- **Business Impact Analysis**: Analyze critical business functions and establish recovery objectives
- **Recovery Procedures**: Detailed step-by-step recovery procedures for various scenarios
- **Communication Planning**: Stakeholder communication plans and notification procedures
- **Testing & Validation**: Schedule and track business continuity plan testing activities
- **Document Management**: Upload, organize, and manage plan-related documents
- **Assessment Tools**: Evaluate plan effectiveness and maturity levels

### Industry-Specific Templates
- Healthcare (HIPAA compliance)
- Finance & Banking (SOX, Basel III)
- Technology (ISO 27001)
- Manufacturing
- Retail
- Education
- Government
- Energy & Utilities
- Telecommunications
- Transportation
- Hospitality
- Real Estate
- Consulting
- Non-Profit
- And more...

### User Management
- Role-based access control (Admin, Manager, User)
- User authentication and authorization
- Organization management
- Collaboration features

## Technology Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Multer** for file uploads
- **Puppeteer** for PDF generation
- **Nodemailer** for email notifications

### Frontend
- **React** with TypeScript
- **Material-UI** for modern UI components
- **React Router** for navigation
- **Axios** for API communication
- **Recharts** for data visualization

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Backend Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Environment Configuration**:
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/business_continuity_planner
   JWT_SECRET=your_super_secret_jwt_key_here
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   MAX_FILE_SIZE=10485760
   UPLOAD_PATH=./uploads
   BCRYPT_ROUNDS=12
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100
   ```

3. **Start the server**:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to client directory**:
   ```bash
   cd client
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

### Database Seeding

To populate the database with sample data:

```bash
node seed-data.js
```

This will create:
- Sample users (admin, manager, user roles)
- Industry-specific templates
- Sample business continuity plans

## Usage

### Getting Started

1. **Register an Account**: Create a new account with your organization details
2. **Choose a Template**: Select an industry-specific template that matches your organization
3. **Create Your Plan**: Follow the guided process to create your business continuity plan
4. **Customize Sections**: Fill in the template sections with your organization's specific information
5. **Risk Assessment**: Identify and analyze potential risks to your organization
6. **Business Impact Analysis**: Define critical functions and recovery objectives
7. **Recovery Procedures**: Develop detailed recovery procedures for various scenarios
8. **Communication Plan**: Establish stakeholder communication procedures
9. **Testing Schedule**: Plan and schedule regular testing of your continuity plan
10. **Review & Approve**: Review your plan and get necessary approvals

### Key Features

#### Plan Management
- Create multiple plans for different scenarios
- Version control and change tracking
- Collaboration with team members
- Document attachments and references

#### Risk Assessment
- Comprehensive risk identification
- Risk categorization and prioritization
- Mitigation strategies and contingency plans
- Risk monitoring and updates

#### Business Impact Analysis
- Critical function identification
- Recovery Time Objectives (RTO)
- Recovery Point Objectives (RPO)
- Resource dependencies and alternatives

#### Assessment & Testing
- Plan effectiveness assessments
- Maturity level evaluation
- Regular testing schedules
- Improvement recommendations

## API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/password` - Change password

### Plan Management Endpoints
- `GET /api/plans` - Get all plans
- `POST /api/plans` - Create new plan
- `GET /api/plans/:id` - Get specific plan
- `PUT /api/plans/:id` - Update plan
- `DELETE /api/plans/:id` - Delete plan
- `POST /api/plans/:id/collaborators` - Add collaborator
- `POST /api/plans/:id/approve` - Approve plan

### Template Endpoints
- `GET /api/templates` - Get all templates
- `POST /api/templates` - Create template (admin only)
- `GET /api/templates/:id` - Get specific template
- `PUT /api/templates/:id` - Update template
- `POST /api/templates/:id/use` - Mark template as used

### Assessment Endpoints
- `GET /api/assessments` - Get all assessments
- `POST /api/assessments` - Create new assessment
- `GET /api/assessments/:id` - Get specific assessment
- `PUT /api/assessments/:id` - Update assessment
- `POST /api/assessments/:id/complete` - Complete assessment

### Document Endpoints
- `POST /api/documents/upload/:planId` - Upload document
- `GET /api/documents/:planId` - Get plan documents
- `GET /api/documents/download/:planId/:attachmentId` - Download document
- `DELETE /api/documents/:planId/:attachmentId` - Delete document

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting for API endpoints
- Input validation and sanitization
- CORS configuration
- Helmet.js security headers
- File upload restrictions

## Deployment

### Production Deployment

1. **Build the frontend**:
   ```bash
   cd client
   npm run build
   ```

2. **Set production environment variables**:
   ```env
   NODE_ENV=production
   MONGODB_URI=your_production_mongodb_uri
   JWT_SECRET=your_production_jwt_secret
   ```

3. **Start the production server**:
   ```bash
   npm start
   ```

### Docker Deployment

```dockerfile
# Dockerfile example
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN cd client && npm install && npm run build

EXPOSE 5000

CMD ["npm", "start"]
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation wiki

## Roadmap

### Upcoming Features
- Advanced reporting and analytics
- Integration with external systems
- Mobile application
- AI-powered risk assessment
- Automated compliance checking
- Multi-language support
- Advanced workflow management
- Real-time collaboration features

### Version History
- **v1.0.0** - Initial release with core functionality
- **v1.1.0** - Enhanced assessment tools
- **v1.2.0** - Mobile responsiveness improvements
- **v2.0.0** - Advanced reporting and analytics (planned)