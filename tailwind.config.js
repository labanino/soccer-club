/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html","./js/*.js"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins'],
      'roboto': ['Roboto']
    },
    fontSize: {
      'sm': '0.7rem',
      'base': '0.9rem',
      '2base': '1.1rem',
      'xl': '1.25rem',
      '2xl': '1.25rem',
      '3xl': '1.75rem',
      'big': '4rem'
    },
    lineHeight: {
      'lead': '1.65rem',
      'h2': '2rem',
      'body': '3rem',
      'big': '4.5rem'
    },
    screens: {
      'xs': '280px',
      'sm': '640px',
      'md': '820px',
      '2md': '910px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
      'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)' },
    },
    keyframes: {
      'open-menu': {
        '0%': { transform: 'scaleY(0)' },
        '100%': { transform: 'scaleY(1)' },
      },
    },
    animation: {
      'open-menu': 'open-menu 0.5s ease-in-out forwards',
    },
    colors: {
      lightRed: '#D60014',
      darkRed: '#B70515',
      darkBlue: '#172D55',
      lightPurple: '#63428C',
      darkPurple: '#300468',
      lightGray: '#F4F4F4',
      middleGray: '#D9D9D9',
      white: '#FFFFFF',
      black: '#000000'
    },
  },
  plugins: [require('@tailwindcss/forms')],
}