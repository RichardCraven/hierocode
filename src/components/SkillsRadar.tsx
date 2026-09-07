import React, { useState } from 'react';
import { SKILLS } from '../data/skills';
import { PROJECTS } from '../data/projects';
import { Skill } from '../types/portfolio';
import { Sparkles } from 'lucide-react';

interface SkillsRadarProps {
  onSelectProjectById: (projectId: string) => void;
}

export const SkillsRadar: React.FC<SkillsRadarProps> = ({ onSelectProjectById }) => {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(SKILLS[0]);

  const categories = [
    { id: 'languages', label: 'Languages & Core' },
    { id: 'frontend', label: 'Frontend & UI Systems' },
    { id: 'backend', label: 'Backend & Data Mesh' },
    { id: 'cloud-infra', label: 'Cloud & Kubernetes' },
  ];

  // Find projects that use the selected skill
  const relatedProjects = PROJECTS.filter((p) =>
    p.relatedSkillIds?.includes(selectedSkill.id) ||
    p.techStack.some(t => t.toLowerCase().includes(selectedSkill.name.toLowerCase().split(' ')[0]))
  );

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-teal-500 mb-3" />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#081820] border border-teal-500/30 text-teal-300 font-mono text-xs shadow-glow-sm">
            <span className="text-teal-400 font-bold">&lt;/&gt;</span>
            <span>TECHNICAL PROFICIENCIES</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; Architecture Stack
          </h2>

          <p className="mt-3 text-slate-300 max-w-2xl text-sm sm:text-base">
            Engineered with deep focus on concurrency, memory-safety, cloud-native scalability, and tactile reactive user interfaces.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Categorized Skill Badges */}
          <div className="lg:col-span-7 space-y-6">
            {categories.map((cat) => {
              const catSkills = SKILLS.filter(s => s.category === cat.id);
              if (catSkills.length === 0) return null;

              return (
                <div key={cat.id} className="p-5 rounded-2xl bg-[#081822]/75 border border-teal-500/20 backdrop-blur-xl">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    {cat.label}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {catSkills.map((skill) => {
                      const isSelected = selectedSkill.id === skill.id;

                      return (
                        <button
                          key={skill.id}
                          onClick={() => setSelectedSkill(skill)}
                          className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                            isSelected
                              ? 'bg-teal-600/30 border-teal-400 shadow-glow-sm'
                              : 'bg-white/[0.02] border-teal-500/15 hover:border-teal-500/40 hover:bg-white/[0.04]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-white">{skill.name}</span>
                            <span className="text-[10px] font-mono text-teal-300">{skill.yearsExp}y</span>
                          </div>

                          {/* Mini progress meter */}
                          <div className="mt-2.5 w-full bg-teal-950/60 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                              style={{ width: `${skill.proficiency}%` }}
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Skill Detail & Connected Projects */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-6 sm:p-7 rounded-3xl bg-[#0a1e28]/90 border border-teal-500/30 shadow-card-elevated backdrop-blur-2xl">
              
              <div className="flex items-center justify-between border-b border-teal-500/20 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    Selected Skill Matrix
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {selectedSkill.name}
                  </h3>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                    {selectedSkill.proficiency}%
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">Proficiency</div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-teal-950/40 border border-teal-500/20">
                  <div className="text-[10px] text-slate-400 font-mono">Hands-on Experience</div>
                  <div className="text-lg font-bold text-white font-mono mt-0.5">{selectedSkill.yearsExp} Years</div>
                </div>

                <div className="p-3 rounded-xl bg-teal-950/40 border border-teal-500/20">
                  <div className="text-[10px] text-slate-400 font-mono">Referenced Projects</div>
                  <div className="text-lg font-bold text-teal-300 font-mono mt-0.5">
                    {relatedProjects.length} Systems
                  </div>
                </div>
              </div>

              {/* Connected Projects Sub-tree */}
              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  Projects Utilizing {selectedSkill.name}:
                </h4>

                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {relatedProjects.length === 0 ? (
                    <p className="text-xs text-slate-400 italic">No specific tagged projects.</p>
                  ) : (
                    relatedProjects.map((proj) => (
                      <div
                        key={proj.id}
                        onClick={() => onSelectProjectById(proj.id)}
                        className="group p-3 rounded-xl bg-white/[0.03] hover:bg-teal-900/30 border border-teal-500/15 hover:border-teal-400/40 transition-all cursor-pointer flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-teal-300 transition-colors">
                            {proj.title}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {proj.category === 'professional' ? 'Professional' : 'Personal Lab'} &bull; {proj.year}
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                          View &rarr;
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
