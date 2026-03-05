import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1260px',
      },
    },
    extend: {
      fontSize: {
        'clamp-hero': 'clamp(1.8rem, 8vw, 4.5rem)',
      },
      fontFamily: {
        body: ['"Share Tech Mono"', 'monospace'],
        headline: ['Orbitron', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        'custom-green': 'var(--green)',
        'custom-green-dim': 'var(--green-dim)',
        'custom-text': 'var(--text)',
        'custom-text-dim': 'var(--text-dim)',
        'custom-red': 'var(--red)',
        'custom-cyan': 'var(--cyan)',
        'custom-yellow': 'var(--yellow)',
        'custom-border': 'var(--border-color)',
        'custom-border-bright': 'var(--border-bright)',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: `calc(var(--radius) - 4px)`,
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        ticker: {
          from: { transform: 'translateX(100vw)' },
          to: { transform: 'translateX(-100%)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
        glitch: {
          '0%, 89%, 100%': {
            textShadow:
              '0 0 20px var(--green), 0 0 40px rgba(0,255,65,0.4)',
            clipPath: 'none',
          },
          '90%': {
            textShadow: '-3px 0 var(--red), 3px 0 var(--cyan)',
            clipPath: 'inset(10% 0 80% 0)',
          },
          '91%': {
            textShadow: '0 0 20px var(--green)',
            clipPath: 'inset(60% 0 20% 0)',
          },
          '92%': {
            textShadow: '3px 0 var(--red), -3px 0 var(--cyan)',
            clipPath: 'inset(40% 0 50% 0)',
          },
          '93%': {
            textShadow:
              '0 0 20px var(--green), 0 0 40px rgba(0,255,65,0.4)',
            clipPath: 'none',
          },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        asciifade: {
          from: { opacity: '0.6' },
          to: { opacity: '1' },
        },
        scanflicker: {
          '0%, 97%, 100%': { opacity: '1' },
          '98%': { opacity: '0.85' },
          '99%': { opacity: '0.95' },
        },
        flicker: {
          '0%,19%,21%,23%,25%,54%,56%,100%': { opacity: '1' },
          '20%,24%,55%': { opacity: '0.6' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        ticker: 'ticker 30s linear infinite',
        pulse: 'pulse 1.5s ease-in-out infinite',
        glitch: 'glitch 6s ease-in-out infinite',
        blink: 'blink 0.8s step-end infinite',
        asciifade: 'asciifade 4s ease-in-out infinite alternate',
        scanflicker: 'scanflicker 8s linear infinite',
        flicker: 'flicker 6s linear infinite',
      },
      boxShadow: {
        green: '0 0 15px var(--green), 0 0 30px rgba(0,255,65,0.4)',
        'green-sm': '0 0 8px var(--green)',
        'green-glow': '0 0 6px var(--green)',
        'cyan-glow': '0 0 8px var(--cyan)',
      },
      textShadow: {
        green: '0 0 15px var(--green), 0 0 30px rgba(0,255,65,0.4)',
        'green-sm': '0 0 8px var(--green)',
        'green-glow': '0 0 6px var(--green)',
        cyan: '0 0 8px var(--cyan)',
        'red-glow': '0 0 15px var(--red)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities, theme }: any) {
      const newUtilities = {
        '.text-shadow': {
          textShadow:
            '0 0 15px var(--green), 0 0 30px rgba(0,255,65,0.4)',
        },
        '.text-shadow-sm': {
          textShadow: '0 0 8px var(--green)',
        },
        '.text-shadow-glow': {
          textShadow: '0 0 6px var(--green)',
        },
        '.text-shadow-cyan': {
          textShadow: '0 0 8px var(--cyan)',
        },
        '.text-shadow-red': {
          textShadow: '0 0 15px var(--red)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
} satisfies Config;
