import React, { useState } from 'react';
import { 
  GitFork, 
  Briefcase, 
  FlaskConical, 
  Cpu, 
  ChevronRight, 
  ExternalLink, 
  Zap, 
  CheckCircle2
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
  const [selectedNodeId, setSelectedNodeId] = useState<string>('proj-lpl-brokerage');

  // Selected project for quick preview
  const activeProject = PROJECTS.find(p => p.id === selectedNodeId) || PROJECTS[0];

  const professionalProjects = PROJECTS.filter(p => p.category === 'professional');
  const personalProjects = PROJECTS.filter(p => p.category === 'personal');

  const disciplines = [
    {
      id: 'disc-frontend',
      name: 'Frontend Architecture & State',
      desc: 'Large-scale Angular/NgRx, React/Redux, design systems, and UX modernization',
      tech: ['Angular', 'NgRx', 'React', 'Redux', 'TypeScript', 'SASS'],
      color: '#14b8a6',
      projectsCount: 6
    },
    {
      id: 'disc-fintech',
      name: 'Fintech Platforms & Market Data',
      desc: 'Brokerage platforms, live trading data, transaction flows, and enterprise UX',
      tech: ['LPL Financial', 'Visa', 'Citi', 'WebSockets', 'REST APIs'],
      color: '#06b6d4',
      projectsCount: 4
    },
    {
      id: 'disc-backend',
      name: 'Backend & Data Services',
      desc: 'Node.js services, SQL data layers, Java/Spring & .NET debugging',
      tech: ['Node.js', 'PostgreSQL', 'MySQL', 'Java/Spring', 'REST'],
      color: '#10b981',
      projectsCount: 5
    },
    {
      id: 'disc-cloud',
      name: 'Cloud, DevOps & Tooling',
      desc: 'AWS infrastructure, Docker containers, Jenkins pipelines, OpenAPI specs',
      tech: ['AWS', 'Docker', 'Jenkins', 'CI/CD', 'Swagger'],
      color: '#00f0b5',
      projectsCount: 4
    }
  ];

  return (
    <section id="tree" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-teal-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Centered Pill Node */}
        <div className="flex flex-col items-center text-center mb-14">
          
          {/* Vertical Connector Line from above */}
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-teal-500/40 to-teal-500 mb-3" />
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#091b24] border border-teal-500/30 text-teal-300 font-mono text-xs shadow-glow-sm">
            <GitFork className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
            <span>INTERACTIVE ARCHITECTURE TREE</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Portfolio &amp; Skill Tree
          </h2>

          <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base">
            Explore how professional institutional systems, open-source lab experiments, and core architectural disciplines branch from a unified engineering foundation.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 bg-[#091b24]/90 p-1.5 rounded-2xl border border-teal-500/20 backdrop-blur-xl">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold shadow-glow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              All Branches ({PROJECTS.length + disciplines.length})
            </button>

            <button
              onClick={() => setActiveFilter('professional')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeFilter === 'professional'
                  ? 'bg-teal-600 text-white shadow-glow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-teal-300" />
              Professional Systems ({professionalProjects.length})
            </button>

            <button
              onClick={() => setActiveFilter('personal')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeFilter === 'personal'
                  ? 'bg-cyan-600 text-white shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <FlaskConical className="w-3.5 h-3.5 text-cyan-300" />
              Personal Labs &amp; OSS ({personalProjects.length})
            </button>

            <button
              onClick={() => setActiveFilter('disciplines')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeFilter === 'disciplines'
                  ? 'bg-emerald-600 text-white shadow-glow-mint'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-emerald-300" />
              Technical Disciplines ({disciplines.length})
            </button>
          </div>
        </div>

        {/* The Visual Skill Tree Canvas */}
        <div className="relative rounded-3xl bg-[#081720]/90 border border-teal-500/25 p-6 sm:p-10 shadow-card-elevated backdrop-blur-2xl">
          
          {/* Top Root Node: hierocode Core */}
          <div className="flex flex-col items-center relative z-20">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-400 blur opacity-60 group-hover:opacity-100 transition duration-300" />
              <div className="relative px-6 py-3.5 rounded-xl bg-[#091b24] border border-teal-400/40 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-600/30 border border-teal-400/40 flex items-center justify-center font-mono font-bold text-xs text-teal-300">
                  HC
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-teal-400">ROOT ARCHITECTURE HUB</div>
                  <div className="text-base font-bold text-white">Richard Craven &bull; hierocode</div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </div>

            {/* Vertical Trunk Line down from Root */}
            <div className="w-0.5 h-10 bg-gradient-to-b from-teal-400 via-cyan-400 to-emerald-400" />
          </div>

          {/* SVG Animated Connecting Circuit Cables */}
          <div className="hidden lg:block relative w-full h-12">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 50">
              <defs>
                <linearGradient id="treeCableGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
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
              <path d="M 180 25 L 180 50" stroke="#14b8a6" strokeWidth="2" fill="none" />
              <circle cx="180" cy="25" r="4" fill="#14b8a6" />

              <path d="M 500 0 L 500 50" stroke="#06b6d4" strokeWidth="2" fill="none" />
              <circle cx="500" cy="25" r="5" fill="#06b6d4" />

              <path d="M 820 25 L 820 50" stroke="#10b981" strokeWidth="2" fill="none" />
              <circle cx="820" cy="25" r="4" fill="#10b981" />
            </svg>
          </div>

          {/* Major Branches Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 mt-4 lg:mt-0">
            
            {/* BRANCH 1: Professional Engineering */}
            {(activeFilter === 'all' || activeFilter === 'professional') && (
              <div className="flex flex-col">
                {/* Branch Header Node */}
                <div className="p-4 rounded-2xl bg-[#0a1e28] border border-teal-500/30 flex items-center justify-between shadow-glow-sm mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-600/30 border border-teal-400/40 flex items-center justify-center text-teal-300">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Professional Work</h3>
                      <div className="text-[11px] text-teal-300 font-mono">Institutional &amp; Enterprise</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-teal-500/20 text-teal-200 border border-teal-500/30">
                    {professionalProjects.length} Nodes
                  </span>
                </div>

                {/* Subnodes with Connecting Lines */}
                <div className="flex flex-col gap-3 pl-3 border-l-2 border-teal-500/30 relative">
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
                            ? 'bg-teal-900/40 border-teal-400 shadow-glow-sm translate-x-1.5'
                            : isHovered
                            ? 'bg-teal-950/30 border-teal-500/50 translate-x-1'
                            : 'bg-[#081822]/80 border-teal-500/20 hover:border-teal-500/40'
                        }`}
                      >
                        {/* Horizontal Connector Pin */}
                        <div className={`absolute -left-[14px] top-1/2 -translate-y-1/2 w-2.5 h-0.5 ${
                          isSelected ? 'bg-teal-400' : 'bg-teal-500/40'
                        }`} />
                        <div className={`absolute -left-[17px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
                          isSelected ? 'bg-teal-300 shadow-glow' : 'bg-teal-500/50'
                        }`} />

                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-teal-500/20 text-teal-300">
                                {proj.domain.replace('-', ' ')}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">{proj.year}</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mt-1 group-hover:text-teal-300 transition-colors">
                              {proj.title}
                            </h4>
                            <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                              {proj.shortDescription}
                            </p>
                          </div>
                          <ChevronRight className={`w-4 h-4 text-teal-400 shrink-0 transition-transform ${
                            isSelected ? 'translate-x-1 text-white' : ''
                          }`} />
                        </div>

                        {/* Quick metric pill */}
                        <div className="mt-2.5 pt-2 border-t border-teal-500/15 flex items-center justify-between gap-2 overflow-hidden">
                          <span className="text-[10px] font-mono text-teal-300 font-medium whitespace-nowrap shrink-0">
                            <span className="text-slate-400">{proj.metrics[0].label}:</span> {proj.metrics[0].value}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono truncate text-right">
                            {proj.techStack.slice(0, 2).join(' • ')}
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
                <div className="p-4 rounded-2xl bg-[#09202a] border border-cyan-500/30 flex items-center justify-between shadow-glow-cyan mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                      <FlaskConical className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Personal Labs &amp; OSS</h3>
                      <div className="text-[11px] text-cyan-300 font-mono">hierocode Experimental R&amp;D</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-cyan-500/20 text-cyan-200 border border-cyan-500/30">
                    {personalProjects.length} Nodes
                  </span>
                </div>

                {/* Subnodes with Connecting Lines */}
                <div className="flex flex-col gap-3 pl-3 border-l-2 border-cyan-500/30 relative">
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
                            ? 'bg-cyan-900/40 border-cyan-400 shadow-glow-cyan translate-x-1.5'
                            : isHovered
                            ? 'bg-cyan-950/30 border-cyan-500/50 translate-x-1'
                            : 'bg-[#081923]/80 border-cyan-500/20 hover:border-cyan-500/40'
                        }`}
                      >
                        {/* Horizontal Connector Pin */}
                        <div className={`absolute -left-[14px] top-1/2 -translate-y-1/2 w-2.5 h-0.5 ${
                          isSelected ? 'bg-cyan-400' : 'bg-cyan-500/40'
                        }`} />
                        <div className={`absolute -left-[17px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
                          isSelected ? 'bg-cyan-300 shadow-glow-cyan' : 'bg-cyan-500/50'
                        }`} />

                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                                {proj.domain.replace('-', ' ')}
                              </span>
                              <span className="text-[10px] text-slate-400 font-mono">{proj.year}</span>
                            </div>
                            <h4 className="font-bold text-white text-sm mt-1 group-hover:text-cyan-300 transition-colors">
                              {proj.title}
                            </h4>
                            <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                              {proj.shortDescription}
                            </p>
                          </div>
                          <ChevronRight className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform ${
                            isSelected ? 'translate-x-1 text-white' : ''
                          }`} />
                        </div>

                        {/* Quick metric pill */}
                        <div className="mt-2.5 pt-2 border-t border-cyan-500/15 flex items-center justify-between gap-2 overflow-hidden">
                          <span className="text-[10px] font-mono text-cyan-300 font-medium whitespace-nowrap shrink-0">
                            <span className="text-slate-400">{proj.metrics[0].label}:</span> {proj.metrics[0].value}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono truncate text-right">
                            {proj.techStack.slice(0, 2).join(' • ')}
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
                <div className="p-4 rounded-2xl bg-[#092224] border border-emerald-500/30 flex items-center justify-between shadow-glow-mint mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Engineering Pillars</h3>
                      <div className="text-[11px] text-emerald-300 font-mono">Core Disciplines</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-500/30">
                    {disciplines.length} Pillars
                  </span>
                </div>

                {/* Subnodes with Connecting Lines */}
                <div className="flex flex-col gap-3 pl-3 border-l-2 border-emerald-500/30 relative">
                  {disciplines.map((disc) => (
                    <div
                      key={disc.id}
                      className="group relative p-3.5 rounded-xl border bg-[#071b1e]/80 border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:translate-x-1"
                    >
                      {/* Horizontal Connector Pin */}
                      <div className="absolute -left-[14px] top-1/2 -translate-y-1/2 w-2.5 h-0.5 bg-emerald-500/40" />
                      <div className="absolute -left-[17px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400/60" />

                      <div className="flex items-start justify-between">
                        <h4 className="font-bold text-white text-sm group-hover:text-emerald-300 transition-colors">
                          {disc.name}
                        </h4>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                          {disc.projectsCount} Projs
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {disc.desc}
                      </p>

                      <div className="mt-2.5 pt-2 border-t border-emerald-500/15 flex flex-wrap gap-1.5">
                        {disc.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/20"
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
            <div className="mt-10 pt-8 border-t border-teal-500/25 bg-[#0a1e28]/70 rounded-2xl p-5 sm:p-6 border">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-600/30 border border-teal-400/30 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-teal-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
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
                  className="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 hover:scale-105 shadow-glow-sm hover:shadow-glow flex items-center gap-1.5 transition-all shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Inspect Full Architecture &amp; Metrics
                </button>
              </div>

              {/* Metrics Grid */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeProject.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-teal-950/30 border border-teal-500/20">
                    <div className="text-xs text-slate-400">{m.label}</div>
                    <div className="text-sm font-bold text-teal-200 font-mono mt-0.5">{m.value}</div>
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
