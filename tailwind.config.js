const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
    screens: {
      'xsm': '320px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}