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
  IconButton,
  Menu,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem as SelectMenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  Add as AddIcon,
  MoreVert as MoreVertIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
  Assessment as AssessmentIcon,
  FilterList as FilterIcon,
} from '@mui/icons-material';
import { usePlan } from '../contexts/PlanContext';

const Plans: React.FC = () => {
  const { plans, fetchPlans, deletePlan, loading, error } = usePlan();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, planId: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedPlan(planId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedPlan(null);
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
    handleMenuClose();
  };

  const handleDeleteConfirm = async () => {
    if (selectedPlan) {
      try {
        await deletePlan(selectedPlan);
        setDeleteDialogOpen(false);
      } catch (error) {
        console.error('Delete failed:', error);
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'success';
      case 'draft': return 'warning';
      case 'in_review': return 'info';
      case 'approved': return 'primary';
      case 'archived': return 'default';
      default: return 'default';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'success';
      case 'medium': return 'warning';
      case 'high': return 'error';
      case 'critical': return 'error';
      default: return 'default';
    }
  };

  const filteredPlans = plans.filter(plan => {
    const matchesStatus = !filterStatus || plan.status === filterStatus;
    const matchesIndustry = !filterIndustry || plan.organization.industry === filterIndustry;
    const matchesSearch = !searchTerm || 
      plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.organization.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStatus && matchesIndustry && matchesSearch;
  });

  const industries = [...new Set(plans.map(plan => plan.organization.industry))];

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Business Continuity Plans
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Manage and monitor your organization's business continuity plans
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/plans/create')}
        >
          Create New Plan
        </Button>
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
                label="Search plans"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Status</InputLabel>
                <Select
                  value={filterStatus}
                  label="Status"
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <SelectMenuItem value="">All Statuses</SelectMenuItem>
                  <SelectMenuItem value="draft">Draft</SelectMenuItem>
                  <SelectMenuItem value="in_review">In Review</SelectMenuItem>
                  <SelectMenuItem value="approved">Approved</SelectMenuItem>
                  <SelectMenuItem value="active">Active</SelectMenuItem>
                  <SelectMenuItem value="archived">Archived</SelectMenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Industry</InputLabel>
                <Select
                  value={filterIndustry}
                  label="Industry"
                  onChange={(e) => setFilterIndustry(e.target.value)}
                >
                  <SelectMenuItem value="">All Industries</SelectMenuItem>
                  {industries.map((industry) => (
                    <SelectMenuItem key={industry} value={industry}>
                      {industry.charAt(0).toUpperCase() + industry.slice(1).replace('_', ' ')}
                    </SelectMenuItem>
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
                  setFilterStatus('');
                  setFilterIndustry('');
                  setSearchTerm('');
                }}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Plans Grid */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : filteredPlans.length > 0 ? (
        <Grid container spacing={3}>
          {filteredPlans.map((plan) => (
            <Grid item xs={12} md={6} lg={4} key={plan._id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" component="h2" sx={{ flexGrow: 1, mr: 1 }}>
                      {plan.title}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={(e) => handleMenuOpen(e, plan._id)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {plan.organization.name}
                  </Typography>
                  
                  <Typography variant="body2" sx={{ mb: 2, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {plan.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <Chip
                      label={plan.status}
                      size="small"
                      color={getStatusColor(plan.status) as any}
                    />
                    <Chip
                      label={plan.organization.industry}
                      size="small"
                      variant="outlined"
                    />
                    {plan.riskAssessment?.overallRisk && (
                      <Chip
                        label={`Risk: ${plan.riskAssessment.overallRisk}`}
                        size="small"
                        color={getRiskColor(plan.riskAssessment.overallRisk) as any}
                      />
                    )}
                  </Box>
                  
                  <Typography variant="caption" color="text.secondary">
                    Last updated: {new Date(plan.updatedAt).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Card>
          <CardContent sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No plans found
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {plans.length === 0 
                ? "You haven't created any business continuity plans yet."
                : "No plans match your current filters."
              }
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => navigate('/plans/create')}
            >
              Create Your First Plan
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => { navigate(`/plans/${selectedPlan}`); handleMenuClose(); }}>
          <ViewIcon sx={{ mr: 1 }} />
          View Details
        </MenuItem>
        <MenuItem onClick={() => { navigate(`/plans/${selectedPlan}/edit`); handleMenuClose(); }}>
          <EditIcon sx={{ mr: 1 }} />
          Edit Plan
        </MenuItem>
        <MenuItem onClick={() => { navigate(`/assessments?plan=${selectedPlan}`); handleMenuClose(); }}>
          <AssessmentIcon sx={{ mr: 1 }} />
          Start Assessment
        </MenuItem>
        <MenuItem onClick={handleDeleteClick} sx={{ color: 'error.main' }}>
          <DeleteIcon sx={{ mr: 1 }} />
          Delete Plan
        </MenuItem>
      </Menu>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Delete Plan</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this plan? This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Plans;