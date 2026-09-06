export type ProjectCategory = 'all' | 'professional' | 'personal';
export type ProjectDomain = 'all' | 'distributed-systems' | 'cloud-devops' | 'ai-ml' | 'fullstack-web' | 'developer-tools';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'professional' | 'personal';
  domain: 'distributed-systems' | 'cloud-devops' | 'ai-ml' | 'fullstack-web' | 'developer-tools';
  year: string;
  role: string;
  companyOrContext?: string;
  shortDescription: string;
  fullDescription: string;
  architectureHighlights: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'production' | 'active' | 'archived' | 'experimental';
  featured: boolean;
  relatedSkillIds: string[];
  badgeColor?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'cloud-infra' | 'data-ai' | 'tooling';
  proficiency: number; // 0 to 100
  yearsExp: number;
  iconName: string;
  highlightProjects: string[]; // project IDs
  badgeClass?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Leadership';
  summary: string;
  achievements: string[];
  techTags: string[];
  metrics: { label: string; value: string }[];
}

export interface SkillTreeNode {
  id: string;
  name: string;
  type: 'core' | 'branch' | 'project' | 'skill';
  category: string;
  status?: string;
  desc?: string;
  x: number; // relative coordinate percentage
  y: number; // relative coordinate percentage
  parentId?: string;
  projectId?: string;
  color?: string;
}
