import React from 'react';

export const BackgroundContour: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Topographic Contour SVG Pattern (Screenshot 1 visual aesthetic with Teal tint) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08] stroke-teal-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 1200"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M-100,200 C300,100 500,450 900,300 C1300,150 1500,400 1800,250" strokeWidth="1.5" />
        <path d="M-100,320 C320,240 520,560 920,440 C1320,320 1520,520 1800,400" strokeWidth="1.5" />
        <path d="M-100,460 C340,400 540,700 950,580 C1360,460 1540,650 1800,560" strokeWidth="1.5" />
        <path d="M-100,600 C360,550 560,840 980,720 C1380,600 1560,780 1800,720" strokeWidth="1.5" />
        <path d="M-100,740 C380,700 580,980 1000,860 C1400,740 1580,920 1800,880" strokeWidth="1.5" />
        <path d="M-100,880 C400,850 600,1120 1020,1000 C1420,880 1600,1060 1800,1040" strokeWidth="1.5" />
        
        {/* Subtle high-tech grid points */}
        <pattern id="dotGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(20, 184, 166, 0.25)" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dotGrid)" />
      </svg>

      {/* Deep Teal, Cyan & Emerald Glowing Radial Mesh */}
      <div className="absolute -top-40 left-1/4 w-[650px] h-[650px] bg-teal-600/15 rounded-full blur-[140px] pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[160px] pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 left-10 w-[700px] h-[700px] bg-teal-950/40 rounded-full blur-[180px]" />
      <div className="absolute top-2/3 left-1/3 w-[500px] h-[500px] bg-emerald-600/12 rounded-full blur-[150px]" />

      {/* Subtle organic light lines */}
      <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
    </div>
  );
};
