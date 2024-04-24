/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#52FF00",
        darkPurple: "#832DBF",
        lightPurple: "#B190B6",
        darkGrey: "#1A161C",
        lightGrey: "#808080",
      },
    },
    // fontFamily: {
    //   sans: ["Inter"],
    // },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      laptop: "1070px",
      desktop: "1280px",
      xl: "1450px",
    },
  },
  plugins: [],
};
