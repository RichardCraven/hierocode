import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail, Menu, X, GitFork, Sparkles } from 'lucide-react';

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
          ? 'bg-[#0a0715]/85 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-purple-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#about" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-[2px] shadow-glow-sm group-hover:shadow-glow transition-all">
            <div className="w-full h-full bg-[#0d091b] rounded-[10px] flex items-center justify-center">
              <span className="font-mono text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                &lt;CT/&gt;
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white group-hover:text-purple-300 transition-colors flex items-center gap-2">
              Richard Craven
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-purple-500/20 border border-purple-500/30 text-purple-300">
                v2.0
              </span>
            </span>
            <span className="text-[11px] text-slate-400 font-mono">CravenTech Architecture</span>
          </div>
        </a>

        {/* Center Nav Links - Pill Container (Screenshot 2 style) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#130d28]/70 border border-purple-500/20 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={link.href === '#tree' ? onSelectTree : undefined}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                link.highlight
                  ? 'text-purple-200 bg-purple-600/20 hover:bg-purple-600/35 border border-purple-400/30 shadow-sm shadow-purple-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {link.highlight && <GitFork className="w-3 h-3 text-purple-400 animate-pulse" />}
              {link.label}
              {link.highlight && (
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              )}
            </a>
          ))}
        </nav>

        {/* Right CTA & Social Icons */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1.5 border-r border-purple-500/20 pr-3">
            <a
              href="https://github.com/richardcraven"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-purple-300 hover:bg-purple-500/10 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/richardcraven"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-purple-300 hover:bg-purple-500/10 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <a
            href="#contact"
            className="relative group px-4 py-2 rounded-full text-xs font-semibold text-white overflow-hidden shadow-glow-sm hover:shadow-glow transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Contact Me
            </span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0a1f]/95 border-b border-purple-500/30 backdrop-blur-2xl px-6 py-5 mt-3 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between ${
                  link.highlight
                    ? 'bg-purple-600/20 text-purple-200 border border-purple-500/30'
                    : 'text-slate-300 hover:bg-white/[0.05]'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.highlight && <GitFork className="w-4 h-4 text-purple-400" />}
                  {link.label}
                </span>
                {link.highlight && (
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-purple-500/30 text-purple-300">
                    Interactive
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-4 mt-4 border-t border-purple-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/richardcraven"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/[0.05] text-slate-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/richardcraven"
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
              className="px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
