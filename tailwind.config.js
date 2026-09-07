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
          bg: '#050d12',
          bgAlt: '#08141b',
          surface: '#0c1b24',
          card: '#10222d',
          cardBorder: 'rgba(20, 184, 166, 0.22)',
          accent: '#14b8a6',
          accentLight: '#2dd4bf',
          accentDark: '#0f766e',
          teal: '#14b8a6',
          cyan: '#06b6d4',
          cyanLight: '#22d3ee',
          mint: '#00f0b5',
          emerald: '#10b981',
          emeraldLight: '#34d399',
          textMuted: '#94a3b8',
          textDim: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(20, 184, 166, 0.25)',
        'glow': '0 0 25px rgba(20, 184, 166, 0.35)',
        'glow-lg': '0 0 40px rgba(20, 184, 166, 0.45)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.35)',
        'glow-mint': '0 0 25px rgba(0, 240, 181, 0.35)',
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
