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
      white: "#F7FAFC",
      black: "#2D3748",
    },
    extend: {
      fontFamily: {
        playfair: ["Playfair Display"],
        shrikhand: ["Shrikhand"],
      },
      backgroundImage: {
        "background-cake": "url('../src/images/bg.jpg')",
      },
    },
  },
  plugins: [],
};
