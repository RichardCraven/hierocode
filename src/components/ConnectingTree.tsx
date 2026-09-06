import React, { useState } from 'react';
import { 
  GitFork, 
  Sparkles, 
  Briefcase, 
  FlaskConical, 
  Cpu, 
  ChevronRight, 
  ExternalLink, 
  Layers, 
  Zap, 
  CheckCircle2,
  Info,
  SlidersHorizontal
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { Project } from '../types/portfolio';

interface ConnectingTreeProps {
  onSelectProject: (project: Project) => void;
}

type BranchFilter = 'all' | 'professional' | 'personal' | 'disciplines';

export const ConnectingTree: React.FC<ConnectingTreeProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<BranchFilter>('all');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('proj-fintech-gateway');

  // Selected project for quick preview
  const activeProject = PROJECTS.find(p => p.id === selectedNodeId) || PROJECTS[0];

  const professionalProjects = PROJECTS.filter(p => p.category === 'professional');
  const personalProjects = PROJECTS.filter(p => p.category === 'personal');

  const disciplines = [
    {
      id: 'disc-distributed',
      name: 'Distributed Systems & Real-Time',
      desc: 'High-throughput concurrency, Raft consensus, zero-copy buffers',
      tech: ['Go', 'Rust', 'Kafka', 'Redis', 'gRPC'],
      color: '#ec4899',
      projectsCount: 4
    },
    {
      id: 'disc-cloud',
      name: 'Cloud-Native & Orchestration',
      desc: 'Multi-region Kubernetes, zero-downtime canary, Terraform IaC',
      tech: ['Kubernetes', 'AWS', 'Terraform', 'Docker', 'Istio'],
      color: '#a855f7',
      projectsCount: 4
    },
    {
      id: 'disc-frontend',
      name: 'Modern UI & WebGL Graphics',
      desc: 'High-framerate rendering, WebAudio DSP, design system architecture',
      tech: ['React 18', 'TypeScript', 'Tailwind', 'Three.js', 'Canvas'],
      color: '#06b6d4',
      projectsCount: 5
    },
    {
      id: 'disc-ai',
      name: 'Autonomous Agents & WASM',
      desc: 'Local-first LLM orchestration, vector retrieval, sandbox execution',
      tech: ['TypeScript', 'Python', 'WASM', 'Vector DB', 'OpenAPI'],
      color: '#00f0b5',
      projectsCount: 2
    }
  ];

  return (
    <section id="tree" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Screenshot 1 Visual Style (Centered Pill Node) */}
        <div className="flex flex-col items-center text-center mb-14">
          
          {/* Vertical Connector Line from above (Screenshot 1 Node aesthetic) */}
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-purple-500/40 to-purple-500 mb-3" />
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#120c26] border border-purple-500/30 text-purple-300 font-mono text-xs shadow-glow-sm">
            <GitFork className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>INTERACTIVE ARCHITECTURE TREE</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Portfolio &amp; Skill Tree
          </h2>

          <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base">
            Explore how professional institutional systems, open-source lab experiments, and core architectural disciplines branch from a unified engineering foundation.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 bg-[#100b24]/90 p-1.5 rounded-2xl border border-purple-500/20 backdrop-blur-xl">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-glow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              All Branches ({PROJECTS.length + disciplines.length})
            </button>

            <button
              onClick={() => setActiveFilter('professional')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeFilter === 'professional'
                  ? 'bg-purple-600 text-white shadow-glow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-purple-300" />
              Professional Systems ({professionalProjects.length})
            </button>

            <button
              onClick={() => setActiveFilter('personal')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeFilter === 'personal'
                  ? 'bg-pink-600 text-white shadow-glow-pink'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <FlaskConical className="w-3.5 h-3.5 text-pink-300" />
              Personal Labs &amp; OSS ({personalProjects.length})
            </button>

            <button
              onClick={() => setActiveFilter('disciplines')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeFilter === 'disciplines'
                  ? 'bg-cyan-600 text-white shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-300" />
              Technical Disciplines ({disciplines.length})
            </button>
          </div>
        </div>

        {/* The Visual Skill Tree Canvas */}
        <div className="relative rounded-3xl bg-[#0d091e]/90 border border-purple-500/25 p-6 sm:p-10 shadow-card-elevated backdrop-blur-2xl">
          
          {/* Top Root Node: CravenTech Core */}
          <div className="flex flex-col items-center relative z-20">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 blur opacity-60 group-hover:opacity-100 transition duration-300" />
              <div className="relative px-6 py-3.5 rounded-xl bg-[#130d2a] border border-purple-400/40 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-400/40 flex items-center justify-center font-mono font-bold text-xs text-purple-300">
                  CT
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-purple-400">ROOT ARCHITECTURE HUB</div>
                  <div className="text-base font-bold text-white">Richard Craven &bull; CravenTech 2.0</div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </div>

            {/* Vertical Trunk Line down from Root */}
            <div className="w-0.5 h-10 bg-gradient-to-b from-purple-500 via-fuchsia-500 to-purple-500" />
          </div>

          {/* SVG Animated Connecting Circuit Cables */}
          <div className="hidden lg:block relative w-full h-12">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 50">
              <defs>
                <linearGradient id="treeCableGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
                </linearGradient>
              </defs>

              {/* Horizontal Bus Line */}
              <path
                d="M 180 25 L 500 25 L 820 25"
                stroke="url(#treeCableGrad)"
                strokeWidth="2"
                fill="none"
              />

              {/* Droppers to branches */}
              <path d="M 180 25 L 180 50" stroke="#ec4899" strokeWidth="2" fill="none" />
              <circle cx="180" cy="25" r="4" fill="#ec4899" />

              <path d="M 500 0 L 500 50" stroke="#a855f7" strokeWidth="2" fill="none" />
              <circle cx="500" cy="25" r="5" fill="#a855f7" />

              <path d="M 820 25 L 820 50" stroke="#06b6d4" strokeWidth="2" fill="none" />
              <circle cx="820" cy="25" r="4" fill="#06b6d4" />
            </svg>
          </div>

          {/* Major Branches Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 mt-4 lg:mt-0">
            
            {/* BRANCH 1: Professional Engineering */}
            {(activeFilter === 'all' || activeFilter === 'professional') && (
              <div className="flex flex-col">
                {/* Branch Header Node */}
                <div className="p-4 rounded-2xl bg-[#160f33] border border-purple-500/30 flex items-center justify-between shadow-glow-sm mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Professional Work</h3>
                      <div className="text-[11px] text-purple-300 font-mono">Institutional &amp; Enterprise</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-purple-500/20 text-purple-200 border border-purple-500/30">
                    {professionalProjects.length} Nodes
                  </span>
                </div>

                {/* Subnodes with Connecting Lines */}
                <div className="flex flex-col gap-3 pl-3 border-l-2 border-purple-500/30 relative">
                  {professionalProjects.map((proj) => {
                    const isSelected = selectedNodeId === proj.id;
                    const isHovered = hoveredNodeId === proj.id;

                    return (
                      <div
                        key={proj.id}
                        onMouseEnter={() => setHoveredNodeId(proj.id)}
                        onMouseLeave={() => setHoveredNodeId(null)}
                        onClick={() => setSelectedNodeId(proj.id)}
                        className={`group relative p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-purple-900/40 border-purple-400 shadow-glow-sm translate-x-1.5'
                            : isHovered
                            ? 'bg-purple-950/30 border-purple-500/50 translate-x-1'
                            : 'bg-[#120c27]/80 border-purple-500/20 hover:border-purple-500/40'
                        }`}
                      >
                        {/* Horizontal Connector Pin */}
                        <div className={`absolute -left-[14px] top-1/2 -translate-y-1/2 w-2.5 h-0.5 ${
                          isSelected ? 'bg-purple-400' : 'bg-purple-500/40'
                        }`} />
                        <div className={`absolute -left-[17px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
                          isSelected ? 'bg-purple-300 shadow-glow' : 'bg-purple-500/50'
                        }`} />

                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300">
                                {proj.domain.replace('-', ' ')}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">{proj.year}</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mt-1 group-hover:text-purple-300 transition-colors">
                              {proj.title}
                            </h4>
                            <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                              {proj.shortDescription}
                            </p>
                          </div>
                          <ChevronRight className={`w-4 h-4 text-purple-400 shrink-0 transition-transform ${
                            isSelected ? 'translate-x-1 text-white' : ''
                          }`} />
                        </div>

                        {/* Quick metric pill */}
                        <div className="mt-2.5 pt-2 border-t border-purple-500/15 flex items-center justify-between">
                          <span className="text-[11px] font-mono text-purple-300 font-medium">
                            {proj.metrics[0].label}: {proj.metrics[0].value}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {proj.techStack.slice(0, 3).join(' • ')}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* BRANCH 2: Personal Labs & Open Source */}
            {(activeFilter === 'all' || activeFilter === 'personal') && (
              <div className="flex flex-col">
                {/* Branch Header Node */}
                <div className="p-4 rounded-2xl bg-[#190d2e] border border-pink-500/30 flex items-center justify-between shadow-glow-pink mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-pink-600/30 border border-pink-400/40 flex items-center justify-center text-pink-300">
                      <FlaskConical className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Personal Labs &amp; OSS</h3>
                      <div className="text-[11px] text-pink-300 font-mono">Craven Experimental R&amp;D</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-pink-500/20 text-pink-200 border border-pink-500/30">
                    {personalProjects.length} Nodes
                  </span>
                </div>

                {/* Subnodes with Connecting Lines */}
                <div className="flex flex-col gap-3 pl-3 border-l-2 border-pink-500/30 relative">
                  {personalProjects.map((proj) => {
                    const isSelected = selectedNodeId === proj.id;
                    const isHovered = hoveredNodeId === proj.id;

                    return (
                      <div
                        key={proj.id}
                        onMouseEnter={() => setHoveredNodeId(proj.id)}
                        onMouseLeave={() => setHoveredNodeId(null)}
                        onClick={() => setSelectedNodeId(proj.id)}
                        className={`group relative p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-pink-900/40 border-pink-400 shadow-glow-pink translate-x-1.5'
                            : isHovered
                            ? 'bg-pink-950/30 border-pink-500/50 translate-x-1'
                            : 'bg-[#130b25]/80 border-pink-500/20 hover:border-pink-500/40'
                        }`}
                      >
                        {/* Horizontal Connector Pin */}
                        <div className={`absolute -left-[14px] top-1/2 -translate-y-1/2 w-2.5 h-0.5 ${
                          isSelected ? 'bg-pink-400' : 'bg-pink-500/40'
                        }`} />
                        <div className={`absolute -left-[17px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
                          isSelected ? 'bg-pink-300 shadow-glow-pink' : 'bg-pink-500/50'
                        }`} />

                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-300">
                                {proj.domain.replace('-', ' ')}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">{proj.year}</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mt-1 group-hover:text-pink-300 transition-colors">
                              {proj.title}
                            </h4>
                            <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                              {proj.shortDescription}
                            </p>
                          </div>
                          <ChevronRight className={`w-4 h-4 text-pink-400 shrink-0 transition-transform ${
                            isSelected ? 'translate-x-1 text-white' : ''
                          }`} />
                        </div>

                        {/* Quick metric pill */}
                        <div className="mt-2.5 pt-2 border-t border-pink-500/15 flex items-center justify-between">
                          <span className="text-[11px] font-mono text-pink-300 font-medium">
                            {proj.metrics[0].label}: {proj.metrics[0].value}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {proj.techStack.slice(0, 3).join(' • ')}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* BRANCH 3: Architectural Disciplines */}
            {(activeFilter === 'all' || activeFilter === 'disciplines') && (
              <div className="flex flex-col">
                {/* Branch Header Node */}
                <div className="p-4 rounded-2xl bg-[#0c1b2c] border border-cyan-500/30 flex items-center justify-between shadow-glow-cyan mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Engineering Pillars</h3>
                      <div className="text-[11px] text-cyan-300 font-mono">Core Disciplines</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-cyan-500/20 text-cyan-200 border border-cyan-500/30">
                    {disciplines.length} Pillars
                  </span>
                </div>

                {/* Subnodes with Connecting Lines */}
                <div className="flex flex-col gap-3 pl-3 border-l-2 border-cyan-500/30 relative">
                  {disciplines.map((disc) => (
                    <div
                      key={disc.id}
                      className="group relative p-3.5 rounded-xl border bg-[#0a1624]/80 border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:translate-x-1"
                    >
                      {/* Horizontal Connector Pin */}
                      <div className="absolute -left-[14px] top-1/2 -translate-y-1/2 w-2.5 h-0.5 bg-cyan-500/40" />
                      <div className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/60" />

                      <div className="flex items-start justify-between">
                        <h4 className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                          {disc.name}
                        </h4>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                          {disc.projectsCount} Projs
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {disc.desc}
                      </p>

                      <div className="mt-2.5 pt-2 border-t border-cyan-500/15 flex flex-wrap gap-1.5">
                        {disc.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Quick Inspector HUD for Selected Node */}
          {activeProject && (
            <div className="mt-10 pt-8 border-t border-purple-500/25 bg-[#120c27]/70 rounded-2xl p-5 sm:p-6 border">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-400/30 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {activeProject.category === 'professional' ? 'Professional Project' : 'Personal Lab'}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">&bull; {activeProject.year}</span>
                      <span className="text-xs text-slate-400 font-mono">&bull; {activeProject.role}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mt-1">
                      {activeProject.title}
                    </h3>
                    <p className="text-xs text-slate-300 max-w-2xl mt-1">
                      {activeProject.subtitle}
                    </p>
                  </div>
                </div>

                {/* Inspect Action */}
                <button
                  onClick={() => onSelectProject(activeProject)}
                  className="px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-glow-sm hover:shadow-glow flex items-center gap-1.5 transition-all shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Inspect Full Architecture &amp; Metrics
                </button>
              </div>

              {/* Metrics Grid */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeProject.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20">
                    <div className="text-xs text-slate-400">{m.label}</div>
                    <div className="text-sm font-bold text-purple-200 font-mono mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
