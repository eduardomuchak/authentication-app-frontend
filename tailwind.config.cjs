/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grayPrimary: '#333333',
        graySecondary: '#828282',
        grayTertiary: '#BDBDBD',
      },
    },
  },
  plugins: [],
};
