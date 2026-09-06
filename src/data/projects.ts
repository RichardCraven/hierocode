import { Project } from '../types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'proj-fintech-gateway',
    title: 'Apex Financial Exchange Gateway',
    subtitle: 'Ultra-low latency transaction engine with live settlement auditing',
    category: 'professional',
    domain: 'distributed-systems',
    year: '2024 - 2025',
    role: 'Lead Systems Architect',
    companyOrContext: 'TechSolvers Global Financials',
    shortDescription: 'Designed and deployed a high-throughput trading middleware pipeline capable of routing 15,000+ orders/second with p99 latency under 2.1ms.',
    fullDescription: 'Architected an end-to-end institutional financial gateway that replaced a legacy monolith. Implemented lock-free concurrent memory buffers in Go and memory-mapped state machines to achieve strict regulatory auditing with zero data loss. Integrated a sleek real-time monitoring HUD built with React and WebSockets for the trading operations desk.',
    architectureHighlights: [
      'Lock-free ring buffer dispatching over 15k events/sec',
      'Distributed Kafka commit log with Raft consensus verification',
      'Custom WebSocket streaming engine pushing sub-second delta updates to the frontend',
      'Automated canary deployment with instant circuit breakers on anomaly detection'
    ],
    metrics: [
      { label: 'p99 Latency', value: '< 2.1 ms' },
      { label: 'Throughput', value: '18,500 tx/sec' },
      { label: 'Availability', value: '99.999%' },
      { label: 'Cost Reduction', value: '38%' }
    ],
    techStack: ['Go', 'Kafka', 'Redis', 'Docker', 'Kubernetes', 'React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/richardcraven/placeholder-fintech-gateway',
    liveUrl: 'https://demo-fintech.hierocode.dev',
    status: 'production',
    featured: true,
    relatedSkillIds: ['go', 'react', 'typescript', 'kubernetes', 'redis', 'docker'],
    badgeColor: '#ec4899'
  },
  {
    id: 'proj-cloud-orchestrator',
    title: 'Nova Multi-Region Cloud Orchestrator',
    subtitle: 'Zero-downtime fleet deployment and automated mesh routing platform',
    category: 'professional',
    domain: 'cloud-devops',
    year: '2023 - 2024',
    role: 'Staff Infrastructure Engineer',
    companyOrContext: 'CloudScale Infrastructure Labs',
    shortDescription: 'Unified cloud management control plane allowing unified multi-cloud workloads across AWS EKS and GCP Anthos with intelligent cost-routing.',
    fullDescription: 'Engineered a unified infrastructure control plane that abstracted AWS, GCP, and bare-metal clusters under a single declarative GraphQL API. Reduced developer staging environment spin-up times from 45 minutes to 90 seconds while enforcing strict security policy definitions across 14 geographical regions.',
    architectureHighlights: [
      'Multi-cluster Kubernetes ingress controller with automated TLS termination',
      'Real-time cost optimization engine redirecting non-critical jobs to spot instances',
      'Interactive infrastructure topology canvas rendered in React and SVG',
      'Zero-trust mutual TLS enforcement using Istio service mesh'
    ],
    metrics: [
      { label: 'Deployment Time', value: '90 sec (vs 45m)' },
      { label: 'Clusters Managed', value: '48 Clusters' },
      { label: 'Monthly Savings', value: '$34,000 / mo' },
      { label: 'Global Regions', value: '14 Regions' }
    ],
    techStack: ['TypeScript', 'Node.js', 'Terraform', 'Kubernetes', 'AWS', 'GraphQL', 'React', 'Docker'],
    githubUrl: 'https://github.com/richardcraven/placeholder-nova-orchestrator',
    liveUrl: 'https://nova-control.hierocode.dev',
    status: 'production',
    featured: true,
    relatedSkillIds: ['typescript', 'kubernetes', 'aws', 'docker', 'react', 'graphql'],
    badgeColor: '#a855f7'
  },
  {
    id: 'proj-telemetry-nexus',
    title: 'Nexus Telemetry & Anomaly Radar',
    subtitle: 'Distributed tracing, metric aggregation, and AI-assisted root-cause diagnosis',
    category: 'professional',
    domain: 'distributed-systems',
    year: '2023',
    role: 'Principal Engineer',
    companyOrContext: 'Nexus Enterprises',
    shortDescription: 'Real-time observability platform processing 4.2 billion daily telemetry spans with automatic anomaly classification.',
    fullDescription: 'Built an enterprise observability pipeline that ingests OpenTelemetry traces across 250 microservices. Implemented an anomaly detection layer that surfaces correlated incident root causes in under 15 seconds, slashing mean time to resolution (MTTR) by 62%.',
    architectureHighlights: [
      'ClickHouse columnar storage layer engineered for 100k+ inserts/second',
      'Real-time dependency graph visualization showing service health in real-time',
      'Automated SLO budget alerts with PagerDuty and Slack webhooks',
      'Interactive flame graph profiling for microservice bottlenecks'
    ],
    metrics: [
      { label: 'Daily Spans', value: '4.2B spans' },
      { label: 'MTTR Improvement', value: '-62% time' },
      { label: 'Query Response', value: '< 180 ms' },
      { label: 'Data Ingestion', value: '350 GB/hr' }
    ],
    techStack: ['Rust', 'ClickHouse', 'OpenTelemetry', 'React', 'TypeScript', 'Tailwind CSS', 'Docker'],
    githubUrl: 'https://github.com/richardcraven/placeholder-nexus-telemetry',
    liveUrl: 'https://nexus-radar.hierocode.dev',
    status: 'production',
    featured: true,
    relatedSkillIds: ['rust', 'react', 'typescript', 'docker'],
    badgeColor: '#06b6d4'
  },
  {
    id: 'proj-enterprise-identity',
    title: 'SecureAuth Zero-Trust Identity Gateway',
    subtitle: 'FIDO2 / WebAuthn passwordless biometric authentication and dynamic RBAC',
    category: 'professional',
    domain: 'cloud-devops',
    year: '2022 - 2023',
    role: 'Senior Security Software Engineer',
    companyOrContext: 'CyberScale Defense',
    shortDescription: 'Hardened identity and access management suite servicing 300k+ employees with adaptive MFA and zero-trust perimeter policies.',
    fullDescription: 'Engineered an identity provider compliant with SOC2 Type II and FedRAMP standards. Built passwordless biometric authentication flows using WebAuthn/FIDO2, reducing helpdesk credential resets to near zero while enforcing continuous authorization checks based on device risk signals.',
    architectureHighlights: [
      'Context-aware adaptive authentication analyzing IP repute and device posture',
      'WebAuthn / Passkey registration with instant fallback to hardware tokens',
      'High-performance JWT signing engine with sub-millisecond cache hits in Redis',
      'Audit log immutability verified via cryptographically signed hashes'
    ],
    metrics: [
      { label: 'Users Supported', value: '320,000+' },
      { label: 'Login Velocity', value: '180ms auth' },
      { label: 'Phishing Defense', value: '100% immune' },
      { label: 'Credential Resets', value: '-94%' }
    ],
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'React', 'WebAuthn', 'Docker'],
    githubUrl: 'https://github.com/richardcraven/placeholder-secureauth',
    liveUrl: 'https://secureauth.hierocode.dev',
    status: 'production',
    featured: false,
    relatedSkillIds: ['python', 'postgres', 'redis', 'react', 'docker'],
    badgeColor: '#a855f7'
  },
  {
    id: 'proj-fleet-manager',
    title: 'IoT Edge Fleet & Telematics Console',
    subtitle: 'Real-time telemetry and OTA firmware orchestration for 14,000 remote devices',
    category: 'professional',
    domain: 'fullstack-web',
    year: '2021 - 2022',
    role: 'Full-Stack Lead Engineer',
    companyOrContext: 'Veloce Telematics',
    shortDescription: 'Interactive fleet operations console mapping geospatial coordinates, battery metrics, and OTA firmware rollout rings.',
    fullDescription: 'Developed an interactive mapping console and command hub for fleet operations. Handled bidirectional WebSocket and MQTT connections for 14,000 industrial IoT devices with live GPS breadcrumbing and staggered firmware updates with auto-rollback.',
    architectureHighlights: [
      'TimescaleDB time-series storage with continuous aggregate rollups',
      'Interactive WebGL map renderer supporting 20,000 simultaneous animated markers',
      'Staged firmware deployment engine with automated health checks and instant abort',
      'Offline caching capabilities in Progressive Web App for field engineers'
    ],
    metrics: [
      { label: 'Active Devices', value: '14,200+' },
      { label: 'Map FPS', value: '60 FPS stable' },
      { label: 'OTA Success Rate', value: '99.8%' },
      { label: 'Data Points/Day', value: '120M+' }
    ],
    techStack: ['React', 'TypeScript', 'Go', 'TimescaleDB', 'MQTT', 'Tailwind CSS', 'Mapbox GL'],
    githubUrl: 'https://github.com/richardcraven/placeholder-iot-fleet',
    liveUrl: 'https://fleet-telematics.hierocode.dev',
    status: 'production',
    featured: false,
    relatedSkillIds: ['react', 'typescript', 'go', 'postgres', 'docker'],
    badgeColor: '#00f0b5'
  },
  {
    id: 'proj-supply-chain-mesh',
    title: 'Aegis Intelligent Supply Chain Mesh',
    subtitle: 'Predictive logistics dispatch and automated multi-carrier route calculation',
    category: 'professional',
    domain: 'fullstack-web',
    year: '2020 - 2021',
    role: 'Senior Software Engineer',
    companyOrContext: 'LogiCore Logistics',
    shortDescription: 'Supply chain management dashboard balancing shipping costs, driver transit hours, and delivery SLAs across North America.',
    fullDescription: 'Architected the core routing algorithm and modern React web client for commercial freight dispatchers. Automated carrier price negotiations and live tracking for tens of thousands of freight containers.',
    architectureHighlights: [
      'Heuristic routing graph algorithm cutting empty transit miles by 24%',
      'Dynamic PDF manifest generator creating shipping labels in under 200ms',
      'Custom table virtualization with 50,000 rows at 60fps scrolling',
      'Real-time automated dispute resolution and SMS status notification'
    ],
    metrics: [
      { label: 'Freight Handled', value: '$85M GMV' },
      { label: 'Empty Miles Saved', value: '24%' },
      { label: 'Dispatcher Time', value: '-3.5 hrs/day' },
      { label: 'On-time Rate', value: '98.4%' }
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Tailwind CSS', 'AWS'],
    githubUrl: 'https://github.com/richardcraven/placeholder-supply-chain',
    liveUrl: 'https://aegis-logistics.hierocode.dev',
    status: 'production',
    featured: false,
    relatedSkillIds: ['react', 'node', 'redis', 'aws', 'typescript'],
    badgeColor: '#ec4899'
  },

  // PERSONAL / R&D PROJECTS
  {
    id: 'proj-agentic-runtime',
    title: 'Aura Autonomous Agent Runtime',
    subtitle: 'Local-first agent orchestration framework with reactive tool scheduling',
    category: 'personal',
    domain: 'ai-ml',
    year: '2024 - 2025',
    role: 'Creator & Core Architect',
    companyOrContext: 'Craven Labs (Open Source)',
    shortDescription: 'Modular runtime for autonomous LLM agents featuring step-level reflection, sandboxed execution, and semantic state trees.',
    fullDescription: 'Built an open-source agent execution framework that combines structured memory graphs with reactive tool dispatching. Features local vector indexing in WASM and visual trajectory replays so developers can inspect agent reasoning trees in real-time.',
    architectureHighlights: [
      'Hierarchical agent communication protocol with parent/subagent state sharing',
      'In-browser vector search powered by sqlite-vss compiled to WebAssembly',
      'Deterministic playback engine allowing step-by-step debugging of agent decisions',
      'Plug-and-play tool definitions adhering to standard OpenAPI schemas'
    ],
    metrics: [
      { label: 'GitHub Stars', value: '1.4k+ stars' },
      { label: 'Agent Reasoning Speed', value: '3.2x faster' },
      { label: 'Memory Footprint', value: '< 65MB' },
      { label: 'Contributors', value: '18 active' }
    ],
    techStack: ['TypeScript', 'React', 'WebAssembly', 'Node.js', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/richardcraven/aura-agent-runtime',
    liveUrl: 'https://aura-agents.hierocode.dev',
    status: 'active',
    featured: true,
    relatedSkillIds: ['typescript', 'react', 'node', 'python', 'docker'],
    badgeColor: '#ec4899'
  },
  {
    id: 'proj-neural-audio',
    title: 'Vortex Modular WebAudio Synth',
    subtitle: 'Polyphonic FM & wavetable synthesizer built in WebAudio & AudioWorklet',
    category: 'personal',
    domain: 'fullstack-web',
    year: '2024',
    role: 'Creator & DSP Engineer',
    companyOrContext: 'Craven Labs (Open Source)',
    shortDescription: 'Browser-based modular synthesizer featuring patch cabling, 16-step sequencer, and custom WebAssembly DSP filters.',
    fullDescription: 'Engineered an audio synthesis engine running directly in the browser using AudioWorklet threads to ensure zero-latency glitch-free audio processing. Features interactive SVG virtual patch cables inspired by modular hardware synthesizers.',
    architectureHighlights: [
      'Real-time AudioWorklet DSP node processing audio in a dedicated high-priority thread',
      'Interactive SVG bezier patch cords with drag-and-drop voltage routing',
      'Custom visualizer with 60 FPS oscilloscope and FFT spectrum analyzer',
      'Web MIDI API integration supporting hardware keyboards and continuous controllers'
    ],
    metrics: [
      { label: 'Audio Latency', value: '5.8 ms' },
      { label: 'Max Polyphony', value: '32 voices' },
      { label: 'Filter Precision', value: '64-bit float' },
      { label: 'Patch Presets', value: '45+ builtin' }
    ],
    techStack: ['React', 'TypeScript', 'WebAudio API', 'WebAssembly', 'Tailwind CSS', 'Canvas'],
    githubUrl: 'https://github.com/richardcraven/vortex-synth',
    liveUrl: 'https://vortex-synth.hierocode.dev',
    status: 'active',
    featured: true,
    relatedSkillIds: ['react', 'typescript'],
    badgeColor: '#06b6d4'
  },
  {
    id: 'proj-micro-kv',
    title: 'FlashKV Fast Embedded Storage',
    subtitle: 'LSM-tree key-value storage engine engineered in Rust with zero-copy reads',
    category: 'personal',
    domain: 'developer-tools',
    year: '2023 - 2024',
    role: 'Creator & Core Dev',
    companyOrContext: 'Craven Labs (Open Source)',
    shortDescription: 'High performance embedded key-value engine with write-ahead logging, SSTable compaction, and C/WASM bindings.',
    fullDescription: 'Designed a lightweight storage engine to study low-level systems programming and cache coherence. Features bloom filters for rapid key checks, concurrent memtable flushing, and seamless bindings for both Node.js and WebAssembly.',
    architectureHighlights: [
      'Log-structured merge tree (LSM) architecture with leveled background compaction',
      'Bloom filters reducing disk seek operations for nonexistent keys by 99.2%',
      'Crash-safe Write-Ahead Logging (WAL) with sync and async fsync modes',
      'Zero external runtime dependencies for maximum embeddability'
    ],
    metrics: [
      { label: 'Write Throughput', value: '180k ops/sec' },
      { label: 'Read Latency', value: '12 microseconds' },
      { label: 'Binary Size', value: '1.2 MB' },
      { label: 'Test Coverage', value: '96% unit & fuzz' }
    ],
    techStack: ['Rust', 'WebAssembly', 'C ABI', 'Node.js', 'CLI'],
    githubUrl: 'https://github.com/richardcraven/flash-kv',
    liveUrl: 'https://flashkv.hierocode.dev',
    status: 'active',
    featured: false,
    relatedSkillIds: ['rust', 'docker'],
    badgeColor: '#a855f7'
  },
  {
    id: 'proj-git-tree-visualizer',
    title: 'ChronoBranch 3D Monorepo Visualizer',
    subtitle: 'Interactive WebGL graph mapping branch divergences, merges, and code churn',
    category: 'personal',
    domain: 'developer-tools',
    year: '2023',
    role: 'Creator',
    companyOrContext: 'Craven Labs',
    shortDescription: 'Visual spatial graph for large Git monorepos that maps commit velocity, author contributions, and hot-spots.',
    fullDescription: 'Rendered massive multi-thousand commit histories as an explorable 3D universe. Engineers can travel along branch timelines, inspect hot spot directories, and replay team refactoring efforts over years of history.',
    architectureHighlights: [
      'Force-directed 3D graph layout calculated via Web Workers to keep UI fluid',
      'Custom shader pipelines rendering tens of thousands of commit nodes and links',
      'Git log streaming parser handling multi-gigabyte repository dumps',
      'Interactive time scrubbing slider with animated state interpolations'
    ],
    metrics: [
      { label: 'Nodes Rendered', value: '50,000+ nodes' },
      { label: 'Rendering Rate', value: '60 FPS' },
      { label: 'Monorepos Tested', value: 'Linux, React, Kube' },
      { label: 'Load Time', value: '< 2.5s' }
    ],
    techStack: ['React', 'Three.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/richardcraven/chronobranch-3d',
    liveUrl: 'https://chronobranch.hierocode.dev',
    status: 'active',
    featured: false,
    relatedSkillIds: ['react', 'typescript'],
    badgeColor: '#00f0b5'
  },
  {
    id: 'proj-dev-dashboard',
    title: 'hierocode Developer Command HUD',
    subtitle: 'Personal mission control for CI/CD pipelines, homelab cluster, and GitHub activity',
    category: 'personal',
    domain: 'fullstack-web',
    year: '2024',
    role: 'Architect & Maintainer',
    companyOrContext: 'Personal Homelab & Dev Tools',
    shortDescription: 'Tailored engineer dashboard aggregating metrics from GitHub Actions, Proxmox hypervisors, and cloud spend.',
    fullDescription: 'Created a personal daily cockpit that consolidates pull request reviews, automated CI test status, server temperatures, Kubernetes pod restarts, and cloud billing alerts onto a single screen.',
    architectureHighlights: [
      'Configurable widget grid with drag-and-drop layout persistence in localStorage',
      'SSE (Server-Sent Events) live telemetry stream from home lab Proxmox nodes',
      'Keyboard-first command palette with fuzzy search (cmd+k style)',
      'Custom dark HUD design aesthetic with ambient status glow'
    ],
    metrics: [
      { label: 'Daily Use', value: '100% daily' },
      { label: 'API Integrations', value: '9 services' },
      { label: 'Bundle Size', value: '42 kB gzip' },
      { label: 'Instant Wake', value: '< 80ms' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GraphQL'],
    githubUrl: 'https://github.com/richardcraven/hierocode-hud',
    liveUrl: 'https://hud.hierocode.dev',
    status: 'active',
    featured: false,
    relatedSkillIds: ['react', 'typescript', 'docker', 'graphql'],
    badgeColor: '#ec4899'
  },
  {
    id: 'proj-mesh-vpn',
    title: 'SubNet Zero-Config Mesh Tunnel',
    subtitle: 'Encrypted peer-to-peer overlay network with automatic NAT hole-punching',
    category: 'personal',
    domain: 'distributed-systems',
    year: '2022',
    role: 'Creator & Protocol Dev',
    companyOrContext: 'Craven Labs (Open Source)',
    shortDescription: 'Lightweight WireGuard-based peer network enabling private cluster networking across restrictive corporate firewalls.',
    fullDescription: 'Implemented a lightweight STUN/DERP coordination server and user-space WireGuard proxy that allows private microservices running on laptops and edge devices to communicate transparently over mutual TLS encrypted tunnels.',
    architectureHighlights: [
      'Interactive routing table visualizer showing packet hops and latency jitter',
      'STUN/TURN NAT traversal with 94% direct peer connection success rate',
      'ChaCha20-Poly1305 end-to-end cryptographic encryption of all payload packets',
      'Automated key rotation and certificate revocation'
    ],
    metrics: [
      { label: 'Throughput', value: '940 Mbps' },
      { label: 'Connection Rate', value: '94% Direct' },
      { label: 'Overhead', value: '< 1.4% CPU' },
      { label: 'Zero-Config Setup', value: '< 30 sec' }
    ],
    techStack: ['Go', 'WireGuard', 'SQLite', 'React', 'Docker'],
    githubUrl: 'https://github.com/richardcraven/subnet-mesh',
    liveUrl: 'https://subnet.hierocode.dev',
    status: 'archived',
    featured: false,
    relatedSkillIds: ['go', 'docker', 'react'],
    badgeColor: '#a855f7'
  }
];
