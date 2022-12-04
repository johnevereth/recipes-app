/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      melon: "#FFB5A7",
      "pale-pink": "#FCD5CE",
      seashell: "#F8EDEB",
      "peach-puff": "#F9DCC4",
      "peach-crayola": "#FEC89A",
    },
    extend: {
      fontFamily: {
        playfair: ["Playfair Display"],
        shrikhand: ["Shrikhand"],
      },
    },
  },
  plugins: [],
};
