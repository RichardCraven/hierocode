import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Github, 
  Layers, 
  Briefcase, 
  FlaskConical, 
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { Project, ProjectCategory, ProjectDomain } from '../types/portfolio';

interface ProjectsShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedDomain, setSelectedDomain] = useState<ProjectDomain>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered list
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      // Category filter
      if (selectedCategory !== 'all' && proj.category !== selectedCategory) {
        return false;
      }
      // Domain filter
      if (selectedDomain !== 'all' && proj.domain !== selectedDomain) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = proj.title.toLowerCase().includes(query);
        const matchesDesc = proj.shortDescription.toLowerCase().includes(query);
        const matchesTech = proj.techStack.some(t => t.toLowerCase().includes(query));
        const matchesRole = proj.role.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesTech && !matchesRole) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedDomain, searchQuery]);

  const domainOptions: { id: ProjectDomain; label: string }[] = [
    { id: 'all', label: 'All Domains' },
    { id: 'fintech', label: 'Fintech & Brokerage' },
    { id: 'ai-ml', label: 'AI & Computer Vision' },
    { id: 'fullstack-web', label: 'Full-Stack & Cloud' },
    { id: 'gaming-graphics', label: 'Gaming & WebGL' },
    { id: 'developer-tools', label: 'Developer Tools' },
  ];

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-900/30 border border-teal-500/30 text-teal-300 font-mono text-xs mb-3">
              <Layers className="w-3.5 h-3.5 text-teal-400" />
              <span>COMPREHENSIVE PROJECT MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Personal &amp; Professional Projects
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
              A reference catalog of enterprise brokerage platforms, fintech marketplaces, computer vision systems, and interactive web applications.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-[#091b24] border border-teal-500/30 text-teal-300">
              Showing <span className="font-bold text-white">{filteredProjects.length}</span> of {PROJECTS.length} Systems
            </span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-[#081822]/85 border border-teal-500/20 rounded-2xl p-4 sm:p-5 backdrop-blur-xl mb-10 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Category Switcher Tabs */}
            <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-teal-600 text-white shadow-glow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                All Projects ({PROJECTS.length})
              </button>

              <button
                onClick={() => setSelectedCategory('professional')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                  selectedCategory === 'professional'
                    ? 'bg-teal-600 text-white shadow-glow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-teal-300" />
                Professional Work ({PROJECTS.filter(p => p.category === 'professional').length})
              </button>

              <button
                onClick={() => setSelectedCategory('personal')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all ${
                  selectedCategory === 'personal'
                    ? 'bg-cyan-600 text-white shadow-glow-cyan'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <FlaskConical className="w-3.5 h-3.5 text-cyan-300" />
                Personal Labs ({PROJECTS.filter(p => p.category === 'personal').length})
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-teal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tech, system, role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#0d222c] border border-teal-500/30 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50 transition-all font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  &times;
                </button>
              )}
            </div>

          </div>

          {/* Domain Tags row */}
          <div className="mt-4 pt-3 border-t border-teal-500/15 flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-[11px] font-mono text-slate-400 shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3 text-teal-400" />
              Domain:
            </span>
            {domainOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedDomain(opt.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors whitespace-nowrap ${
                  selectedDomain === opt.id
                    ? 'bg-teal-500/25 text-teal-200 border border-teal-400/50 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 bg-white/[0.02]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-[#091b24]/60 border border-teal-500/20">
            <p className="text-slate-400 text-sm">No projects matched your criteria.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSelectedDomain('all'); setSearchQuery(''); }}
              className="mt-3 px-4 py-2 rounded-xl bg-teal-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-[#081822]/85 border border-teal-500/20 hover:border-teal-400/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-card-elevated hover:shadow-teal-950/40 backdrop-blur-xl"
              >
                {/* Top Header info */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full border ${
                      project.category === 'professional'
                        ? 'bg-teal-900/30 text-teal-300 border-teal-500/30'
                        : 'bg-cyan-900/30 text-cyan-300 border-cyan-500/30'
                    }`}>
                      {project.category === 'professional' ? 'Professional' : 'Personal Lab'}
                    </span>

                    <span className="text-[11px] font-mono text-slate-400">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <div className="text-xs text-teal-400 font-mono mt-1">
                    {project.role}
                  </div>

                  <p className="text-xs text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Metrics ribbon */}
                <div className="mt-5 pt-4 border-t border-teal-500/15">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-[#0b212b] border border-teal-500/15">
                        <div className="text-[10px] text-slate-400 font-mono truncate">{m.label}</div>
                        <div className="text-xs font-bold text-teal-200 font-mono">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded text-slate-400">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action CTA */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex-1 py-2 rounded-xl text-xs font-semibold text-teal-200 bg-teal-950/50 hover:bg-teal-600 hover:text-white border border-teal-500/30 transition-all flex items-center justify-center gap-1.5 group/btn"
                    >
                      <span>Inspect System</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] transition-colors"
                        title="Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
