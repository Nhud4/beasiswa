/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': {
        '300': '#C6C6C6',
        '500': '#444444'
      },
      'primary': {
        '10': '#237B9F',
        '20': '#51ABC5',
        '30': '#BEC8FF',
        '40': '#EBF6F8',
        '50': '#0093AD',
        '60': '#89C4CE',
        '70': '#007489'
      },
      'natural': {
        '20': '#3DDE43',
        '30': '#E8FCDA',
        '40': '#019FDE',
      },
      'danger':{
        '10': '#FF7555',
        '20': '#FF4135',
        '30': '#FFF2E7'
      },
      'cyn':{
        '10': '#FF9F26',
      },
      'nero':{
        '10': '#EFF4F0',
        '20': '#D2D4DA',
        '30': '#D9D9D9'
      }
    },
    extend: {
      fontSize: {
        '10': '10px',
        '11': '11px',
        '13': '13px',
        '14': '14px',
        '16': '16px',
        '20': '20px',
        '22': '22px',
        '35': '35px'
      },
      boxShadow: {
        '1': '0px 8px 24px rgba(0, 0, 0, 0.1)',
        '2': '0px 4px 10px 0px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [],
};
