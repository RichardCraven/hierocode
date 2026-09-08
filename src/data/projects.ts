import { Project } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'proj-lpl-brokerage',
    title: 'LPL Financial Investment Platform',
    subtitle: 'Enterprise brokerage platform supporting 1M+ daily active users',
    category: 'professional',
    domain: 'fintech',
    year: '2020 - Present',
    role: 'Senior UI Developer / UI Technical Lead',
    companyOrContext: 'LPL Financial',
    shortDescription: 'Leading frontend technical architecture across multiple engineering teams building and modernizing a mission-critical global brokerage platform.',
    fullDescription: 'Serve as UI Technical Lead for a global investment platform supporting 1M+ daily active users. Lead Angular frontend development and state-management architecture (NgRx) with a focus on high throughput, sub-second market data responsiveness, scalability, and UX modernization across multiple squads.',
    architectureHighlights: [
      'Multi-team Angular and NgRx state management architecture supporting 1M+ daily active users',
      'Comprehensive redesign and UX modernization of existing platform pages and modules',
      'Architected reusable component functionality for complex financial workflows and high-density data tables',
      'Integration of third-party platforms for positions trading, live market feeds, metrics, and tutorials'
    ],
    metrics: [
      { label: 'Daily Active Users', value: '1M+' },
      { label: 'Frontend Stack', value: 'Angular & NgRx' },
      { label: 'Scope', value: 'Multi-Team Lead' },
      { label: 'Domain', value: 'Fintech Brokerage' }
    ],
    techStack: ['Angular', 'NgRx', 'TypeScript', 'JavaScript', 'REST APIs', 'SASS', 'Jenkins', 'Fintech'],
    githubUrl: 'https://github.com/RichardCraven',
    liveUrl: 'https://hierocode.com',
    status: 'production',
    featured: true,
    relatedSkillIds: ['angular', 'ngrx', 'javascript', 'fe-architecture', 'perf-optimization', 'tech-leadership'],
    badgeColor: '#14b8a6'
  },
  {
    id: 'proj-dreamtower',
    title: 'DreamTower.world — Real-Time Multiplayer RPG',
    subtitle: 'Procedural dungeon generation, line-of-sight fog-of-war, and live socket sync',
    category: 'personal',
    domain: 'gaming-graphics',
    year: '2020 - Present',
    role: 'Creator & Lead Architect',
    companyOrContext: 'DreamTower.world',
    shortDescription: 'Complex browser-based dungeon crawler & strategy RPG built with React, ES6+, SCSS, Node.js, and Socket.io for real-time multiplayer state synchronization.',
    fullDescription: 'Architected and developed DreamTower.world from the ground up. Engineered custom gameplay engines including procedural dungeon generation, multi-tier grid pathfinding, line-of-sight/fog-of-war systems, and autonomous entity AI state machines. Optimized rendering performance across dynamic, high-density game boards utilizing custom caching algorithms, HTML5 Canvas/SVG overlays, and SCSS animations.',
    architectureHighlights: [
      'Custom procedural dungeon generation engine with multi-tier grid pathfinding algorithms',
      'Real-time multiplayer state synchronization via Node.js and Socket.io',
      'Dynamic line-of-sight / fog-of-war computation with autonomous entity AI state machines',
      'High-framerate rendering across high-density game boards using HTML5 Canvas & SVG overlays'
    ],
    metrics: [
      { label: 'Multiplayer Engine', value: 'Socket.io Sync' },
      { label: 'Graphics Render', value: '60 FPS Canvas/SVG' },
      { label: 'AI Architecture', value: 'State Machine AI' },
      { label: 'Core Stack', value: 'React • Node • SCSS' }
    ],
    techStack: ['React', 'JavaScript (ES6+)', 'Node.js', 'Socket.io', 'HTML5 Canvas', 'SCSS', 'SVG'],
    githubUrl: 'https://github.com/RichardCraven',
    liveUrl: 'https://dreamtower.world',
    status: 'active',
    featured: true,
    relatedSkillIds: ['react', 'javascript', 'node', 'rest-api', 'webgl-canvas', 'sass', 'fe-architecture'],
    badgeColor: '#00f0b5'
  },
  {
    id: 'proj-bardo-vision',
    title: 'Bardo Vision — Computer Vision AI Platform',
    subtitle: 'Machine-learning model testing, automated AI tagging, and blockchain verification',
    category: 'professional',
    domain: 'ai-ml',
    year: '2020 - 2024',
    role: 'Head of Development',
    companyOrContext: 'Bardo Vision',
    shortDescription: 'Led development of a computer vision platform designed to accelerate machine-learning model development and automated visual data tagging.',
    fullDescription: 'Owned technical development for Bardo Vision across frontend architecture, backend services, data flow, and product implementation. Built the frontend with React and Redux and backend functionality with Node.js and MySQL. Developed automated AI workflows to tag data and commit audit records to a blockchain-backed ledger.',
    architectureHighlights: [
      'React and Redux frontend for rapid inspection and visual manipulation of ML training datasets',
      'High-throughput Node.js and MySQL backend services supporting visual asset ingestion',
      'Automated AI-assisted visual dataset labeling and batch processing workflows',
      'Blockchain-based ledger integration for cryptographic dataset provenance and change auditing'
    ],
    metrics: [
      { label: 'Role', value: 'Head of Development' },
      { label: 'Frontend', value: 'React & Redux' },
      { label: 'Backend', value: 'Node.js & MySQL' },
      { label: 'AI Workflow', value: 'Auto-Tagging ML' }
    ],
    techStack: ['React', 'Redux', 'Node.js', 'MySQL', 'Computer Vision', 'AI/ML', 'Blockchain', 'REST APIs'],
    githubUrl: 'https://github.com/RichardCraven',
    liveUrl: 'https://hierocode.com',
    status: 'production',
    featured: true,
    relatedSkillIds: ['react', 'node', 'databases', 'javascript', 'tech-leadership'],
    badgeColor: '#06b6d4'
  },
  {
    id: 'proj-visa-marketplace',
    title: 'Visa — Financial Application Marketplace',
    subtitle: 'Global digital marketplace serving 6,000+ international institutional users',
    category: 'professional',
    domain: 'fintech',
    year: '2019 - 2020',
    role: 'UI/UX Developer (Contract)',
    companyOrContext: 'Visa',
    shortDescription: 'Developed a digital marketplace for financial applications, building Angular features and integrating with Java/Spring REST APIs.',
    fullDescription: 'Built Angular and AngularJS frontend features for an international financial applications marketplace serving over 6,000 users. Partnered with Java/Spring backend teams, modernized legacy applications, delivered secure file-upload with virus-scanning, managed Jenkins CI staging builds, and authored Swagger/OpenAPI documentation.',
    architectureHighlights: [
      'Enterprise Angular architecture integrated with Java/Spring backend REST APIs',
      'Multi-engine virus-scanning and secure financial document upload pipeline',
      'Jenkins continuous-integration staging and deployment troubleshooting',
      'Authored Swagger API specifications and engineering onboarding documentation'
    ],
    metrics: [
      { label: 'Active Users', value: '6,000+ Global' },
      { label: 'Frontend', value: 'Angular / AngularJS' },
      { label: 'Backend Tech', value: 'Java / Spring REST' },
      { label: 'Pipeline', value: 'Jenkins CI/CD' }
    ],
    techStack: ['Angular', 'AngularJS', 'JavaScript', 'Java/Spring', 'REST APIs', 'Jenkins', 'Swagger', 'CI/CD'],
    githubUrl: 'https://github.com/RichardCraven',
    liveUrl: 'https://hierocode.com',
    status: 'production',
    featured: true,
    relatedSkillIds: ['angular', 'javascript', 'jenkins-ci', 'api-tooling', 'backend-polyglot'],
    badgeColor: '#ec4899'
  },
  {
    id: 'proj-citi-funds',
    title: 'Citi — Investment Funds Real-Time Analytics',
    subtitle: 'Data-rich financial interfaces and dynamic fund visualizations using D3.js',
    category: 'professional',
    domain: 'fintech',
    year: '2018 - 2019',
    role: 'Front End Developer (Contract)',
    companyOrContext: 'Citi',
    shortDescription: 'Developed an investment funds application using Angular in an Agile engineering environment with real-time D3.js charts.',
    fullDescription: 'Engineered high-density investment funds dashboards and real-time data visualizers with Angular and D3.js. Integrated frontend interfaces with secure internal microservices, handled rapid prototyping for trading desks, and maintained daily Jenkins builds.',
    architectureHighlights: [
      'Real-time financial telemetry visualizers built with D3.js and SVG rendering',
      'Angular single-page architecture integrated with authenticated banking microservices',
      'Agile engineering workflow with rapid proof-of-concept turnaround for stakeholders',
      'Automated daily Jenkins test and build integration pipelines'
    ],
    metrics: [
      { label: 'Domain', value: 'Investment Funds' },
      { label: 'Visualizations', value: 'D3.js Real-Time' },
      { label: 'Architecture', value: 'Microservices' },
      { label: 'Process', value: 'Agile & Jenkins' }
    ],
    techStack: ['Angular', 'TypeScript', 'D3.js', 'Microservices', 'Jenkins', 'Agile', 'Fintech', 'SASS'],
    githubUrl: 'https://github.com/RichardCraven',
    liveUrl: 'https://hierocode.com',
    status: 'production',
    featured: false,
    relatedSkillIds: ['angular', 'javascript', 'webgl-canvas', 'jenkins-ci', 'fe-architecture'],
    badgeColor: '#a855f7'
  },
  {
    id: 'proj-redcliffe-crm',
    title: 'Redcliffe Financial — Insurance Brokerage CRM',
    subtitle: 'Full-scale CRM platform built with Angular 17, TypeScript, and SpiceCRM',
    category: 'professional',
    domain: 'fintech',
    year: '2025 - 2026',
    role: 'IT Consultant',
    companyOrContext: 'Redcliffe Financial',
    shortDescription: 'Built full scale CRM platform for an insurance brokerage using Angular 17 and TypeScript with Node and Express integrated with SpiceCRM.',
    fullDescription: 'Designed and deployed an end-to-end CRM solution tailored to insurance broker workflows. Built dynamic policy management, lead tracking, and commission workflow modules with Angular 17 and Node.js, seamlessly synchronizing data with SpiceCRM.',
    architectureHighlights: [
      'Modern standalone Angular 17 architecture with reactive forms and strict typing',
      'Node.js and Express API layer orchestrating secure bidirectional SpiceCRM sync',
      'Dynamic insurance policy lifecycle, commission reconciliation, and client analytics',
      'Optimized table virtualization and fast search across insurance records'
    ],
    metrics: [
      { label: 'Framework', value: 'Angular 17' },
      { label: 'Backend', value: 'Node.js & Express' },
      { label: 'CRM Core', value: 'SpiceCRM' },
      { label: 'Domain', value: 'Insurance Fintech' }
    ],
    techStack: ['Angular 17', 'TypeScript', 'Node.js', 'Express', 'SpiceCRM', 'REST APIs', 'Fintech'],
    githubUrl: 'https://github.com/RichardCraven',
    liveUrl: 'https://hierocode.com',
    status: 'production',
    featured: false,
    relatedSkillIds: ['angular', 'javascript', 'node', 'rest-api'],
    badgeColor: '#10b981'
  },
  {
    id: 'proj-pure-mana',
    title: 'Pure Mana — WebGL Multiplayer Combat Engine',
    subtitle: 'Custom WebGL browser game engine with Node.js and Socket.io state sync',
    category: 'professional',
    domain: 'gaming-graphics',
    year: '2016 - 2018',
    role: 'Software Developer / Team Manager',
    companyOrContext: 'Pure Mana Studios',
    shortDescription: 'Developed frontend and backend features for a multiplayer browser space combat game, including a custom game engine with WebGL, Node, and socket.io.',
    fullDescription: 'Built a custom browser-based game engine from scratch using WebGL, HTML5 Canvas, Node.js, and socket.io. Engineered scalable real-time synchronization, particle management, and interactive space combat features while managing a team of developers and graphic artists.',
    architectureHighlights: [
      'Custom WebGL rendering engine with lightweight shaders and GPU batching',
      'Sub-50ms multiplayer client state synchronization via Node.js and socket.io',
      'High-performance particle engine supporting thousands of simultaneous projectiles',
      'Team leadership managing software engineers and digital artists for game releases'
    ],
    metrics: [
      { label: 'Engine Type', value: 'Custom WebGL' },
      { label: 'Multiplayer', value: 'Socket.io Real-Time' },
      { label: 'HUD Graphics', value: 'HTML5 Canvas' },
      { label: 'Leadership', value: 'Devs & Artists' }
    ],
    techStack: ['WebGL', 'HTML5 Canvas', 'Node.js', 'Socket.io', 'JavaScript', 'Game Dev'],
    githubUrl: 'https://github.com/RichardCraven',
    liveUrl: 'https://hierocode.com',
    status: 'archived',
    featured: false,
    relatedSkillIds: ['webgl-canvas', 'node', 'javascript', 'tech-leadership'],
    badgeColor: '#00f0b5'
  },
  {
    id: 'proj-soho-speech',
    title: 'Soho Squared — Speech Processing UI Suite',
    subtitle: 'Interactive audio waveforms, speech transcripts, and acoustic annotation tools',
    category: 'professional',
    domain: 'ai-ml',
    year: '2020 - 2021',
    role: 'UI Consultant',
    companyOrContext: 'Soho Squared',
    shortDescription: 'Developed Angular and Node.js features for a speech-processing platform, including transcripts, waveforms, metrics, charts, annotation, and search.',
    fullDescription: 'Created an intuitive web interface for NLP researchers and speech transcriptionists. Engineered interactive waveform visualizers, word-level audio alignment tools, and real-time acoustic metrics charts in Angular and Node.js.',
    architectureHighlights: [
      'Interactive audio waveform visualizer and scrubbable playback scrubber',
      'Synchronized word-level transcript highlight and annotation tools',
      'Comprehensive acoustic metrics charts and full-text document search',
      'Node.js backend endpoints for high-throughput speech data retrieval'
    ],
    metrics: [
      { label: 'Platform', value: 'Speech NLP' },
      { label: 'Audio Engine', value: 'Waveform Canvas' },
      { label: 'Stack', value: 'Angular & Node' },
      { label: 'Features', value: 'Annotation & Search' }
    ],
    techStack: ['Angular', 'Node.js', 'Audio Waveforms', 'Charts', 'Annotation', 'JavaScript'],
    githubUrl: 'https://github.com/RichardCraven',
    liveUrl: 'https://hierocode.com',
    status: 'production',
    featured: false,
    relatedSkillIds: ['angular', 'node', 'javascript'],
    badgeColor: '#38bdf8'
  },
  {
    id: 'proj-blooskai-cv',
    title: 'Blooskai — Computer Vision Web & Mobile',
    subtitle: 'Cross-platform computer vision apps built with Angular, Cordova, Docker, and AWS',
    category: 'professional',
    domain: 'ai-ml',
    year: '2019 - 2020',
    role: 'Front End Developer (Contract)',
    companyOrContext: 'Blooskai Corp.',
    shortDescription: 'Built web and mobile applications for a computer vision startup using Angular, Cordova, Docker, AWS EC2, and S3, delivering on tight timelines.',
    fullDescription: 'Engineered responsive web and mobile applications for a computer vision company. Packaged cross-platform mobile binaries using Cordova and orchestrated containerized staging instances on AWS with Docker.',
    architectureHighlights: [
      'Shared Angular codebase driving both web application and Cordova mobile apps',
      'Docker containerization ensuring environment consistency between dev and AWS',
      'AWS EC2 compute and S3 storage for computer vision model inputs',
      'High-reliability application delivery on accelerated startup launch timelines'
    ],
    metrics: [
      { label: 'Platforms', value: 'Web & Mobile' },
      { label: 'Mobile Tech', value: 'Cordova & Angular' },
      { label: 'Cloud Infra', value: 'AWS EC2 & S3' },
      { label: 'Container', value: 'Docker' }
    ],
    techStack: ['Angular', 'Cordova', 'Docker', 'AWS EC2', 'AWS S3', 'Mobile', 'TypeScript'],
    githubUrl: 'https://github.com/RichardCraven',
    liveUrl: 'https://hierocode.com',
    status: 'production',
    featured: false,
    relatedSkillIds: ['angular', 'mobile-ionic', 'docker', 'aws'],
    badgeColor: '#f59e0b'
  },
  {
    id: 'proj-hierocode-hud',
    title: 'hierocode Developer Command HUD',
    subtitle: 'Personal mission control for CI/CD pipelines, live project telemetry, and dev tools',
    category: 'personal',
    domain: 'developer-tools',
    year: '2024',
    role: 'Architect & Maintainer',
    companyOrContext: 'hierocode.com',
    shortDescription: 'Tailored engineer dashboard aggregating metrics from GitHub Actions, deployment health, and personal developer tools.',
    fullDescription: 'Personal developer mission control dashboard consolidating GitHub Actions, Vercel deployments, and development utilities in a cyberpunk command console.',
    architectureHighlights: [
      'Configurable widget grid with state persistence in localStorage',
      'Real-time health telemetry across GitHub Actions and Vercel deployments',
      'Keyboard-first command palette with fuzzy search (cmd+k style)',
      'High-performance React 18 frontend with tactile cyber aesthetic'
    ],
    metrics: [
      { label: 'Daily Use', value: '100% Daily' },
      { label: 'API Integrations', value: 'GitHub & Vercel' },
      { label: 'Bundle Size', value: '42 kB gzip' },
      { label: 'Load Time', value: '< 80ms' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'REST APIs'],
    githubUrl: 'https://github.com/RichardCraven',
    liveUrl: 'https://hierocode.com',
    status: 'active',
    featured: false,
    relatedSkillIds: ['react', 'javascript', 'docker'],
    badgeColor: '#14b8a6'
  }
];
