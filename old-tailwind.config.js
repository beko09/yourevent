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
        'primary': '#1B4997',
        'textGray': '#525260',
        'c-title': '#364354',
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
