import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Github, 
  Linkedin, 
  MapPin, 
  Clock, 
  Copy, 
  Check,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectScope: 'Architectural Leadership',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger celebratory confetti burst with teal & cyan colors
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#14b8a6', '#06b6d4', '#10b981', '#2dd4bf', '#00f0b5']
      });
    } catch (err) {
      // ignore
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('richard@hierocode.dev');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-teal-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inquiries & Status */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-900/30 border border-teal-500/30 text-teal-300 font-mono text-xs">
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>LET'S CONNECT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Let's Build Something Extraordinary.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you are architecting a high-throughput distributed system, scaling a multi-cluster Kubernetes platform, or seeking technical leadership — my inbox is open.
            </p>

            {/* Availability Status Card */}
            <div className="p-5 rounded-2xl bg-[#081822]/80 border border-teal-500/25 backdrop-blur-xl">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Availability Status
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-2">
                Currently open for Principal / Lead Engineering roles, executive architectural consulting, and high-impact advisory contracts.
              </p>
              <div className="mt-3 flex items-center gap-4 text-xs font-mono text-teal-300">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  San Francisco, CA / Remote
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  PST / UTC-8
                </span>
              </div>
            </div>

            {/* Direct Email Clipboard Tile */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-teal-500/20 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-slate-400 font-mono">DIRECT TRANSMISSION</div>
                <div className="text-sm font-bold text-white font-mono mt-0.5">richard@hierocode.dev</div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-xl bg-teal-600/20 hover:bg-teal-600/40 text-teal-300 border border-teal-400/30 text-xs font-mono flex items-center gap-1.5 transition-all"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Social & Resume Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/richardcraven"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-teal-500/20 flex items-center gap-2 text-xs font-semibold transition-all"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/richardcraven"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-teal-500/20 flex items-center gap-2 text-xs font-semibold transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>

              <button
                onClick={() => alert('Placeholder: Resume PDF download will trigger here.')}
                className="p-3 rounded-xl bg-teal-950/40 hover:bg-teal-900/50 text-teal-200 border border-teal-500/30 flex items-center gap-2 text-xs font-semibold transition-all"
              >
                <FileText className="w-4 h-4 text-teal-400" />
                Download CV
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Transmission Terminal Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#081822]/90 border border-teal-500/30 shadow-card-elevated backdrop-blur-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-teal-500/20 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                  <span className="text-xs font-mono text-slate-400 ml-2">hierocode-transmission://secure</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300">
                  AES-256 Mock Encrypted
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-400 via-cyan-400 to-emerald-400 mx-auto flex items-center justify-center shadow-glow">
                    <CheckCircle2 className="w-8 h-8 text-slate-950" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Transmission Dispatched!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-teal-300 font-semibold">{formData.name}</span>. Your message has been logged to the queue. I typically respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', projectScope: 'Architectural Leadership', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-xs font-bold text-white transition-all shadow-glow-sm"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name <span className="text-teal-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0c222c] border border-teal-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50 transition-all font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Work Email <span className="text-teal-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0c222c] border border-teal-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50 transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Scope / Area of Interest
                    </label>
                    <select
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0c222c] border border-teal-500/25 text-white text-xs focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50 transition-all font-mono"
                    >
                      <option value="Architectural Leadership">Lead / Staff Engineering Role</option>
                      <option value="Consulting & Advisory">Cloud / Systems Architecture Consulting</option>
                      <option value="Performance Optimization">Throughput &amp; Latency Optimization</option>
                      <option value="AI & Autonomous Agents">Autonomous Agent / R&amp;D Project</option>
                      <option value="General Inquiries">Other Exploration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message / Project Brief <span className="text-teal-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a brief overview of your team's objectives, timeline, or engineering challenges..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0c222c] border border-teal-500/25 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/50 transition-all font-mono leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 hover:opacity-95 shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Transmit Message to Richard</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
