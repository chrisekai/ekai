import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

interface Plan {
  _id: string;
  title: string;
  description: string;
  organization: {
    name: string;
    industry: string;
    size: string;
    location?: {
      address: string;
      city: string;
      state: string;
      country: string;
    };
  };
  owner: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  collaborators: Array<{
    user: {
      _id: string;
      firstName: string;
      lastName: string;
      email: string;
    };
    role: string;
    addedAt: string;
  }>;
  status: string;
  version: string;
  sections: Array<{
    id: string;
    title: string;
    content: string;
    order: number;
    isRequired: boolean;
    completed: boolean;
    lastUpdated: string;
  }>;
  riskAssessment: {
    overallRisk: string;
    risks: Array<{
      id: string;
      title: string;
      description: string;
      category: string;
      probability: string;
      impact: string;
      mitigation: string;
      contingency: string;
    }>;
  };
  businessImpactAnalysis: {
    criticalFunctions: Array<{
      function: string;
      description: string;
      rto: number;
      rpo: number;
      dependencies: string[];
      impact: string;
    }>;
    resources: Array<{
      type: string;
      name: string;
      description: string;
      criticality: string;
      backup: string;
    }>;
  };
  recoveryProcedures: Array<{
    id: string;
    title: string;
    description: string;
    steps: Array<{
      step: number;
      action: string;
      responsible: string;
      timeframe: string;
      resources: string[];
    }>;
    triggers: string[];
    escalation: {
      contact: string;
      timeframe: string;
    };
  }>;
  communicationPlan: {
    stakeholders: Array<{
      name: string;
      role: string;
      contact: {
        email: string;
        phone: string;
        alternative: string;
      };
      notificationLevel: string;
    }>;
    templates: Array<{
      type: string;
      subject: string;
      content: string;
    }>;
  };
  testingSchedule: Array<{
    testType: string;
    description: string;
    scheduledDate: string;
    lastConducted: string;
    results: string;
    improvements: string[];
  }>;
  attachments: Array<{
    _id: string;
    filename: string;
    originalName: string;
    size: number;
    uploadedAt: string;
  }>;
  lastReviewed: string;
  nextReview: string;
  createdAt: string;
  updatedAt: string;
}

interface Template {
  _id: string;
  name: string;
  description: string;
  industry: string;
  organizationSize: string;
  isPublic: boolean;
  createdBy: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  version: string;
  sections: Array<{
    id: string;
    title: string;
    description: string;
    content: string;
    order: number;
    isRequired: boolean;
    fields: Array<{
      name: string;
      type: string;
      label: string;
      placeholder: string;
      options: string[];
      required: boolean;
      validation: {
        minLength: number;
        maxLength: number;
        pattern: string;
      };
    }>;
  }>;
  riskCategories: Array<{
    category: string;
    risks: Array<{
      title: string;
      description: string;
      commonMitigations: string[];
    }>;
  }>;
  criticalFunctions: Array<{
    function: string;
    description: string;
    typicalRTO: number;
    typicalRPO: number;
    commonDependencies: string[];
  }>;
  complianceRequirements: Array<{
    standard: string;
    description: string;
    requirements: string[];
  }>;
  tags: string[];
  usageCount: number;
  rating: {
    average: number;
    count: number;
  };
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface PlanContextType {
  plans: Plan[];
  templates: Template[];
  currentPlan: Plan | null;
  loading: boolean;
  error: string | null;
  fetchPlans: () => Promise<void>;
  fetchTemplates: (industry?: string, organizationSize?: string) => Promise<void>;
  createPlan: (planData: any) => Promise<Plan>;
  updatePlan: (planId: string, planData: any) => Promise<Plan>;
  deletePlan: (planId: string) => Promise<void>;
  getPlan: (planId: string) => Promise<Plan>;
  setCurrentPlan: (plan: Plan | null) => void;
  clearError: () => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (context === undefined) {
    throw new Error('usePlan must be used within a PlanProvider');
  }
  return context;
};

interface PlanProviderProps {
  children: ReactNode;
}

export const PlanProvider: React.FC<PlanProviderProps> = ({ children }) => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [currentPlan, setCurrentPlan] = useState<Plan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = () => setError(null);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/api/plans');
      setPlans(response.data.plans);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to fetch plans');
    } finally {
      setLoading(false);
    }
  };

  const fetchTemplates = async (industry?: string, organizationSize?: string) => {
    try {
      setLoading(true);
      setError(null);
      const params = new URLSearchParams();
      if (industry) params.append('industry', industry);
      if (organizationSize) params.append('organizationSize', organizationSize);
      
      const response = await axios.get(`/api/templates?${params.toString()}`);
      setTemplates(response.data.templates);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to fetch templates');
    } finally {
      setLoading(false);
    }
  };

  const createPlan = async (planData: any): Promise<Plan> => {
    try {
      setError(null);
      const response = await axios.post('/api/plans', planData);
      const newPlan = response.data.plan;
      setPlans(prev => [newPlan, ...prev]);
      return newPlan;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Failed to create plan';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const updatePlan = async (planId: string, planData: any): Promise<Plan> => {
    try {
      setError(null);
      const response = await axios.put(`/api/plans/${planId}`, planData);
      const updatedPlan = response.data.plan;
      setPlans(prev => prev.map(plan => 
        plan._id === planId ? updatedPlan : plan
      ));
      if (currentPlan?._id === planId) {
        setCurrentPlan(updatedPlan);
      }
      return updatedPlan;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Failed to update plan';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const deletePlan = async (planId: string): Promise<void> => {
    try {
      setError(null);
      await axios.delete(`/api/plans/${planId}`);
      setPlans(prev => prev.filter(plan => plan._id !== planId));
      if (currentPlan?._id === planId) {
        setCurrentPlan(null);
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Failed to delete plan';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const getPlan = async (planId: string): Promise<Plan> => {
    try {
      setError(null);
      const response = await axios.get(`/api/plans/${planId}`);
      return response.data.plan;
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch plan';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const value: PlanContextType = {
    plans,
    templates,
    currentPlan,
    loading,
    error,
    fetchPlans,
    fetchTemplates,
    createPlan,
    updatePlan,
    deletePlan,
    getPlan,
    setCurrentPlan,
    clearError,
  };

  return (
    <PlanContext.Provider value={value}>
      {children}
    </PlanContext.Provider>
  );
};