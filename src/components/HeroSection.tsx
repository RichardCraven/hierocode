import React from 'react';
import { 
  GitFork, 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Layers, 
  Server, 
  Github, 
  Linkedin, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface HeroSectionProps {
  onExploreTree: () => void;
  onExploreProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreTree, onExploreProjects }) => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Chip */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-200 text-xs font-mono backdrop-blur-md shadow-glow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>hierocode &bull; Lead Engineer &amp; Systems Architect</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column: Headline & Intro */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Hello,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                I am Richard Craven
              </span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
              Delivering efficient, scalable, and fault-tolerant solutions to transform complex technical visions into production reality.
            </p>

            <p className="mt-3 text-sm text-slate-400 max-w-xl font-mono leading-relaxed">
              &gt; Specializing in distributed backend architectures, cloud-native orchestration (K8s/AWS), and high-performance interactive frontend systems.
            </p>

            {/* Quick CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreTree}
                className="group relative px-6 py-3 rounded-xl font-semibold text-sm text-white overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 group-hover:scale-105 transition-transform" />
                <span className="relative flex items-center gap-2">
                  <GitFork className="w-4 h-4 text-purple-200" />
                  Explore Project Tree
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={onExploreProjects}
                className="px-6 py-3 rounded-xl font-semibold text-sm text-purple-200 bg-[#150e2c]/80 hover:bg-purple-900/30 border border-purple-500/30 hover:border-purple-400/60 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-purple-400" />
                View All Projects
              </button>

              <a
                href="#experience"
                className="px-5 py-3 rounded-xl font-mono text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-purple-400" />
                Success Stories
              </a>
            </div>

            {/* Metrics Ribbon (Screenshot 2 style highlights) */}
            <div className="mt-12 pt-8 border-t border-purple-500/20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/15 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono">
                  8+
                </div>
                <div className="text-xs text-slate-400 mt-1">Years Experience</div>
              </div>

              <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/15 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 font-mono">
                  24+
                </div>
                <div className="text-xs text-slate-400 mt-1">Shipped Projects</div>
              </div>

              <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/15 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 font-mono">
                  99.999%
                </div>
                <div className="text-xs text-slate-400 mt-1">Availability Mindset</div>
              </div>

              <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/15 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 font-mono">
                  4.2B+
                </div>
                <div className="text-xs text-slate-400 mt-1">Daily Telemetry Spans</div>
              </div>
            </div>
          </div>

          {/* Right Hero Column: High-Tech Profile Card with HUD Circuit Lines (Screenshot 2 Visual Feature) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* SVG Connecting Circuit HUD overlay */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden sm:block"
              viewBox="0 0 500 500"
            >
              <defs>
                <linearGradient id="hudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                </linearGradient>
                <filter id="hudGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Left branches (Screenshot 2 style HUD tags) */}
              <path
                d="M 120 180 L 40 180 L 10 200"
                stroke="url(#hudGrad)"
                strokeWidth="1.5"
                fill="none"
                filter="url(#hudGlow)"
              />
              <circle cx="10" cy="200" r="3.5" fill="#ec4899" filter="url(#hudGlow)" />

              <path
                d="M 120 250 L 50 250 L 10 280"
                stroke="url(#hudGrad)"
                strokeWidth="1.5"
                fill="none"
                filter="url(#hudGlow)"
              />
              <circle cx="10" cy="280" r="3.5" fill="#a855f7" filter="url(#hudGlow)" />

              <path
                d="M 120 320 L 40 320 L 10 350"
                stroke="url(#hudGrad)"
                strokeWidth="1.5"
                fill="none"
                filter="url(#hudGlow)"
              />
              <circle cx="10" cy="350" r="3.5" fill="#06b6d4" filter="url(#hudGlow)" />

              {/* Right branch traversing social hubs */}
              <path
                d="M 380 200 L 440 230 L 440 320 L 470 340"
                stroke="url(#hudGrad)"
                strokeWidth="1.5"
                fill="none"
                className="circuit-animated-line"
                filter="url(#hudGlow)"
              />
              <circle cx="470" cy="340" r="4" fill="#ec4899" />
            </svg>

            {/* Profile Avatar Card (Screenshot 2 composition) */}
            <div className="relative w-full max-w-sm rounded-3xl p-1 bg-gradient-to-b from-purple-500/40 via-purple-900/20 to-pink-500/30 shadow-glow-lg backdrop-blur-xl">
              <div className="w-full bg-[#0d091e] rounded-[22px] p-6 relative overflow-hidden">
                
                {/* Ambient internal light */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

                {/* Avatar Visual Placeholder / Tech Badge */}
                <div className="relative mx-auto w-44 h-44 rounded-2xl p-1 bg-gradient-to-tr from-purple-500 via-fuchsia-400 to-pink-500 shadow-glow">
                  <div className="w-full h-full bg-[#120b29] rounded-[14px] flex flex-col items-center justify-center relative overflow-hidden group">
                    
                    {/* Futuristic wireframe background */}
                    <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
                    
                    {/* Tech Avatar Iconography */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600/40 to-pink-600/40 border border-purple-400/40 flex items-center justify-center relative z-10 shadow-inner">
                      <Terminal className="w-10 h-10 text-purple-300 group-hover:scale-110 transition-transform" />
                    </div>

                    <div className="mt-2 text-center relative z-10">
                      <span className="font-mono text-xs font-bold text-white tracking-wider">
                        RICHARD CRAVEN
                      </span>
                      <div className="text-[10px] text-purple-400 font-mono">Lead IT Engineer</div>
                    </div>

                    {/* Online status indicator */}
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-[#090614]/80 px-2 py-0.5 rounded-full border border-emerald-500/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[9px] font-mono text-emerald-300">ACTIVE</span>
                    </div>
                  </div>
                </div>

                {/* Spec badges around avatar */}
                <div className="mt-6 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] border border-purple-500/20">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-purple-400" />
                      <span className="text-xs text-slate-300 font-medium">Distributed Systems</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      Go &bull; Rust &bull; K8s
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] border border-pink-500/20">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-pink-400" />
                      <span className="text-xs text-slate-300 font-medium">Modern Full-Stack</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30">
                      React &bull; Node &bull; TS
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] border border-cyan-500/20">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs text-slate-300 font-medium">AI &amp; Agent Runtimes</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      WASM &bull; Vector DB
                    </span>
                  </div>
                </div>

                {/* Social Network Node Connectors (Screenshot 2 style badges) */}
                <div className="mt-5 pt-4 border-t border-purple-500/20 flex items-center justify-center gap-3">
                  <a
                    href="https://github.com/richardcraven"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-600/30 hover:shadow-glow-sm transition-all"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/richardcraven"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-600/30 hover:shadow-glow-sm transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="p-2.5 rounded-xl bg-pink-950/40 border border-pink-500/30 text-pink-300 hover:text-white hover:bg-pink-600/30 hover:shadow-glow-pink transition-all"
                    title="Contact Form"
                  >
                    <Sparkles className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
