import { ExperienceItem } from '../types/portfolio';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-lpl-financial',
    role: 'Senior UI Developer / UI Technical Lead',
    company: 'LPL Financial',
    period: 'September 2020 — Present',
    location: 'Oakland, CA / Hybrid',
    type: 'Leadership',
    summary: 'Serve as UI Technical Lead for a global investment and brokerage platform supporting 1M+ daily active users, driving frontend technical architecture across multiple squads.',
    achievements: [
      'Serve as UI Technical Lead for a global investment platform supporting 1M+ daily active users.',
      'Provide frontend technical leadership across multiple teams building and modernizing features for a large-scale brokerage platform.',
      'Lead Angular frontend development and state-management architecture with a focus on performance, scalability, maintainability, and user experience.',
      'Helped drive a comprehensive redesign and UX modernization of existing platform pages and modules.',
      'Architect reusable frontend functionality for complex financial workflows and data-intensive user experiences.',
      'Integrate third-party platforms supporting positions trading, live market data, metrics, and interactive tutorials.',
      'Collaborate across product, UX, backend, and engineering teams to translate requirements into production-ready solutions.'
    ],
    techTags: ['Angular', 'NgRx', 'TypeScript', 'JavaScript', 'REST APIs', 'SASS', 'Fintech', 'CI/CD'],
    metrics: [
      { label: 'Daily Active Users', value: '1M+' },
      { label: 'Platform Scope', value: 'Multi-Team Lead' },
      { label: 'Core Architecture', value: 'Angular & NgRx' },
      { label: 'Domain', value: 'Fintech Brokerage' }
    ]
  },
  {
    id: 'exp-bardo-vision',
    role: 'Head of Development',
    company: 'Bardo Vision',
    period: 'May 2020 — February 2024',
    location: 'San Francisco, CA / Remote',
    type: 'Leadership',
    summary: 'Led technical development of a computer vision platform designed to accelerate machine-learning model development, automated visual data tagging, and testing.',
    achievements: [
      'Led development of a computer vision platform designed to accelerate machine-learning model development and testing.',
      'Built the frontend with React and Redux and backend functionality with Node.js and MySQL.',
      'Developed workflows leveraging AI to automatically tag data and commit changes to a blockchain-based system.',
      'Owned development across frontend architecture, backend services, data flow, and product implementation.'
    ],
    techTags: ['React', 'Redux', 'Node.js', 'MySQL', 'Computer Vision', 'AI/ML', 'Blockchain', 'JavaScript'],
    metrics: [
      { label: 'Core Platform', value: 'Computer Vision' },
      { label: 'Frontend Stack', value: 'React & Redux' },
      { label: 'Backend Stack', value: 'Node.js & MySQL' },
      { label: 'Workflow', value: 'AI Auto-Tagging' }
    ]
  },
  {
    id: 'exp-visa',
    role: 'UI/UX Developer (Contract)',
    company: 'Visa',
    period: 'April 2019 — June 2020',
    location: 'Foster City, CA',
    type: 'Contract',
    summary: 'Developed a digital marketplace for financial applications serving an international user base of more than 6,000 institutional users, partnering with Java/Spring backend teams.',
    achievements: [
      'Developed a digital marketplace for financial applications serving an international user base of more than 6,000 users.',
      'Built Angular and AngularJS frontend features and partnered with Java/Spring backend teams to implement REST APIs.',
      'Modernized legacy applications and delivered file-upload, virus-scanning, notification, and search functionality.',
      'Managed Jenkins staging builds and troubleshot deployment and integration issues in a continuous-integration environment.',
      'Authored Swagger API documentation and onboarding documentation for new engineering hires.'
    ],
    techTags: ['Angular', 'AngularJS', 'JavaScript', 'Java/Spring', 'REST APIs', 'Jenkins', 'Swagger', 'CI/CD'],
    metrics: [
      { label: 'International Users', value: '6,000+ Users' },
      { label: 'Frontend', value: 'Angular / AngularJS' },
      { label: 'Backend Integration', value: 'Java / Spring REST' },
      { label: 'DevOps Pipeline', value: 'Jenkins CI' }
    ]
  },
  {
    id: 'exp-citi',
    role: 'Front End Developer (Contract)',
    company: 'Citi',
    period: 'October 2018 — April 2019',
    location: 'San Francisco, CA',
    type: 'Contract',
    summary: 'Developed an investment funds application using Angular in an Agile engineering environment, engineering data-rich financial interfaces and real-time visualizations using D3.js.',
    achievements: [
      'Developed an investment funds application using Angular in an Agile engineering environment.',
      'Built data-rich financial interfaces and real-time visualizations using D3.js.',
      'Integrated frontend functionality with internal microservices, security layers, and external services.',
      'Managed daily Jenkins builds, troubleshot integration issues, and contributed to rapid proof-of-concept development.'
    ],
    techTags: ['Angular', 'TypeScript', 'D3.js', 'Microservices', 'Jenkins', 'Agile', 'Fintech', 'SASS'],
    metrics: [
      { label: 'Domain', value: 'Investment Funds' },
      { label: 'Visualizations', value: 'D3.js Real-Time' },
      { label: 'Architecture', value: 'Internal Microservices' },
      { label: 'Engineering', value: 'Agile & Jenkins' }
    ]
  },
  {
    id: 'exp-pure-mana',
    role: 'Software Developer / Team Manager',
    company: 'Pure Mana Studios',
    period: 'August 2016 — July 2018',
    location: 'San Francisco Bay Area, CA',
    type: 'Full-time',
    summary: 'Developed frontend and backend features for a multiplayer browser-based space combat game with a custom WebGL game engine, while managing developers and graphic artists.',
    achievements: [
      'Developed frontend and backend features for a multiplayer browser-based space combat game, including a custom game engine built with WebGL, Node.js, and socket.io.',
      'Built scalable services for real-time synchronization and particle management and developed interactive features with HTML5 Canvas.',
      'Managed a small team of developers and graphic artists and coordinated delivery of product and content features for an active user community.'
    ],
    techTags: ['WebGL', 'HTML5 Canvas', 'Node.js', 'Socket.io', 'JavaScript', 'Game Dev', 'Real-Time Sync'],
    metrics: [
      { label: 'Game Engine', value: 'Custom WebGL' },
      { label: 'Real-Time Sync', value: 'Socket.io & Node' },
      { label: 'Graphics', value: 'HTML5 Canvas' },
      { label: 'Leadership', value: 'Devs & Artists' }
    ]
  },
  {
    id: 'exp-redcliffe',
    role: 'IT Consultant',
    company: 'Redcliffe Financial',
    period: 'January 2025 — January 2026',
    location: 'Remote',
    type: 'Contract',
    summary: 'Built full scale CRM platform for an insurance brokerage using Angular 17 and TypeScript with Node and Express integrated with SpiceCRM.',
    achievements: [
      'Built full scale CRM platform for an insurance brokerage using Angular 17 and Typescript with Node and Express integrated with SpiceCRM.',
      'Architected secure bidirectional data synchronization between custom client interfaces and SpiceCRM backend services.',
      'Engineered automated client policy tracking, commission reconciliation, and interactive pipeline management.'
    ],
    techTags: ['Angular 17', 'TypeScript', 'Node.js', 'Express', 'SpiceCRM', 'REST APIs', 'Fintech'],
    metrics: [
      { label: 'Framework', value: 'Angular 17' },
      { label: 'Backend', value: 'Node & Express' },
      { label: 'Integration', value: 'SpiceCRM' },
      { label: 'Domain', value: 'Insurance CRM' }
    ]
  },
  {
    id: 'exp-soho-squared',
    role: 'UI Consultant',
    company: 'Soho Squared',
    period: 'August 2020 — June 2021',
    location: 'Remote',
    type: 'Contract',
    summary: 'Developed Angular and Node.js features for a speech-processing platform, including transcripts, waveforms, metrics, charts, annotation tools, and document search.',
    achievements: [
      'Developed Angular and Node.js features for a speech-processing platform, including transcripts, waveforms, metrics, charts, annotation tools, and document search.',
      'Built interactive audio waveform visualizers and word-level alignment annotation tools for researchers.'
    ],
    techTags: ['Angular', 'Node.js', 'Audio Waveforms', 'Charts', 'Annotation', 'JavaScript'],
    metrics: [
      { label: 'Platform', value: 'Speech NLP' },
      { label: 'Audio Engine', value: 'Waveform Canvas' },
      { label: 'Stack', value: 'Angular & Node' },
      { label: 'Features', value: 'Annotation & Search' }
    ]
  },
  {
    id: 'exp-blooskai',
    role: 'Front End Developer (Contract)',
    company: 'Blooskai Corp.',
    period: 'June 2019 — June 2020',
    location: 'San Francisco, CA',
    type: 'Contract',
    summary: 'Built web and mobile applications for a computer vision startup using Angular, Cordova, Docker, AWS EC2, and S3, delivering stable applications on tight timelines.',
    achievements: [
      'Built web and mobile applications for a computer vision startup using Angular, Cordova, Docker, AWS EC2, and S3, delivering stable applications on tight timelines.',
      'Packaged cross-platform mobile binaries using Cordova and orchestrated containerized staging instances on AWS.'
    ],
    techTags: ['Angular', 'Cordova', 'Docker', 'AWS EC2', 'AWS S3', 'Mobile', 'TypeScript'],
    metrics: [
      { label: 'Platforms', value: 'Web & Mobile' },
      { label: 'Mobile Tech', value: 'Cordova & Angular' },
      { label: 'Cloud Infra', value: 'AWS EC2 & S3' },
      { label: 'Container', value: 'Docker' }
    ]
  }
];
