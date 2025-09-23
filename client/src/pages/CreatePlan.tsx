import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  CircularProgress,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Business as BusinessIcon,
  Security as SecurityIcon,
  Assessment as AssessmentIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { usePlan } from '../contexts/PlanContext';

const CreatePlan: React.FC = () => {
  const { user } = useAuth();
  const { createPlan, templates, fetchTemplates, loading, error } = usePlan();
  const navigate = useNavigate();
  
  const [activeStep, setActiveStep] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    organization: {
      name: user?.organization?.name || '',
      industry: user?.organization?.industry || '',
      size: user?.organization?.size || '',
      location: {
        address: '',
        city: '',
        state: '',
        country: '',
      },
    },
  });

  const steps = [
    'Choose Template',
    'Basic Information',
    'Organization Details',
    'Review & Create',
  ];

  useEffect(() => {
    fetchTemplates();
  }, [fetchTemplates]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('organization.location.')) {
      const locationField = name.split('.')[2];
      setFormData(prev => ({
        ...prev,
        organization: {
          ...prev.organization,
          location: {
            ...prev.organization.location,
            [locationField]: value,
          },
        },
      }));
    } else if (name.startsWith('organization.')) {
      const orgField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        organization: {
          ...prev.organization,
          [orgField]: value,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      const planData = {
        ...formData,
        template: selectedTemplate,
      };
      const newPlan = await createPlan(planData);
      navigate(`/plans/${newPlan._id}`);
    } catch (error) {
      console.error('Create plan error:', error);
    }
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 0:
        return selectedTemplate !== null;
      case 1:
        return formData.title.trim() !== '' && formData.description.trim() !== '';
      case 2:
        return formData.organization.name.trim() !== '' && 
               formData.organization.industry !== '' && 
               formData.organization.size !== '';
      case 3:
        return true;
      default:
        return false;
    }
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Choose a Template
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Select a template that best matches your industry and organization size to get started quickly.
            </Typography>
            <Grid container spacing={2}>
              {templates.map((template) => (
                <Grid item xs={12} md={6} key={template._id}>
                  <Card
                    sx={{
                      cursor: 'pointer',
                      border: selectedTemplate === template._id ? 2 : 1,
                      borderColor: selectedTemplate === template._id ? 'primary.main' : 'divider',
                      '&:hover': {
                        borderColor: 'primary.main',
                      },
                    }}
                    onClick={() => setSelectedTemplate(template._id)}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                        <Typography variant="h6">{template.name}</Typography>
                        {selectedTemplate === template._id && (
                          <CheckCircleIcon color="primary" />
                        )}
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {template.description}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Chip label={template.industry} size="small" />
                        <Chip label={template.organizationSize} size="small" variant="outlined" />
                        <Chip label={`v${template.version}`} size="small" variant="outlined" />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        );

      case 1:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Basic Information
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Plan Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Corporate Business Continuity Plan 2024"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Description"
                  name="description"
                  multiline
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Provide a brief description of this business continuity plan..."
                />
              </Grid>
            </Grid>
          </Box>
        );

      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Organization Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Organization Name"
                  name="organization.name"
                  value={formData.organization.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Industry</InputLabel>
                  <Select
                    name="organization.industry"
                    value={formData.organization.industry}
                    label="Industry"
                    onChange={handleChange}
                  >
                    <MenuItem value="healthcare">Healthcare</MenuItem>
                    <MenuItem value="finance">Finance & Banking</MenuItem>
                    <MenuItem value="technology">Technology</MenuItem>
                    <MenuItem value="manufacturing">Manufacturing</MenuItem>
                    <MenuItem value="retail">Retail</MenuItem>
                    <MenuItem value="education">Education</MenuItem>
                    <MenuItem value="government">Government</MenuItem>
                    <MenuItem value="energy">Energy & Utilities</MenuItem>
                    <MenuItem value="telecommunications">Telecommunications</MenuItem>
                    <MenuItem value="transportation">Transportation</MenuItem>
                    <MenuItem value="hospitality">Hospitality</MenuItem>
                    <MenuItem value="real_estate">Real Estate</MenuItem>
                    <MenuItem value="consulting">Consulting</MenuItem>
                    <MenuItem value="non_profit">Non-Profit</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Organization Size</InputLabel>
                  <Select
                    name="organization.size"
                    value={formData.organization.size}
                    label="Organization Size"
                    onChange={handleChange}
                  >
                    <MenuItem value="small">Small (1-50 employees)</MenuItem>
                    <MenuItem value="medium">Medium (51-200 employees)</MenuItem>
                    <MenuItem value="large">Large (201-1000 employees)</MenuItem>
                    <MenuItem value="enterprise">Enterprise (1000+ employees)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Address"
                  name="organization.location.address"
                  value={formData.organization.location.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="City"
                  name="organization.location.city"
                  value={formData.organization.location.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="State/Province"
                  name="organization.location.state"
                  value={formData.organization.location.state}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Country"
                  name="organization.location.country"
                  value={formData.organization.location.country}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>
        );

      case 3:
        const selectedTemplateData = templates.find(t => t._id === selectedTemplate);
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Review & Create
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Please review your plan details before creating it.
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Plan Information
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary="Title" secondary={formData.title} />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><BusinessIcon /></ListItemIcon>
                        <ListItemText primary="Organization" secondary={formData.organization.name} />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><SecurityIcon /></ListItemIcon>
                        <ListItemText primary="Industry" secondary={formData.organization.industry} />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><AssessmentIcon /></ListItemIcon>
                        <ListItemText primary="Size" secondary={formData.organization.size} />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Selected Template
                    </Typography>
                    {selectedTemplateData ? (
                      <Box>
                        <Typography variant="subtitle1" gutterBottom>
                          {selectedTemplateData.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          {selectedTemplateData.description}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                          <Chip label={selectedTemplateData.industry} size="small" />
                          <Chip label={selectedTemplateData.organizationSize} size="small" variant="outlined" />
                        </Box>
                      </Box>
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        No template selected
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create New Plan
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Follow the steps below to create a comprehensive business continuity plan for your organization.
        </Typography>
      </Box>

      <Paper sx={{ p: 3 }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box sx={{ mb: 4 }}>
          {renderStepContent(activeStep)}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Box>
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} /> : null}
              >
                {loading ? 'Creating...' : 'Create Plan'}
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={!isStepValid(activeStep)}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreatePlan;