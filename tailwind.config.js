/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'text': '#dde0ee',
      'background': {
        300: '#06080f',
        200: '#0D1126',
        100: '#232638',
      },
      'primary': '#94a0da',
      'secondary': '#253581',
      'accent': '#536ad7',
    },
    fontFamily: {
      'sans': ['Chakra Petch', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

