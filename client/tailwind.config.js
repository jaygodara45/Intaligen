
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
       fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors:{
        'custom-green': '#537e7c',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};