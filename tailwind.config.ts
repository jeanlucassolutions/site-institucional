import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          50: '#f0f4f9',
          100: '#d9e2f0',
          200: '#b3c6e0',
          300: '#8caad1',
          400: '#658ec2',
          500: '#3e72b3',
          600: '#1e3a5f',
          700: '#0f1e2e',
          800: '#0a1419',
          900: '#050a0e',
        },
        'electric': {
          50: '#fffbf0',
          100: '#fef6e0',
          200: '#feeac0',
          300: '#fdd891',
          400: '#fcc65f',
          500: '#f9b233',
          600: '#e59500',
          700: '#c17d00',
          800: '#9d6300',
          900: '#7e4d00',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'sm-light': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'md-light': '0 4px 6px -1px rgba(15, 23, 42, 0.1)',
        'lg-light': '0 10px 15px -3px rgba(15, 23, 42, 0.1)',
        'xl-light': '0 20px 25px -5px rgba(15, 23, 42, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
