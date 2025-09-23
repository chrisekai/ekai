import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Menu,
  MenuItem as MenuItemComponent,
} from '@mui/material';
import {
  Add as AddIcon,
  FilterList as FilterIcon,
  MoreVert as MoreVertIcon,
  Assessment as AssessmentIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  TrendingUp as TrendingUpIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

interface Assessment {
  _id: string;
  plan: {
    _id: string;
    title: string;
    organization: {
      name: string;
    };
  };
  assessor: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  assessmentType: string;
  status: string;
  overallScore: number;
  maturityLevel: string;
  createdAt: string;
  updatedAt: string;
}

const Assessments: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterType, setFilterType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null);

  useEffect(() => {
    fetchAssessments();
  }, []);

  const fetchAssessments = async () => {
    try {
      setLoading(true);
      setError('');
      // This would be an actual API call
      // const response = await axios.get('/api/assessments');
      // setAssessments(response.data.assessments);
      
      // Mock data for demonstration
      setAssessments([
        {
          _id: '1',
          plan: {
            _id: '1',
            title: 'Corporate Business Continuity Plan',
            organization: { name: 'Acme Corp' }
          },
          assessor: {
            _id: user?._id || '1',
            firstName: user?.firstName || 'John',
            lastName: user?.lastName || 'Doe'
          },
          assessmentType: 'initial',
          status: 'completed',
          overallScore: 85,
          maturityLevel: 'defined',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ]);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to fetch assessments');
    } finally {
      setLoading(false);
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, assessmentId: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedAssessment(assessmentId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedAssessment(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success';
      case 'in_progress': return 'warning';
      case 'reviewed': return 'info';
      default: return 'default';
    }
  };

  const getMaturityColor = (level: string) => {
    switch (level) {
      case 'initial': return 'error';
      case 'managed': return 'warning';
      case 'defined': return 'info';
      case 'quantitatively_managed': return 'primary';
      case 'optimizing': return 'success';
      default: return 'default';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'success';
    if (score >= 60) return 'warning';
    return 'error';
  };

  const filteredAssessments = assessments.filter(assessment => {
    const matchesStatus = !filterStatus || assessment.status === filterStatus;
    const matchesType = !filterType || assessment.assessmentType === filterType;
    const matchesSearch = !searchTerm || 
      assessment.plan.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assessment.plan.organization.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesStatus && matchesType && matchesSearch;
  });

  const assessmentTypes = [
    { value: 'initial', label: 'Initial Assessment' },
    { value: 'periodic', label: 'Periodic Review' },
    { value: 'post_incident', label: 'Post-Incident' },
    { value: 'compliance', label: 'Compliance Check' },
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Plan Assessments
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Evaluate and improve your business continuity plans through comprehensive assessments
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/assessments/create')}
        >
          Start Assessment
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
                label="Search assessments"
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
                  <MenuItem value="">All Statuses</MenuItem>
                  <MenuItem value="in_progress">In Progress</MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                  <MenuItem value="reviewed">Reviewed</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Type</InputLabel>
                <Select
                  value={filterType}
                  label="Type"
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <MenuItem value="">All Types</MenuItem>
                  {assessmentTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
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
                  setFilterStatus('');
                  setFilterType('');
                  setSearchTerm('');
                }}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Statistics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" color="primary">
                {assessments.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Assessments
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" color="success.main">
                {assessments.filter(a => a.status === 'completed').length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Completed
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" color="warning.main">
                {assessments.filter(a => a.status === 'in_progress').length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In Progress
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" color="info.main">
                {assessments.length > 0 ? Math.round(assessments.reduce((sum, a) => sum + a.overallScore, 0) / assessments.length) : 0}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Average Score
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Assessments List */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : filteredAssessments.length > 0 ? (
        <Grid container spacing={3}>
          {filteredAssessments.map((assessment) => (
            <Grid item xs={12} md={6} lg={4} key={assessment._id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" component="h2" sx={{ flexGrow: 1, mr: 1 }}>
                      {assessment.plan.title}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={(e) => handleMenuOpen(e, assessment._id)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {assessment.plan.organization.name}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    <Chip
                      label={assessment.status}
                      size="small"
                      color={getStatusColor(assessment.status) as any}
                    />
                    <Chip
                      label={assessment.assessmentType}
                      size="small"
                      variant="outlined"
                    />
                    <Chip
                      label={assessment.maturityLevel}
                      size="small"
                      color={getMaturityColor(assessment.maturityLevel) as any}
                    />
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="body2">Overall Score</Typography>
                      <Typography variant="body2" color={`${getScoreColor(assessment.overallScore)}.main`}>
                        {assessment.overallScore}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={assessment.overallScore}
                      color={getScoreColor(assessment.overallScore) as any}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>

                  <Typography variant="caption" color="text.secondary">
                    Assessed by {assessment.assessor.firstName} {assessment.assessor.lastName}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block">
                    {new Date(assessment.updatedAt).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Card>
          <CardContent sx={{ textAlign: 'center', py: 6 }}>
            <AssessmentIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No assessments found
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {assessments.length === 0 
                ? "You haven't started any assessments yet."
                : "No assessments match your current filters."
              }
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => navigate('/assessments/create')}
            >
              Start Your First Assessment
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
        <MenuItemComponent onClick={() => { navigate(`/assessments/${selectedAssessment}`); handleMenuClose(); }}>
          <ViewIcon sx={{ mr: 1 }} />
          View Details
        </MenuItemComponent>
        <MenuItemComponent onClick={() => { navigate(`/assessments/${selectedAssessment}/edit`); handleMenuClose(); }}>
          <EditIcon sx={{ mr: 1 }} />
          Edit Assessment
        </MenuItemComponent>
        <MenuItemComponent onClick={handleMenuClose}>
          <TrendingUpIcon sx={{ mr: 1 }} />
          Generate Report
        </MenuItemComponent>
        <MenuItemComponent onClick={handleMenuClose} sx={{ color: 'error.main' }}>
          <DeleteIcon sx={{ mr: 1 }} />
          Delete Assessment
        </MenuItemComponent>
      </Menu>
    </Container>
  );
};

export default Assessments;