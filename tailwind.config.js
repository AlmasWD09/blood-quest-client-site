/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#0055d2',
        // 'primary':'#d97706',
      }
    },
  },
  plugins: [],
}
