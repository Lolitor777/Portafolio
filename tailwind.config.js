/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      blue: '#3498db',
      gray: '#2c3e50',
      green: '#2ecc71',
      yellow: '#f1c40f',
      white: '#fff',
      black: '#000'
    },
    fontFamily: {
      titillium: [ "Titillium Web", 'sans-serif' ],
      robotoSlab: [ "Roboto Slab", 'serif' ] 
    },
    extend: {},
  },
  plugins: [],
}

