/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/app.vue", "./src/components/AppAlert.vue"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
