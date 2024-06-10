/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-violet": "#A729F5",
        "bright-violet-hover": "#F6E7FF",
        "midnight-blue": "#313E51",
        "steel-blue": "#3B4D66",
        "slate-gray": "#626C7F",
        "pale-cornflower-blue": "#ABC1E1",
        "ghost-white": "#F4F6FA",
        "pure-white": "#FFFFFF",
        "mint-green": "#26D782",
        "rose-red": "#EE5454",
      },
      backgroundColor: {
        "button-gradient": "#FFFFFF, #A729F5",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
