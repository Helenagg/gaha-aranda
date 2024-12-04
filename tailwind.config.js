/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0e76b3',
        secondary: '#213365'
      },
      fontFamily: {
        sans: ['sans-serif'],
      },
    },
  },
  plugins: [],
};
