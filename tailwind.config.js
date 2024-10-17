module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#B88E2F",
        mainColorHover: "#B88A4F",
        pinkShade: "#FFF3E3"
      },
      backgroundImage: {
        'hero-img': "url('/images/heroBg.png')",
        'page-route-img': "url('/images/pageRouteBg.jpg')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};