// models/first-aid-technique.model.ts

export interface FirstAidStep {
  stepNumber: number;
  title: string;
  image: string;
  description: string[];
}

export interface FirstAidTechnique {
  id: string;
  title: string;
  icon: string;
  modalTitle: string;
  description: string;
  steps: FirstAidStep[];
}

export interface EmergencyCategory {
  id: string;
  title: string;
  route: string;
  backgroundImage: string;
  headerImage: string;
  logoIcon: string;
  categoryIcon: string;
  keyTakeawayTitle: string;
  keyTakeawayDescription: string;
  techniques: FirstAidTechnique[];
}