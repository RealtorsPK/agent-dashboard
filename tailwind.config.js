// eslint-disable-next-line node/no-unpublished-require
// const plugin = require('tailwindcss/plugin')
// eslint-disable-next-line node/no-unpublished-require
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./store/**/*.{js,ts,jsx,tsx}"
  ],
  mode: 'jit',
  plugins: [],
  theme: {
    container: {
      screens: {
        desktop: "1200px",
        mobile: "600px",
        tablet: "900px",
      },
    },
    extend: {
      backgroundImage: {
        'shine': 'linear-gradient(120deg,transparent,rgba(146,148,248,.4),transparent)',
      },
      colors: {
        'background-primary': '#732DD9',
        'background-secondary': '#f2f2f2',
        'background-tertiary': '#F8F8F8',
        'border-primary': '#DDDDDD',
        'border-secondary': '#732DD9',
        'purple': {
          50: '#732DD9',
          100: '#732DD9',
          200: '#732DD9',
          300: '#732DD9',
          400: '#732DD9',
          500: '#732DD9',
          600: '#732DD9',
          700: '#732DD9',
          800: '#732DD9',
          900: '#732DD9',
        },
        'text-primary': '#2A2A2A',
        'text-secondary': '#888888',
        'text-tertiary': '#732DD9',
      },
      fontFamily: {
        Inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
