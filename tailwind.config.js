/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

// Rotate Y utilities
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-45': {
      transform: 'rotateY(45deg)',
    },
    '.rotate-y-90': {
      transform: 'rotateY(90deg)',
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  })
})
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'stc': ['stc', 'sans-serif'],
      'helvetica': ['helvetica', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'contact': "url('../assets/img/contact.jpg')",
      },
      colors: {
        'primary': '#1B4997',
        'textGray': '#525260',
        'c-title': '#364354',
        'secondary': '#90298D',
      },
    },
  },
  plugins: [rotateY],
}
