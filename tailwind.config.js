/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Rubik"],
        body: ["Source Sans"],
      },
      colors: {
        hiddenAbility: "#f2f4f9",
        hiddenAbilityBorder: "#9d5856",
        ability: "#f8fafd",
        abilityBorder: "#b9b9d6",
      },
    },
  },
  plugins: [],
};
