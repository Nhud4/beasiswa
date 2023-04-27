/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'primary': {
        '10': '#237B9F',
        '20': '#51ABC5'
      },
      'natural': {
        '10': '#3DDE43',
        '20': '#3DDE43',
        '30': '#F1FEE8'
      },
      'danger':{
        '10': '#FF7555',
        '20': '#FF4135',
        '30': '#FFF2E7'
      },
      'cyn':{
        '10': '#FF9F26'
      },
      'nero':{
        '10': '#EFF4F0'
      }
    },
    extend: {
      fontSize: {
        '13': '13px',
        '14': '14px',
        '11': '11px',
        '10': '10px',
        '20': '20px'
      },
      boxShadow: {
        '1': '0px 4px 24px rgba(0, 0, 0, 0.05)',
        '2': '0px 4px 10px 0px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [],
};
