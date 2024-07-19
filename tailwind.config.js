/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#214583',
        secondary: '#32BAD7',
        'sky-100': '#BEEAF1',
        'sky-200': '#32BCDB',
        'sky-300': '#2DBCDA',
        blue: '#224676',
      }
    },
  },
  plugins: [],
}

