import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  CircularProgress,
  Rating,
  IconButton,
  Menu,
  MenuItem as MenuItemComponent,
} from '@mui/material';
import {
  Add as AddIcon,
  FilterList as FilterIcon,
  MoreVert as MoreVertIcon,
  Star as StarIcon,
  Visibility as ViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { usePlan } from '../contexts/PlanContext';

const Templates: React.FC = () => {
  const { user } = useAuth();
  const { templates, fetchTemplates, loading, error } = usePlan();
  const navigate = useNavigate();
  const [filterIndustry, setFilterIndustry] = useState('');
  const [filterSize, setFilterSize] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  useEffect(() => {
    fetchTemplates();
  }, [fetchTemplates]);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, templateId: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedTemplate(templateId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedTemplate(null);
  };

  const handleUseTemplate = () => {
    if (selectedTemplate) {
      navigate(`/plans/create?template=${selectedTemplate}`);
    }
    handleMenuClose();
  };

  const industries = [
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
    'other',
  ];

  const organizationSizes = [
    { value: 'small', label: 'Small (1-50 employees)' },
    { value: 'medium', label: 'Medium (51-200 employees)' },
    { value: 'large', label: 'Large (201-1000 employees)' },
    { value: 'enterprise', label: 'Enterprise (1000+ employees)' },
    { value: 'all', label: 'All Sizes' },
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesIndustry = !filterIndustry || template.industry === filterIndustry;
    const matchesSize = !filterSize || template.organizationSize === filterSize || template.organizationSize === 'all';
    const matchesSearch = !searchTerm || 
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesIndustry && matchesSize && matchesSearch;
  });

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Plan Templates
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Choose from industry-specific templates to quickly create your business continuity plan
          </Typography>
        </Box>
        {user?.role === 'admin' && (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => navigate('/templates/create')}
          >
            Create Template
          </Button>
        )}
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Filters */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Search templates"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Industry</InputLabel>
                <Select
                  value={filterIndustry}
                  label="Industry"
                  onChange={(e) => setFilterIndustry(e.target.value)}
                >
                  <MenuItem value="">All Industries</MenuItem>
                  {industries.map((industry) => (
                    <MenuItem key={industry} value={industry}>
                      {industry.charAt(0).toUpperCase() + industry.slice(1).replace('_', ' ')}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Organization Size</InputLabel>
                <Select
                  value={filterSize}
                  label="Organization Size"
                  onChange={(e) => setFilterSize(e.target.value)}
                >
                  <MenuItem value="">All Sizes</MenuItem>
                  {organizationSizes.map((size) => (
                    <MenuItem key={size.value} value={size.value}>
                      {size.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<FilterIcon />}
                onClick={() => {
                  setFilterIndustry('');
                  setFilterSize('');
                  setSearchTerm('');
                }}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Templates Grid */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : filteredTemplates.length > 0 ? (
        <Grid container spacing={3}>
          {filteredTemplates.map((template) => (
            <Grid item xs={12} md={6} lg={4} key={template._id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" component="h2" sx={{ flexGrow: 1, mr: 1 }}>
                      {template.name}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={(e) => handleMenuOpen(e, template._id)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {template.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <Chip
                      label={template.industry}
                      size="small"
                      color="primary"
                    />
                    <Chip
                      label={template.organizationSize}
                      size="small"
                      variant="outlined"
                    />
                    <Chip
                      label={`v${template.version}`}
                      size="small"
                      variant="outlined"
                    />
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Rating
                      value={template.rating.average}
                      readOnly
                      size="small"
                      precision={0.1}
                    />
                    <Typography variant="caption" color="text.secondary">
                      ({template.rating.count} reviews)
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                      Used {template.usageCount} times
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => navigate(`/plans/create?template=${template._id}`)}
                    >
                      Use Template
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Card>
          <CardContent sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No templates found
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {templates.length === 0 
                ? "No templates are available yet."
                : "No templates match your current filters."
              }
            </Typography>
            {user?.role === 'admin' && (
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => navigate('/templates/create')}
              >
                Create First Template
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItemComponent onClick={handleUseTemplate}>
          <ViewIcon sx={{ mr: 1 }} />
          Use Template
        </MenuItemComponent>
        <MenuItemComponent onClick={() => { navigate(`/templates/${selectedTemplate}`); handleMenuClose(); }}>
          <ViewIcon sx={{ mr: 1 }} />
          View Details
        </MenuItemComponent>
        {user?.role === 'admin' && (
          <>
            <MenuItemComponent onClick={() => { navigate(`/templates/${selectedTemplate}/edit`); handleMenuClose(); }}>
              <EditIcon sx={{ mr: 1 }} />
              Edit Template
            </MenuItemComponent>
            <MenuItemComponent onClick={handleMenuClose} sx={{ color: 'error.main' }}>
              <DeleteIcon sx={{ mr: 1 }} />
              Delete Template
            </MenuItemComponent>
          </>
        )}
      </Menu>
    </Container>
  );
};

export default Templates;