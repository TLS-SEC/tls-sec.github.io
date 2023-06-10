/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_layouts/*.html", "./_posts/*.md", "./*.md"],
  theme: {
    extend: {
      fontFamily: {
        russoOne: ["Russo One", "sans-serif"],
      },
      backgroundImage: {
        mainGradient: "url(/assets/img/bg.svg)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
