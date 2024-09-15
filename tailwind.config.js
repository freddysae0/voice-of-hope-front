/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#0081A7",
      secondary: "#F7D770",
      secondaryLight: "#FDFCDC",
      orange: "#FFC74A",
      metal: "#F5F5F5",
      crayonYellow: "#FFA95A",
      crayonRed: "#F07167",
    },
  },
  plugins: [],
};
