/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flex: {
        '2/3': '2 2 66.666667%',
        '1/3': '1 1 33.333333%',
      },
      colors: {
        antracit: '#2e2e2e',
      },
      animation: {
        slideServiceLeft: 'slideServiceLeft 0.6s cubic-bezier(.4,2,.6,1) both',
        slideServiceRight: 'slideServiceRight 0.6s cubic-bezier(.4,2,.6,1) both',
      },
      keyframes: {
        slideServiceLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px) scale(.98)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        slideServiceRight: {
          '0%': { opacity: '0', transform: 'translateX(60px) scale(.98)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
