/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#1C0818",
          secondary: "#D3D3D3",
          tertiary: "#3B3B58",
          "black-100": "#3B3B58",
          "black-200": "#090325",
          "white-100": "#f3f3f3",
          "mine":"#2B2B44"
        },
        boxShadow: {
          card: "0px 35px 120px -15px #915EFF",
        },
        screens: {
          xs: "450px",
        },
        backgroundImage: {
          "hero-pattern": "url('/src/assets/purple.jpg')",
        },
      },
    },
    plugins: [],
  };
  // fbd3c4