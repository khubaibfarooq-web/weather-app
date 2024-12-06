/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'xl': '415px',
        'lg': '400px',
        'md': '260px',
      },
      colors: {
        primary: '#b1c6d5',
        primaryText: '#606060',
        secondaryText: '#131313',
        lightGreyText: '#E8E8E8',
        veryLightGrey: '#D8D8D8',
        slateGrey: '#A1A1A1',
        dullGrey: '#F5F5F5',
        mediumGrey: '#DEDEDE',
        darkGrey: '#484848',
        mercuryGrey: "#E7E7E7",
        darkMercuryGrey: "#8D8D8D",
        dullBlack: '#1F1F1F',
        lightBlack: '#262626',
      },
      borderRadius: {
        primaryBorder: '16px',
        mediumBorder: '24px',
        secondaryBorder: '8px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        // sans: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
}