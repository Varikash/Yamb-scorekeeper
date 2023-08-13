/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,js,tsx,ts,css}'],
  theme: {
    extend: {
      maxWidth: {
        '375': '375px',
      },
      spacing: {
        '52px': '52px',
      },
      fontSize: {
        'cell': '6.3px',
        '9px': '8.5px',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.custom-select': {
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          'appearance': 'none',
        },
        '.custom-select::-ms-expand': {
          display: 'none',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

