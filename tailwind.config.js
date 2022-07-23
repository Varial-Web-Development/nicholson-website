/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nicholson-green': {
          500: '#8AECC8',
        },
        'nicholson-blue': {
          400: '#81A6E4',
          500: '#4B7BCB',
        }
      },
    },
  },
  plugins: [],
}
