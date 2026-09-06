import { ExperienceItem } from '../types/portfolio';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-techsolvers',
    role: 'UI/UX Design & Lead IT Systems Engineer',
    company: 'TechSolvers Global',
    period: 'July 2024 — Present',
    location: 'San Francisco, CA / Hybrid',
    type: 'Leadership',
    summary: 'Lead architect steering cross-functional engineering initiatives across distributed infrastructure, real-time telemetry systems, and frontend developer tooling.',
    achievements: [
      'Improved network efficiency and data throughput by 30% through zero-copy caching and optimized ingress architecture.',
      'Led a high-velocity squad of 15 engineers delivering enterprise-grade cybersecurity and multi-region Kubernetes integrations.',
      'Spearheaded modern design system migration reducing UI component duplication and engineering turnaround by 45%.',
      'Engineered an automated failover system guaranteeing 99.999% uptime during high-volume quarterly financial audits.'
    ],
    techTags: ['Kubernetes', 'Go', 'React', 'TypeScript', 'Cybersecurity', 'AWS EKS', 'Zero-Trust'],
    metrics: [
      { label: 'Network Efficiency', value: '+30%' },
      { label: 'Team Size Led', value: '15 Engineers' },
      { label: 'Uptime SLA', value: '99.999%' },
      { label: 'Cycle Velocity', value: '+45%' }
    ]
  },
  {
    id: 'exp-nexus',
    role: 'Senior Staff Full-Stack Architect',
    company: 'Nexus Innovations',
    period: 'Jan 2022 — June 2024',
    location: 'Austin, TX / Remote',
    type: 'Full-time',
    summary: 'Architected high-throughput cloud middleware and interactive operational dashboards for telemetry analysis and distributed microservices.',
    achievements: [
      'Built a real-time event pipeline ingesting 4.2 billion daily spans with sub-second query latency using ClickHouse and Go.',
      'Designed and deployed responsive React/TypeScript interfaces with real-time WebSocket streaming for 500+ DevOps engineers.',
      'Standardized CI/CD GitHub Action pipelines across 40+ repositories, reducing average build times from 28m down to 4m.',
      'Mentored 8 mid-level and junior engineers through technical design reviews, RFCs, and pair-programming sessions.'
    ],
    techTags: ['TypeScript', 'React', 'Rust', 'Kafka', 'ClickHouse', 'Docker', 'GraphQL'],
    metrics: [
      { label: 'Daily Events', value: '4.2B spans' },
      { label: 'Build Times', value: '-85% speed' },
      { label: 'System Latency', value: '< 180ms' },
      { label: 'Engineers Mentored', value: '8 Devs' }
    ]
  },
  {
    id: 'exp-cyberscale',
    role: 'Systems & Cloud Infrastructure Engineer',
    company: 'CyberScale Solutions',
    period: 'March 2020 — Dec 2021',
    location: 'Denver, CO',
    type: 'Full-time',
    summary: 'Focused on cloud security, container orchestration, and zero-trust identity authentication infrastructure.',
    achievements: [
      'Engineered FIDO2 WebAuthn authentication gateway protecting 320,000 corporate identities with zero credential phishing incidents.',
      'Migrated legacy monolithic applications to containerized microservices running on AWS EKS using Terraform IaC.',
      'Reduced enterprise AWS monthly infrastructure spend by $140,000 through automated pod right-sizing and spot-instance pooling.',
      'Authored comprehensive disaster recovery playbooks with simulated chaos engineering exercises.'
    ],
    techTags: ['Python', 'FastAPI', 'AWS', 'Terraform', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: [
      { label: 'Annual Savings', value: '$140k / yr' },
      { label: 'Users Protected', value: '320,000' },
      { label: 'Auth Latency', value: '< 200ms' },
      { label: 'Phishing Incidents', value: '0 Breaches' }
    ]
  },
  {
    id: 'exp-apex',
    role: 'Software Developer & Frontend Specialist',
    company: 'Apex Digital Dynamics',
    period: 'June 2018 — Feb 2020',
    location: 'Seattle, WA',
    type: 'Full-time',
    summary: 'Built responsive single-page applications, interactive data visualizations, and client-facing web portals.',
    achievements: [
      'Developed high-performance client web applications with React, Redux, and modern CSS for Fortune 500 clients.',
      'Optimized Core Web Vitals across critical marketing and dashboard flows, raising Google Lighthouse scores from 64 to 98.',
      'Implemented real-time data visualizers using SVG and HTML5 Canvas for live operational metrics.'
    ],
    techTags: ['React', 'JavaScript', 'Node.js', 'HTML5/CSS3', 'REST APIs', 'Webpack'],
    metrics: [
      { label: 'Lighthouse Score', value: '98 / 100' },
      { label: 'Client Apps Built', value: '12 Apps' },
      { label: 'User Retention', value: '+28%' }
    ]
  }
];
