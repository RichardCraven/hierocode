/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        craven: {
          bg: '#080511',
          bgAlt: '#0d091b',
          surface: '#120c24',
          card: '#16102c',
          cardBorder: 'rgba(168, 85, 247, 0.22)',
          accent: '#a855f7',
          accentLight: '#c084fc',
          accentDark: '#7e22ce',
          pink: '#ec4899',
          fuchsia: '#d946ef',
          cyan: '#06b6d4',
          teal: '#14b8a6',
          neonMint: '#00f0b5',
          textMuted: '#94a3b8',
          textDim: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(168, 85, 247, 0.25)',
        'glow': '0 0 25px rgba(168, 85, 247, 0.35)',
        'glow-lg': '0 0 40px rgba(168, 85, 247, 0.45)',
        'glow-pink': '0 0 25px rgba(236, 72, 153, 0.35)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.35)',
        'card-elevated': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flow-line': 'flowLine 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        flowLine: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}
