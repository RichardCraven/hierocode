import React, { useState } from 'react';
import { BackgroundContour } from './components/BackgroundContour';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ConnectingTree } from './components/ConnectingTree';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsRadar } from './components/SkillsRadar';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types/portfolio';
import { PROJECTS } from './data/projects';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleOpenProjectById = (projectId: string) => {
    const proj = PROJECTS.find(p => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  const handleScrollToTree = () => {
    const el = document.getElementById('tree');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050d12] text-slate-100 overflow-x-hidden selection:bg-teal-500/30 selection:text-teal-200">
      {/* Background Graphic & Ambient Glow Layers */}
      <BackgroundContour />

      {/* Navigation Header */}
      <Navbar onSelectTree={handleScrollToTree} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          onExploreTree={handleScrollToTree}
          onExploreProjects={handleScrollToProjects}
        />

        {/* The Star Visual: Interactive Project & Skill Tree with Connecting Lines */}
        <ConnectingTree onSelectProject={handleOpenProjectModal} />

        {/* Comprehensive Project Catalog Matrix */}
        <ProjectsShowcase onSelectProject={handleOpenProjectModal} />

        {/* Career Timeline & Success Stories */}
        <ExperienceTimeline />

        {/* Technical Proficiencies & Skills Radar */}
        <SkillsRadar onSelectProjectById={handleOpenProjectById} />

        {/* Interactive Contact & Transmission Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
