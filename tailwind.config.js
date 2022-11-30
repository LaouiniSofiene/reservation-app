/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors : {
        'header' : "rgba(248, 238, 232, 0.19)",
        'card' : "rgba(255, 255, 255, 0.35)"
      }
    },
  },
  plugins: [],
}
