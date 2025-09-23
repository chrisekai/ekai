import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Alert,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Assessment as AssessmentIcon,
  Description as DescriptionIcon,
  Security as SecurityIcon,
  Business as BusinessIcon,
  Schedule as ScheduleIcon,
  MoreVert as MoreVertIcon,
  Download as DownloadIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import { usePlan } from '../contexts/PlanContext';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`plan-tabpanel-${index}`}
      aria-labelledby={`plan-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const PlanDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPlan, updatePlan, deletePlan, loading, error } = usePlan();
  const [plan, setPlan] = useState<any>(null);
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  useEffect(() => {
    if (id) {
      loadPlan();
    }
  }, [id]);

  const loadPlan = async () => {
    try {
      const planData = await getPlan(id!);
      setPlan(planData);
    } catch (error) {
      console.error('Failed to load plan:', error);
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
    handleMenuClose();
  };

  const handleDeleteConfirm = async () => {
    if (plan) {
      try {
        await deletePlan(plan._id);
        navigate('/plans');
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

  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error || !plan) {
    return (
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Alert severity="error">
          {error || 'Plan not found'}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {plan.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
            <Chip
              label={plan.status}
              color={getStatusColor(plan.status) as any}
            />
            <Chip
              label={plan.organization.industry}
              variant="outlined"
            />
            <Chip
              label={`v${plan.version}`}
              variant="outlined"
            />
            {plan.riskAssessment?.overallRisk && (
              <Chip
                label={`Risk: ${plan.riskAssessment.overallRisk}`}
                color={getRiskColor(plan.riskAssessment.overallRisk) as any}
              />
            )}
          </Box>
          <Typography variant="body1" color="text.secondary">
            {plan.description}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={() => navigate(`/plans/${plan._id}/edit`)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            startIcon={<AssessmentIcon />}
            onClick={() => navigate(`/assessments?plan=${plan._id}`)}
          >
            Assessment
          </Button>
          <IconButton onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Tabs */}
      <Card>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
            <Tab label="Overview" />
            <Tab label="Risk Assessment" />
            <Tab label="Business Impact" />
            <Tab label="Recovery Procedures" />
            <Tab label="Communication Plan" />
            <Tab label="Testing Schedule" />
            <Tab label="Documents" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Organization Information
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon><BusinessIcon /></ListItemIcon>
                      <ListItemText primary="Name" secondary={plan.organization.name} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><SecurityIcon /></ListItemIcon>
                      <ListItemText primary="Industry" secondary={plan.organization.industry} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><DescriptionIcon /></ListItemIcon>
                      <ListItemText primary="Size" secondary={plan.organization.size} />
                    </ListItem>
                    {plan.organization.location?.address && (
                      <ListItem>
                        <ListItemText 
                          primary="Address" 
                          secondary={`${plan.organization.location.address}, ${plan.organization.location.city}, ${plan.organization.location.state} ${plan.organization.location.country}`} 
                        />
                      </ListItem>
                    )}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Plan Details
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText primary="Owner" secondary={`${plan.owner.firstName} ${plan.owner.lastName}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Created" secondary={new Date(plan.createdAt).toLocaleDateString()} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Last Updated" secondary={new Date(plan.updatedAt).toLocaleDateString()} />
                    </ListItem>
                    {plan.lastReviewed && (
                      <ListItem>
                        <ListItemText primary="Last Reviewed" secondary={new Date(plan.lastReviewed).toLocaleDateString()} />
                      </ListItem>
                    )}
                    {plan.nextReview && (
                      <ListItem>
                        <ListItemIcon><ScheduleIcon /></ListItemIcon>
                        <ListItemText primary="Next Review" secondary={new Date(plan.nextReview).toLocaleDateString()} />
                      </ListItem>
                    )}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {plan.collaborators && plan.collaborators.length > 0 && (
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Collaborators
                    </Typography>
                    <List dense>
                      {plan.collaborators.map((collaborator: any, index: number) => (
                        <ListItem key={index}>
                          <ListItemText 
                            primary={`${collaborator.user.firstName} ${collaborator.user.lastName}`}
                            secondary={`${collaborator.user.email} - ${collaborator.role}`}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" gutterBottom>
            Risk Assessment
          </Typography>
          {plan.riskAssessment?.risks && plan.riskAssessment.risks.length > 0 ? (
            <List>
              {plan.riskAssessment.risks.map((risk: any, index: number) => (
                <Card key={index} sx={{ mb: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                      <Typography variant="h6">{risk.title}</Typography>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Chip label={risk.category} size="small" variant="outlined" />
                        <Chip label={risk.probability} size="small" color="info" />
                        <Chip label={risk.impact} size="small" color={getRiskColor(risk.impact) as any} />
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {risk.description}
                    </Typography>
                    {risk.mitigation && (
                      <Box sx={{ mb: 1 }}>
                        <Typography variant="subtitle2">Mitigation:</Typography>
                        <Typography variant="body2">{risk.mitigation}</Typography>
                      </Box>
                    )}
                    {risk.contingency && (
                      <Box>
                        <Typography variant="subtitle2">Contingency:</Typography>
                        <Typography variant="body2">{risk.contingency}</Typography>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              ))}
            </List>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No risk assessment data available.
            </Typography>
          )}
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" gutterBottom>
            Business Impact Analysis
          </Typography>
          {plan.businessImpactAnalysis?.criticalFunctions && plan.businessImpactAnalysis.criticalFunctions.length > 0 ? (
            <List>
              {plan.businessImpactAnalysis.criticalFunctions.map((func: any, index: number) => (
                <Card key={index} sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>{func.function}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {func.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Chip label={`RTO: ${func.rto}h`} size="small" />
                      <Chip label={`RPO: ${func.rpo}h`} size="small" />
                      <Chip label={func.impact} size="small" color={getRiskColor(func.impact) as any} />
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </List>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No business impact analysis data available.
            </Typography>
          )}
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Typography variant="h6" gutterBottom>
            Recovery Procedures
          </Typography>
          {plan.recoveryProcedures && plan.recoveryProcedures.length > 0 ? (
            <List>
              {plan.recoveryProcedures.map((procedure: any, index: number) => (
                <Card key={index} sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>{procedure.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {procedure.description}
                    </Typography>
                    {procedure.steps && procedure.steps.length > 0 && (
                      <Box>
                        <Typography variant="subtitle2" gutterBottom>Steps:</Typography>
                        <List dense>
                          {procedure.steps.map((step: any, stepIndex: number) => (
                            <ListItem key={stepIndex}>
                              <ListItemText 
                                primary={`${step.step}. ${step.action}`}
                                secondary={`Responsible: ${step.responsible} | Timeframe: ${step.timeframe}`}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              ))}
            </List>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No recovery procedures available.
            </Typography>
          )}
        </TabPanel>

        <TabPanel value={tabValue} index={4}>
          <Typography variant="h6" gutterBottom>
            Communication Plan
          </Typography>
          {plan.communicationPlan?.stakeholders && plan.communicationPlan.stakeholders.length > 0 ? (
            <List>
              {plan.communicationPlan.stakeholders.map((stakeholder: any, index: number) => (
                <Card key={index} sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>{stakeholder.name}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Role: {stakeholder.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Email: {stakeholder.contact.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Phone: {stakeholder.contact.phone}
                    </Typography>
                    <Chip label={stakeholder.notificationLevel} size="small" />
                  </CardContent>
                </Card>
              ))}
            </List>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No communication plan data available.
            </Typography>
          )}
        </TabPanel>

        <TabPanel value={tabValue} index={5}>
          <Typography variant="h6" gutterBottom>
            Testing Schedule
          </Typography>
          {plan.testingSchedule && plan.testingSchedule.length > 0 ? (
            <List>
              {plan.testingSchedule.map((test: any, index: number) => (
                <Card key={index} sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>{test.testType}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {test.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      {test.scheduledDate && (
                        <Chip label={`Scheduled: ${new Date(test.scheduledDate).toLocaleDateString()}`} size="small" />
                      )}
                      {test.lastConducted && (
                        <Chip label={`Last: ${new Date(test.lastConducted).toLocaleDateString()}`} size="small" />
                      )}
                    </Box>
                    {test.results && (
                      <Box sx={{ mb: 1 }}>
                        <Typography variant="subtitle2">Results:</Typography>
                        <Typography variant="body2">{test.results}</Typography>
                      </Box>
                    )}
                  </CardContent>
                </Card>
              ))}
            </List>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No testing schedule available.
            </Typography>
          )}
        </TabPanel>

        <TabPanel value={tabValue} index={6}>
          <Typography variant="h6" gutterBottom>
            Documents
          </Typography>
          {plan.attachments && plan.attachments.length > 0 ? (
            <List>
              {plan.attachments.map((attachment: any, index: number) => (
                <ListItem key={index}>
                  <ListItemIcon><DescriptionIcon /></ListItemIcon>
                  <ListItemText 
                    primary={attachment.originalName}
                    secondary={`Uploaded: ${new Date(attachment.uploadedAt).toLocaleDateString()}`}
                  />
                  <Button
                    size="small"
                    startIcon={<DownloadIcon />}
                    onClick={() => window.open(`/api/documents/download/${plan._id}/${attachment._id}`, '_blank')}
                  >
                    Download
                  </Button>
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No documents uploaded.
            </Typography>
          )}
        </TabPanel>
      </Card>

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => { navigate(`/plans/${plan._id}/edit`); handleMenuClose(); }}>
          <EditIcon sx={{ mr: 1 }} />
          Edit Plan
        </MenuItem>
        <MenuItem onClick={() => { navigate(`/assessments?plan=${plan._id}`); handleMenuClose(); }}>
          <AssessmentIcon sx={{ mr: 1 }} />
          Start Assessment
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <DownloadIcon sx={{ mr: 1 }} />
          Export PDF
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ShareIcon sx={{ mr: 1 }} />
          Share Plan
        </MenuItem>
        <Divider />
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
            Are you sure you want to delete "{plan.title}"? This action cannot be undone.
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

export default PlanDetail;