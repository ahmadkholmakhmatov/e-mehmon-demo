/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 40px 16px -32px rgba(119, 126, 144, 0.05)', // Custom box shadow
      },
      colors: {
        'blue-20': 'rgba(50, 118, 255, 0.2)',
        customBg: '#FAFAFA',
        greyParaText: '#B7BFD5',
      },
      fontFamily: {
        onest: ['Onest', 'sans-serif'],
      },
      screens: {
        esm: '340px',
      },
      display: ['group-hover'],
    },
  },
  plugins: [],
};
