/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'primary': '#78c043',
        'secondary': '#a6e72a'
      },
    },
  },
  plugins: [],
}