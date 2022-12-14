/** @type {import('tailwindcss').Config} */

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
        'primary': '#3067bd',
        'textGray': '#a6a7aa',
        'c-title': '#3d0491',
        'secondary': '#90298D',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  variants: {
    lineClamp: ['responsive', 'hover']
  }
}
