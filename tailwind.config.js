/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fontColor: "#888",
        BackgroundColor: "#f3f3f3",
        textColor: "#666",
        summaryValueIn: "#66c873",
        summaryValueOut: "#f5465d",
        fontColor2: "#333",
        bgColor1: "rgba(255, 255, 255, 0.4)",
        bgColor2: "rgba(255, 255, 255, 0.6)",
        bgColor3: "rgba(255, 255, 255, 0.8)",
      },

      borderRadius: {
        rem: "10rem",
      },
    },
  },
  plugins: [],
};
