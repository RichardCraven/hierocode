import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { EXPERIENCES } from '../data/experience';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-900/30 border border-teal-500/30 text-teal-300 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>CAREER TRAJECTORY &amp; IMPACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Success Stories
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Demonstrated track record of delivering resilient cloud architectures, scaling high-velocity engineering teams, and optimizing mission-critical infrastructure.
          </p>
        </div>

        {/* Vertical Timeline with Connecting Circuit Trunk */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical Connecting Circuit Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-teal-400 via-cyan-400 to-emerald-400 opacity-40" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-8`}
                >
                  {/* Central Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#081820] border-2 border-teal-400 flex items-center justify-center z-20 shadow-glow-sm">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-teal-400 to-cyan-400 animate-pulse" />
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Content Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                    <div className={`p-6 sm:p-7 rounded-3xl bg-[#081822]/90 border border-teal-500/25 backdrop-blur-xl shadow-card-elevated hover:border-teal-400/50 transition-all duration-300 ${
                      isEven ? 'sm:mr-6' : 'sm:ml-6'
                    }`}>
                      {/* Meta information */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-teal-900/40 text-teal-300 border border-teal-500/30">
                          {exp.type}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-teal-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>

                      <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300 mt-0.5 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-teal-400" />
                        <span>{exp.company}</span>
                        <span className="text-slate-500">&bull;</span>
                        <span className="text-slate-400 font-normal text-xs">{exp.location}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                        {exp.summary}
                      </p>

                      {/* Key Impact Metrics */}
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {exp.metrics.map((m, idx) => (
                          <div key={idx} className="p-2.5 rounded-xl bg-teal-950/30 border border-teal-500/15">
                            <div className="text-[10px] text-slate-400 font-mono">{m.label}</div>
                            <div className="text-sm font-bold text-teal-200 font-mono mt-0.5">{m.value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Key achievements */}
                      <div className="mt-4 space-y-2">
                        {exp.achievements.map((ach, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies tags */}
                      <div className="mt-5 pt-3 border-t border-teal-500/15 flex flex-wrap gap-1.5">
                        {exp.techTags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
