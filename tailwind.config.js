/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#fbf7ef',
        ivory: '#fffdf8',
        cocoa: '#412d27',
        rosewood: '#8b3f42',
        pistachio: '#7d916a',
        gold: '#c59b5b',
        ink: '#201816',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(65, 45, 39, 0.12)',
        glow: '0 18px 50px rgba(197, 155, 91, 0.28)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s ease forwards',
      },
    },
  },
  plugins: [],
};
