/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B032D",
        navyLight: "#1C1440",
        splashBlue: "#00C2FF",
        splashPink: "#FF5CAC",
        splashOrange: "#FF9A00",
        splashOrangeLight: "#FFB347",
      },
    },
  },
  plugins: [],
};
