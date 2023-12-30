/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
