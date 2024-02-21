/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto": ["Roboto, sans-serif"],
        "Roboto Mono": ["Roboto Mono, monospace"],
      },
      colors: {
        'blue':'#6290C3',
        'dark-blue':'#1A1B41',
        'light-blue':'#C2E7DA',
        'beige':'#F1FFE7',
        'lime': '#BAFF29'
      }
    },
  },
  plugins: [],
}