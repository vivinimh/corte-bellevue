/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'eb-garamond': ['EB Garamond', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        'slide-in-left': {
          '0%': {
            transform: 'translateX(100%) scale(0.8)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0) scale(1)',
            opacity: '1',
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(-100%) scale(0.8)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0) scale(1)',
            opacity: '1',
          },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-right': 'slide-in-right 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
