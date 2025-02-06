/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter400: ['Roboto','serif'],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },

      colors: { 
        'theme-1': '#DFF2EB', 
        'theme-2': '#B9E5E8', 
        'theme-3': '#7AB2D3',
        'theme-4' :'#4A628A',
        'theme-5':'#051923'
    },

    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

