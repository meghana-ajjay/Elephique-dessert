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
        cream: '#fbf6f2',
        ivory: '#fffdf9',
        blush: '#f5e3e2',
        rose: '#a85662',
        rosewood: '#8c4450',
        cocoa: '#4a302d',
        pistachio: '#849476',
        gold: '#c69a5f',
        ink: '#231918',
      },
      boxShadow: {
        soft: '0 22px 70px rgba(74, 48, 45, 0.12)',
        glow: '0 16px 45px rgba(198, 154, 95, 0.28)',
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
