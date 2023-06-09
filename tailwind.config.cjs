/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '280px',
        // => @media (min-width: 280px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        grayPrimary: '#333333',
        graySecondary: '#828282',
        grayTertiary: '#BDBDBD',
        bgGray: "#fafafb",
        textGray: "#4F4F4F",
        grayLine: "#E0E0E0",
        focus: '#2F80ED',
        bluePrimary: '#2F80ED',
        bluePrimaryLight: '#00A9FF',
        bluePrimaryDark: '#00257D',
        logoutRed: "#EB5757"
      },
      boxShadow: {
        borderShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)"
      }
    },
  },
  plugins: [],
};
