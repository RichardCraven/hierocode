import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Zap, 
  Server, 
  Clock, 
  Building2, 
  Sparkles,
  GitCommit
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'challenges' | 'metrics'>('architecture');

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#06030d]/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#0f0a21] border border-purple-500/30 rounded-3xl shadow-2xl shadow-purple-950/50 z-10 overflow-hidden my-8">
        
        {/* Top Header Glow Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500" />

        {/* Modal Top Bar */}
        <div className="p-6 sm:p-8 pb-4 flex items-start justify-between border-b border-purple-500/20">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold uppercase ${
                project.category === 'professional'
                  ? 'bg-purple-900/40 text-purple-300 border border-purple-500/40'
                  : 'bg-pink-900/40 text-pink-300 border border-pink-500/40'
              }`}>
                {project.category === 'professional' ? 'Professional Institutional' : 'Personal Lab R&D'}
              </span>

              <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-400 border border-white/[0.1]">
                {project.year}
              </span>

              <span className="text-xs font-mono text-purple-400 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                {project.companyOrContext || 'CravenTech'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-purple-500/20 transition-all shrink-0 ml-4"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs Navigation */}
        <div className="px-6 sm:px-8 border-b border-purple-500/15 flex items-center gap-6 bg-[#0a0618]/50">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3.5 text-xs font-semibold tracking-wide border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'architecture'
                ? 'border-purple-400 text-purple-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            System Architecture
          </button>

          <button
            onClick={() => setActiveTab('challenges')}
            className={`py-3.5 text-xs font-semibold tracking-wide border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'challenges'
                ? 'border-fuchsia-400 text-fuchsia-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-4 h-4" />
            Engineering Solved
          </button>

          <button
            onClick={() => setActiveTab('metrics')}
            className={`py-3.5 text-xs font-semibold tracking-wide border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'metrics'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Zap className="w-4 h-4" />
            Performance &amp; Impact
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          
          {/* TAB 1: System Architecture */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase text-purple-400 tracking-wider mb-2">
                  OVERVIEW &amp; MISSION
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Architecture Blueprint Visualization */}
              <div className="p-4 rounded-2xl bg-[#090516] border border-purple-500/25">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-purple-400" />
                    High-Level Topology Dataflow
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                    Active Pipeline
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20">
                    <div className="text-[10px] font-mono text-purple-400">INGRESS LAYER</div>
                    <div className="text-xs font-semibold text-white mt-1">Clients / Edge Gateway</div>
                    <div className="text-[10px] text-slate-400 mt-1">mTLS &bull; Token Validation</div>
                  </div>

                  <div className="p-3 rounded-xl bg-fuchsia-950/30 border border-fuchsia-500/20">
                    <div className="text-[10px] font-mono text-fuchsia-400">PROCESSING CORE</div>
                    <div className="text-xs font-semibold text-white mt-1">Async Event Bus / Engine</div>
                    <div className="text-[10px] text-slate-400 mt-1">Raft &bull; Memory Ring Buffer</div>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
                    <div className="text-[10px] font-mono text-cyan-400">PERSISTENCE &amp; HUD</div>
                    <div className="text-xs font-semibold text-white mt-1">Storage &amp; Live WebSocket</div>
                    <div className="text-[10px] text-slate-400 mt-1">ClickHouse &bull; React UI</div>
                  </div>
                </div>
              </div>

              {/* Architecture Highlights Bullets */}
              <div>
                <h4 className="text-xs font-mono uppercase text-purple-400 tracking-wider mb-3">
                  CORE TECHNICAL HIGHLIGHTS
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.architectureHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-purple-500/15">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-200">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Challenges & Solutions */}
          {activeTab === 'challenges' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Latency Jitter &amp; Concurrency Under High Load
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Eliminated traditional database lock contention by introducing lock-free ring buffers and in-memory transactional ledgers, reducing tail latency spikes under burst conditions from 120ms to 2.1ms.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-fuchsia-950/20 border border-fuchsia-500/20">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-fuchsia-400" />
                  Reliable Distributed State &amp; Zero-Loss Guarantee
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Engineered idempotency keys across all event consumers and integrated Write-Ahead Logging (WAL) with periodic distributed snapshots to satisfy stringent compliance audits.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Real-time Data Streaming to Front-End Interface
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Designed a delta-compression schema over binary WebSockets that minimized client bandwidth by 72% while maintaining 60 FPS live chart rendering in the React web console.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: Metrics & Impact */}
          {activeTab === 'metrics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-gradient-to-br from-purple-900/30 to-[#120b29] border border-purple-500/30 text-center">
                    <div className="text-xs text-slate-400 font-mono">{metric.label}</div>
                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-400 font-mono mt-1">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-[#0a0619] border border-purple-500/20">
                <h4 className="text-xs font-mono uppercase text-purple-400 tracking-wider mb-2">
                  BUSINESS &amp; OPERATIONAL OUTCOME
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  This system successfully served as a mission-critical cornerstone, lowering operational overhead, preventing downtime during peak demand periods, and accelerating developer release velocity across the entire engineering organization.
                </p>
              </div>
            </div>
          )}

          {/* Tech Stack Pills (Always visible below active tab) */}
          <div className="pt-4 border-t border-purple-500/15">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              TECHNOLOGIES UTILIZED
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl text-xs font-mono font-medium bg-purple-950/50 text-purple-200 border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / External CTAs */}
        <div className="p-6 bg-[#0a0617] border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <GitCommit className="w-3.5 h-3.5 text-purple-400" />
            <span>ID: {project.id}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-purple-500/30 flex items-center gap-2 transition-all"
              >
                <Github className="w-4 h-4" />
                Repository
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-glow-sm hover:shadow-glow flex items-center gap-2 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Launch Live System
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
