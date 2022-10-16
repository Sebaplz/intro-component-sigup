/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
