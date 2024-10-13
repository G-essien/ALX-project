/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: ['lexend', 'sans-serif'],
      serif: ['Roboto','sans-serif'],
    },
    extend: {
      backgroundImage: {
        'header-image': "url('./src/images/backgroundImage.png')",
      }
    },
  },
  plugins: [],
}

