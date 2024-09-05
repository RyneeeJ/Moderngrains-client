/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "840px",
    },

    extend: {
      colors: {
        footerDarkFont: "#e0ccb8",
      },
    },
  },
  plugins: [],
};
