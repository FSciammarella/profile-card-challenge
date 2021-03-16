module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'hsl(185, 75%, 39%)',
        'dark-d-blue': 'hsl(229, 23%, 23%)',
        'dark-gray-blue': 'hsl(227, 10%, 46%)',
        'dark-grey': 'hsl(0, 0%, 59%)',
      },
      minHeight: { 400: '400px' },
      maxHeight: { 450: '450px' },
      width: {
        86: '22rem',
      },
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
