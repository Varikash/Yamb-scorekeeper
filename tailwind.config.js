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
  plugins: [],
}

