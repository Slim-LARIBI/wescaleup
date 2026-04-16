import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563EB',
          'blue-dark': '#1D4ED8',
          'blue-deeper': '#1E3A8A',
          'blue-light': '#EFF6FF',
          'blue-mid': '#BFDBFE',
          orange: '#EA580C',
          'orange-dark': '#C2410C',
          'orange-light': '#FFF7ED',
          'orange-mid': '#FED7AA',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          warm: '#FAFAF8',
          muted: '#F3F2EE',
          border: '#E8E7E1',
          'border-mid': '#D1CFC6',
        },
        ink: {
          DEFAULT: '#0C0C14',
          secondary: '#374151',
          muted: '#6B7280',
          light: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.04), 0 4px 16px 0 rgba(0,0,0,0.06)',
        'card-hover': '0 4px 6px 0 rgba(0,0,0,0.04), 0 12px 40px 0 rgba(0,0,0,0.10)',
        'nav': '0 1px 0 0 rgba(0,0,0,0.06)',
        'button': '0 1px 2px 0 rgba(37,99,235,0.20), 0 4px 16px 0 rgba(37,99,235,0.18)',
        'button-hover': '0 2px 4px 0 rgba(37,99,235,0.25), 0 8px 28px 0 rgba(37,99,235,0.25)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
        'gradient-warm': 'linear-gradient(135deg, #EA580C 0%, #F59E0B 100%)',
        'gradient-hero': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.08) 0%, transparent 70%)',
        'gradient-orb-blue': 'radial-gradient(circle, rgba(191,219,254,0.7) 0%, transparent 70%)',
        'gradient-orb-orange': 'radial-gradient(circle, rgba(253,186,116,0.5) 0%, transparent 70%)',
        'gradient-orb-violet': 'radial-gradient(circle, rgba(196,181,253,0.5) 0%, transparent 70%)',
        'gradient-cta': 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 40%, #4338CA 100%)',
        'dot-pattern': 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-sm': '24px 24px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.21, 0.47, 0.32, 0.98)',
      },
    },
  },
  plugins: [],
}

export default config
