/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'kathEmerald': '#01c38e',
        'kathBlue': '#132d46',
      },
    },
  },
  plugins: [],
}

