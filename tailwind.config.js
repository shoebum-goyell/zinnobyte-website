/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#dbe4f2',
          200: '#b9cce5',
          300: '#8faad3',
          400: '#6484bd',
          500: '#4F6FA3',
          600: '#3d5a89',
          700: '#0A1A33', // primary dark blue
          800: '#091429',
          900: '#060e1f',
        },
        blue: {
          accent: '#4F90F2',
        },
        success: {
          100: '#dcf5e7',
          500: '#22c55e',
          700: '#15803d',
        },
        warning: {
          100: '#fef5e7',
          500: '#f59e0b',
          700: '#b45309',
        },
        error: {
          100: '#fee2e2',
          500: '#ef4444',
          700: '#b91c1c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};