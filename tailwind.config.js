/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}