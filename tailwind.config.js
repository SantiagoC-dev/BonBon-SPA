/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bonbon-pale': '#eedcff',
        'bonbon-mid': '#b892d1',
        'bonbon-main': '#8a64a3',
        'bonbon-dark': '#3a1c42',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}