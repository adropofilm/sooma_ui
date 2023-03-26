module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        midnight: "#1B1C37",
        periwinkle: "#7579FF",
        elephant: "#7579FF",
        purple: "#B224EF",
      },
      screens: {
        xs: "320px",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
