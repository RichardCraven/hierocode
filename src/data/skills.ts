import { Skill } from '../types/portfolio';

export const SKILLS: Skill[] = [
  // Frontend
  {
    id: 'angular',
    name: 'Angular (v2-v17+)',
    category: 'frontend',
    proficiency: 98,
    yearsExp: 10,
    iconName: 'Code2',
    highlightProjects: ['proj-lpl-brokerage', 'proj-visa-marketplace', 'proj-citi-funds', 'proj-redcliffe-crm'],
    badgeClass: 'text-rose-400 border-rose-500/30 bg-rose-950/20'
  },
  {
    id: 'ngrx',
    name: 'NgRx & State Management',
    category: 'frontend',
    proficiency: 96,
    yearsExp: 8,
    iconName: 'Workflow',
    highlightProjects: ['proj-lpl-brokerage'],
    badgeClass: 'text-purple-400 border-purple-500/30 bg-purple-950/20'
  },
  {
    id: 'react',
    name: 'React 18/19 & Redux',
    category: 'frontend',
    proficiency: 96,
    yearsExp: 8,
    iconName: 'Layers',
    highlightProjects: ['proj-dreamtower', 'proj-bardo-vision', 'proj-hierocode-hud'],
    badgeClass: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20'
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+) & TypeScript',
    category: 'frontend',
    proficiency: 99,
    yearsExp: 10,
    iconName: 'Terminal',
    highlightProjects: ['proj-lpl-brokerage', 'proj-dreamtower', 'proj-bardo-vision'],
    badgeClass: 'text-amber-300 border-amber-500/30 bg-amber-950/20'
  },
  {
    id: 'sass',
    name: 'SASS / SCSS & Design Systems',
    category: 'frontend',
    proficiency: 95,
    yearsExp: 10,
    iconName: 'Palette',
    highlightProjects: ['proj-dreamtower', 'proj-lpl-brokerage', 'proj-citi-funds'],
    badgeClass: 'text-pink-400 border-pink-500/30 bg-pink-950/20'
  },
  {
    id: 'webgl-canvas',
    name: 'WebGL, HTML5 Canvas & D3.js',
    category: 'frontend',
    proficiency: 92,
    yearsExp: 6,
    iconName: 'Monitor',
    highlightProjects: ['proj-pure-mana', 'proj-dreamtower', 'proj-citi-funds'],
    badgeClass: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20'
  },
  {
    id: 'mobile-ionic',
    name: 'Ionic & Cordova (Hybrid Mobile)',
    category: 'frontend',
    proficiency: 88,
    yearsExp: 5,
    iconName: 'Boxes',
    highlightProjects: ['proj-blooskai-cv'],
    badgeClass: 'text-blue-400 border-blue-500/30 bg-blue-950/20'
  },

  // Backend & Data
  {
    id: 'node',
    name: 'Node.js & Express',
    category: 'backend',
    proficiency: 95,
    yearsExp: 9,
    iconName: 'Server',
    highlightProjects: ['proj-bardo-vision', 'proj-dreamtower', 'proj-pure-mana', 'proj-redcliffe-crm'],
    badgeClass: 'text-green-400 border-green-500/30 bg-green-950/20'
  },
  {
    id: 'rest-api',
    name: 'REST APIs & WebSockets / Socket.io',
    category: 'backend',
    proficiency: 96,
    yearsExp: 9,
    iconName: 'Network',
    highlightProjects: ['proj-lpl-brokerage', 'proj-dreamtower', 'proj-pure-mana', 'proj-visa-marketplace'],
    badgeClass: 'text-teal-400 border-teal-500/30 bg-teal-950/20'
  },
  {
    id: 'databases',
    name: 'PostgreSQL & MySQL',
    category: 'backend',
    proficiency: 90,
    yearsExp: 8,
    iconName: 'Database',
    highlightProjects: ['proj-bardo-vision', 'proj-redcliffe-crm'],
    badgeClass: 'text-sky-400 border-sky-500/30 bg-sky-950/20'
  },
  {
    id: 'backend-polyglot',
    name: 'Java / Spring & .NET Debugging',
    category: 'backend',
    proficiency: 84,
    yearsExp: 5,
    iconName: 'Cpu',
    highlightProjects: ['proj-visa-marketplace', 'proj-lpl-brokerage'],
    badgeClass: 'text-orange-400 border-orange-500/30 bg-orange-950/20'
  },

  // Cloud & DevOps
  {
    id: 'aws',
    name: 'AWS (EC2, S3, Cloud Services)',
    category: 'cloud-infra',
    proficiency: 88,
    yearsExp: 6,
    iconName: 'Cloud',
    highlightProjects: ['proj-blooskai-cv', 'proj-lpl-brokerage'],
    badgeClass: 'text-amber-400 border-amber-500/30 bg-amber-950/20'
  },
  {
    id: 'docker',
    name: 'Docker & Containerization',
    category: 'cloud-infra',
    proficiency: 92,
    yearsExp: 7,
    iconName: 'Box',
    highlightProjects: ['proj-blooskai-cv', 'proj-bardo-vision'],
    badgeClass: 'text-blue-400 border-blue-500/30 bg-blue-950/20'
  },
  {
    id: 'jenkins-ci',
    name: 'Jenkins & CI/CD Pipelines',
    category: 'cloud-infra',
    proficiency: 94,
    yearsExp: 7,
    iconName: 'Workflow',
    highlightProjects: ['proj-visa-marketplace', 'proj-citi-funds', 'proj-lpl-brokerage'],
    badgeClass: 'text-indigo-400 border-indigo-500/30 bg-indigo-950/20'
  },
  {
    id: 'api-tooling',
    name: 'Swagger / OpenAPI & Postman',
    category: 'cloud-infra',
    proficiency: 95,
    yearsExp: 8,
    iconName: 'FileText',
    highlightProjects: ['proj-visa-marketplace', 'proj-lpl-brokerage'],
    badgeClass: 'text-lime-400 border-lime-500/30 bg-lime-950/20'
  },

  // Leadership & Architecture
  {
    id: 'fe-architecture',
    name: 'Frontend Architecture & State',
    category: 'leadership',
    proficiency: 98,
    yearsExp: 10,
    iconName: 'Workflow',
    highlightProjects: ['proj-lpl-brokerage', 'proj-bardo-vision', 'proj-dreamtower'],
    badgeClass: 'text-teal-300 border-teal-500/30 bg-teal-950/20'
  },
  {
    id: 'perf-optimization',
    name: 'Performance Optimization & UX',
    category: 'leadership',
    proficiency: 97,
    yearsExp: 9,
    iconName: 'Zap',
    highlightProjects: ['proj-lpl-brokerage', 'proj-dreamtower', 'proj-pure-mana'],
    badgeClass: 'text-yellow-400 border-yellow-500/30 bg-yellow-950/20'
  },
  {
    id: 'tech-leadership',
    name: 'Technical Leadership & Mentoring',
    category: 'leadership',
    proficiency: 96,
    yearsExp: 8,
    iconName: 'Users',
    highlightProjects: ['proj-lpl-brokerage', 'proj-bardo-vision', 'proj-pure-mana'],
    badgeClass: 'text-emerald-300 border-emerald-500/30 bg-emerald-950/20'
  },
  {
    id: 'agile-delivery',
    name: 'Agile & Cross-Functional Delivery',
    category: 'leadership',
    proficiency: 98,
    yearsExp: 10,
    iconName: 'CheckCircle2',
    highlightProjects: ['proj-lpl-brokerage', 'proj-citi-funds', 'proj-visa-marketplace'],
    badgeClass: 'text-cyan-300 border-cyan-500/30 bg-cyan-950/20'
  }
];
