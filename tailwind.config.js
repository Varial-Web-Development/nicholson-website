/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      'sm': '0 1px 3px rgb(0 0 0 / 0.15)',
      DEFAULT: '0 2px 4px rgb(0 0 0 / 0.15)',
      'md': '0 3px 6px rgb(0 0 0 / 0.2)',
      'lg': '0 4px 8px rgb(0 0 0 / 0.25)',
    },
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
