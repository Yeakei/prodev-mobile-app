/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust paths as needed
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Custom primary color
        secondary: '#64748B', // Custom secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font family
      },
    },
  },
  plugins: [],
}
