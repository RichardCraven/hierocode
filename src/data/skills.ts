import { Skill } from '../types/portfolio';

export const SKILLS: Skill[] = [
  // Languages & Core
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'languages',
    proficiency: 96,
    yearsExp: 7,
    iconName: 'Code2',
    highlightProjects: ['proj-agentic-runtime', 'proj-cloud-orchestrator', 'proj-telemetry-nexus'],
    badgeClass: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20'
  },
  {
    id: 'go',
    name: 'Go (Golang)',
    category: 'languages',
    proficiency: 92,
    yearsExp: 6,
    iconName: 'Terminal',
    highlightProjects: ['proj-fintech-gateway', 'proj-mesh-vpn', 'proj-fleet-manager'],
    badgeClass: 'text-teal-400 border-teal-500/30 bg-teal-950/20'
  },
  {
    id: 'rust',
    name: 'Rust',
    category: 'languages',
    proficiency: 84,
    yearsExp: 4,
    iconName: 'Cpu',
    highlightProjects: ['proj-telemetry-nexus', 'proj-micro-kv'],
    badgeClass: 'text-amber-400 border-amber-500/30 bg-amber-950/20'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    proficiency: 90,
    yearsExp: 8,
    iconName: 'FileCode2',
    highlightProjects: ['proj-enterprise-identity', 'proj-agentic-runtime'],
    badgeClass: 'text-yellow-400 border-yellow-500/30 bg-yellow-950/20'
  },

  // Frontend & UI
  {
    id: 'react',
    name: 'React 18/19 & Next.js',
    category: 'frontend',
    proficiency: 98,
    yearsExp: 8,
    iconName: 'Layers',
    highlightProjects: ['proj-agentic-runtime', 'proj-neural-audio', 'proj-fintech-gateway', 'proj-dev-dashboard'],
    badgeClass: 'text-purple-400 border-purple-500/30 bg-purple-950/20'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS & Design Systems',
    category: 'frontend',
    proficiency: 95,
    yearsExp: 6,
    iconName: 'Palette',
    highlightProjects: ['proj-dev-dashboard', 'proj-telemetry-nexus', 'proj-git-tree-visualizer'],
    badgeClass: 'text-sky-400 border-sky-500/30 bg-sky-950/20'
  },
  {
    id: 'webgl-canvas',
    name: 'WebGL / Three.js / Canvas',
    category: 'frontend',
    proficiency: 82,
    yearsExp: 4,
    iconName: 'Monitor',
    highlightProjects: ['proj-git-tree-visualizer', 'proj-neural-audio', 'proj-fleet-manager'],
    badgeClass: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20'
  },

  // Backend & Systems
  {
    id: 'node',
    name: 'Node.js & Express / Fastify',
    category: 'backend',
    proficiency: 94,
    yearsExp: 8,
    iconName: 'Server',
    highlightProjects: ['proj-cloud-orchestrator', 'proj-supply-chain-mesh'],
    badgeClass: 'text-green-400 border-green-500/30 bg-green-950/20'
  },
  {
    id: 'graphql',
    name: 'GraphQL & gRPC',
    category: 'backend',
    proficiency: 89,
    yearsExp: 5,
    iconName: 'Network',
    highlightProjects: ['proj-fintech-gateway', 'proj-cloud-orchestrator'],
    badgeClass: 'text-pink-400 border-pink-500/30 bg-pink-950/20'
  },
  {
    id: 'postgres',
    name: 'PostgreSQL & TimescaleDB',
    category: 'backend',
    proficiency: 91,
    yearsExp: 7,
    iconName: 'Database',
    highlightProjects: ['proj-enterprise-identity', 'proj-fleet-manager'],
    badgeClass: 'text-blue-400 border-blue-500/30 bg-blue-950/20'
  },
  {
    id: 'redis',
    name: 'Redis & In-Memory Caching',
    category: 'backend',
    proficiency: 93,
    yearsExp: 7,
    iconName: 'Zap',
    highlightProjects: ['proj-fintech-gateway', 'proj-enterprise-identity', 'proj-supply-chain-mesh'],
    badgeClass: 'text-red-400 border-red-500/30 bg-red-950/20'
  },

  // Cloud & Infrastructure
  {
    id: 'kubernetes',
    name: 'Kubernetes & Helm',
    category: 'cloud-infra',
    proficiency: 92,
    yearsExp: 6,
    iconName: 'Boxes',
    highlightProjects: ['proj-fintech-gateway', 'proj-cloud-orchestrator'],
    badgeClass: 'text-indigo-400 border-indigo-500/30 bg-indigo-950/20'
  },
  {
    id: 'docker',
    name: 'Docker & Containerization',
    category: 'cloud-infra',
    proficiency: 97,
    yearsExp: 8,
    iconName: 'Box',
    highlightProjects: ['proj-cloud-orchestrator', 'proj-fintech-gateway', 'proj-mesh-vpn'],
    badgeClass: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20'
  },
  {
    id: 'aws',
    name: 'AWS Cloud & Terraform IaC',
    category: 'cloud-infra',
    proficiency: 90,
    yearsExp: 6,
    iconName: 'Cloud',
    highlightProjects: ['proj-cloud-orchestrator', 'proj-supply-chain-mesh'],
    badgeClass: 'text-amber-300 border-amber-500/30 bg-amber-950/20'
  }
];
