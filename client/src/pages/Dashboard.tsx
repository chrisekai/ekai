import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
} from '@mui/material';
import {
  Add as AddIcon,
  Description as PlansIcon,
  Assessment as AssessmentIcon,
  TrendingUp as TrendingUpIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { usePlan } from '../contexts/PlanContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { plans, fetchPlans, loading } = usePlan();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalPlans: 0,
    activePlans: 0,
    draftPlans: 0,
    completedAssessments: 0,
  });

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  useEffect(() => {
    if (plans.length > 0) {
      const totalPlans = plans.length;
      const activePlans = plans.filter(plan => plan.status === 'active').length;
      const draftPlans = plans.filter(plan => plan.status === 'draft').length;
      
      setStats({
        totalPlans,
        activePlans,
        draftPlans,
        completedAssessments: 0, // This would come from assessments API
      });
    }
  }, [plans]);

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

  const recentPlans = plans.slice(0, 5);
  const upcomingReviews = plans.filter(plan => 
    plan.nextReview && new Date(plan.nextReview) <= new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
  ).slice(0, 3);

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome back, {user?.firstName}!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Here's an overview of your business continuity planning activities.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Quick Actions */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => navigate('/plans/create')}
                  fullWidth
                >
                  Create New Plan
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<PlansIcon />}
                  onClick={() => navigate('/plans')}
                  fullWidth
                >
                  View All Plans
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<AssessmentIcon />}
                  onClick={() => navigate('/assessments')}
                  fullWidth
                >
                  Start Assessment
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Statistics */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" color="primary">
                    {stats.totalPlans}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Plans
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" color="success.main">
                    {stats.activePlans}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Active Plans
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" color="warning.main">
                    {stats.draftPlans}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Draft Plans
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" color="info.main">
                    {stats.completedAssessments}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Assessments
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Recent Plans */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">
                  Recent Plans
                </Typography>
                <Button size="small" onClick={() => navigate('/plans')}>
                  View All
                </Button>
              </Box>
              {loading ? (
                <LinearProgress />
              ) : recentPlans.length > 0 ? (
                <List>
                  {recentPlans.map((plan) => (
                    <ListItem
                      key={plan._id}
                      button
                      onClick={() => navigate(`/plans/${plan._id}`)}
                    >
                      <ListItemIcon>
                        <PlansIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={plan.title}
                        secondary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                            <Chip
                              label={plan.status}
                              size="small"
                              color={getStatusColor(plan.status) as any}
                            />
                            <Typography variant="caption" color="text.secondary">
                              {new Date(plan.updatedAt).toLocaleDateString()}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 2 }}>
                  No plans yet. Create your first plan to get started.
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Reviews */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upcoming Reviews
              </Typography>
              {upcomingReviews.length > 0 ? (
                <List>
                  {upcomingReviews.map((plan) => (
                    <ListItem key={plan._id}>
                      <ListItemIcon>
                        <ScheduleIcon color="warning" />
                      </ListItemIcon>
                      <ListItemText
                        primary={plan.title}
                        secondary={
                          <Typography variant="caption" color="warning.main">
                            Due: {new Date(plan.nextReview).toLocaleDateString()}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 2 }}>
                  No upcoming reviews scheduled.
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Risk Overview */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Risk Overview
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'success.light', color: 'success.contrastText' }}>
                    <CheckCircleIcon sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h6">Low Risk</Typography>
                    <Typography variant="body2">
                      {plans.filter(plan => plan.riskAssessment?.overallRisk === 'low').length} Plans
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'warning.light', color: 'warning.contrastText' }}>
                    <WarningIcon sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h6">Medium Risk</Typography>
                    <Typography variant="body2">
                      {plans.filter(plan => plan.riskAssessment?.overallRisk === 'medium').length} Plans
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper sx={{ p: 2, textAlign: 'center', bgcolor: 'error.light', color: 'error.contrastText' }}>
                    <WarningIcon sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h6">High Risk</Typography>
                    <Typography variant="body2">
                      {plans.filter(plan => plan.riskAssessment?.overallRisk === 'high').length} Plans
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;