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
        'theme-1': '#00A6FB', 
        'theme-2': '#0582CA', 
        'theme-3': '#006494',
        'theme-4' :'#003554',
        'theme-5':'#051923'
    },

    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

