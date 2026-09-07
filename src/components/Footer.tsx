import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-teal-500/20 bg-[#040b10] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center p-[1px]">
            <div className="w-full h-full bg-[#06141a] rounded-[7px] flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold text-teal-300">&lt;HC/&gt;</span>
            </div>
          </div>
          <div>
            <div className="font-bold text-white text-sm">Richard Craven &bull; hierocode</div>
            <div className="text-[11px] text-slate-400 font-mono">Distributed Systems &bull; Cloud Infrastructure &bull; Web Engineering</div>
          </div>
        </div>

        {/* Quick links */}
        <div className="flex items-center gap-6 font-mono text-xs">
          <a href="#about" className="hover:text-teal-300 transition-colors">About</a>
          <a href="#tree" className="hover:text-teal-300 transition-colors">Skill Tree</a>
          <a href="#projects" className="hover:text-teal-300 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-teal-300 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-teal-300 transition-colors">Contact</a>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/richardcraven"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/richardcraven"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-teal-600/20 hover:bg-teal-600/40 text-teal-300 border border-teal-500/30 transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-teal-500/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-slate-400 font-mono">
        <div>
          &copy; {new Date().getFullYear()} Richard Craven. All rights reserved. (hierocode)
        </div>
        <div className="flex items-center gap-1">
          <span>Designed with high-concurrency precision</span>
        </div>
      </div>
    </footer>
  );
};
