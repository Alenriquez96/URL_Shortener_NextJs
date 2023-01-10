const { bgcolor } = require('@mui/system');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ["'Roboto'", 'sans-serif']
      },
      backgroundImage: {
        'cool-bg': "url('/cool-background.png')",
        "bg-paralaxImg": "url('/bg.webp')"
      },
      backgroundSize:{
        paralax:"180%"
      },
      transitionDuration:{
        paralax: "500ms"
      },
      backgroundPosition:{
        paralaxPosition: "center"
      }
    },
  },
  plugins: [],
}