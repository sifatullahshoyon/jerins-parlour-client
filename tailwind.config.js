/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Poppins": ['"Poppins"', "sans-serif"],
      },
      colors: {
        'primary-color': '#F63E7B',
        'secondary-color': '#FFF8F5',
        'text-color': '#1F1632',
        'text-gray': '#707070',
        'text-primary': '#666666',
        'text-dark' : '#000000'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}
