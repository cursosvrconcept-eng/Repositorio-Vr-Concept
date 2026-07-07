/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#1a1a1a',
          gold: '#c9a661',
          goldLight: '#dec18b',
          goldDark: '#a0834a',
          darkGray: '#121212',
          charcoal: '#242424'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(26,26,26,0.9), rgba(18,18,18,1))',
      }
    }
  },
  plugins: [],
}