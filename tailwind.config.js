/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {
      colors: {
        'primary': "#0d9488",
        'secondary': "#b98cc6",
        'tertiary': "#dcc1e5",
        'quaternary': "#11b880",
        'quinternary': "#b39c9a",
        'white': "#fff",
        'black': "#000"
      },
      backgroundImage: {
        'leaves' : "url('img/foglie.jpg')"
      }
    },
  },
  plugins: [],
}

