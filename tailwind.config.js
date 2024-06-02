/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ['"Poppins"', ...defaultTheme.fontFamily.sans-serif],
      },
      colors: {
        'primary-color': '#F63E7B',
        'secondary-color': '#FFF8F5',
        'text-color': '#1F1632',
        'text-gray': '#707070',
      },
    },
  },
  plugins: [],
}

