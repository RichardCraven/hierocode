import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X, GitFork, Sparkles } from 'lucide-react';

interface NavbarProps {
  onSelectTree?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectTree }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Project Tree', href: '#tree', highlight: true },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060e14]/90 backdrop-blur-xl border-b border-teal-500/20 shadow-lg shadow-teal-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center p-[2px] shadow-glow-sm group-hover:shadow-glow transition-all">
            <div className="w-full h-full bg-[#08151c] rounded-[10px] flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                &lt;HC/&gt;
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white group-hover:text-teal-300 transition-colors flex items-center gap-2">
              Richard Craven
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-teal-500/20 border border-teal-500/30 text-teal-300">
                hierocode
              </span>
            </span>
            <span className="text-[11px] text-slate-400 font-mono">hierocode Architecture</span>
          </div>
        </a>

        {/* Center Nav Links - Pill Container */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0a1820]/80 border border-teal-500/20 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={link.href === '#tree' ? onSelectTree : undefined}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                link.highlight
                  ? 'text-teal-100 bg-teal-600/25 hover:bg-teal-600/40 border border-teal-400/40 shadow-sm shadow-teal-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {link.highlight && <GitFork className="w-3 h-3 text-teal-400 animate-pulse" />}
              {link.label}
              {link.highlight && (
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              )}
            </a>
          ))}
        </nav>

        {/* Right CTA & Social Icons */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1.5 border-r border-teal-500/20 pr-3">
            <a
              href="https://github.com/RichardCraven"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-teal-300 hover:bg-teal-500/10 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/richard-craven-082a0816/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-teal-300 hover:bg-teal-500/10 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <a
            href="#contact"
            className="px-4 py-2 rounded-full text-xs font-mono font-medium text-slate-300 hover:text-teal-300 border border-teal-500/30 hover:border-teal-400 hover:bg-teal-500/10 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            Contact Me
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-teal-950/40 border border-teal-500/30 text-teal-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07131a]/95 border-b border-teal-500/30 backdrop-blur-2xl px-6 py-5 mt-3 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between ${
                  link.highlight
                    ? 'bg-teal-600/25 text-teal-200 border border-teal-500/40'
                    : 'text-slate-300 hover:bg-white/[0.05]'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.highlight && <GitFork className="w-4 h-4 text-teal-400" />}
                  {link.label}
                </span>
                {link.highlight && (
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-teal-500/30 text-teal-300">
                    Interactive
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-4 mt-4 border-t border-teal-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/RichardCraven"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/[0.05] text-slate-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/richard-craven-082a0816/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/[0.05] text-slate-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-full text-xs font-mono font-medium text-slate-300 hover:text-teal-300 border border-teal-500/30 hover:border-teal-400 hover:bg-teal-500/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
