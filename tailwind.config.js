/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Rubik"],
        body: ["Source Sans"],
      },
    },
  },
  plugins: [],
};
