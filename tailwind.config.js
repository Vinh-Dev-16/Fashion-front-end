/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        slider1: 'slider1 15s  ease-in-out  infinite',
        ani1:'ani1 15s ease-in-out infinite',
        slider2: 'slider2 15s  ease-in-out  infinite',
        ani2:'ani2 15s ease-in-out infinite',
        slider3: 'slider3 15s  ease-in-out  infinite',
        ani3:'ani3 15s ease-in-out infinite',
      },
      keyframes: {
        slider1: {
          '0%': { opacity: '0' },
          '4%': { opacity: '1', transform: 'scale(1.03)' },
          '20%':{opacity: '1', transform: 'scale(1.03)'},
          '33%': {opacity: '0', transform: 'translateY(50px) scale(1)' },
          '100%':{opacity: '0'}
        },
        ani1: {
          '0%': { opacity: '0' },
          '5%': {opacity:'0'},
          '13%': { opacity: '1' ,transform: 'translateX(-60px)'},
          '24%': { opacity: '0', transform: 'translateX(-120px)'},
          '100%': { opacity: '0', transform: 'translateX(-120px)'},
        },
        slider2:{
          '0%': { opacity: '0' },
          '34%':{ opacity:'0',transform: 'scale(1)'},
          '38%': { opacity: '1', transform: 'scale(1.03)' },
          '54%' : {opacity: '1', transform: 'scale(1.03)'},
          '67%' : {opacity: '0', transform: 'translateY(50px) scale(1)'},
          '100%':{opacity: '0'}
        },
        ani2:{
          '0%': { opacity: '0'},
          '39%': {opacity:'0',transform:'translateX(0px)'},
          '47%': {opacity:'1', transform: 'translateX(-60px)'},
          '58%': {opacity: '0', transform: 'translateX(-120px)'},
          '100%': { opacity: '0', transform: 'translateX(-120px)'},
        },
        slider3:{
          '0%':{opacity:'0'},
          '68%': {opacity:'0',transform:'scale(1)'},
          '72%': {opacity: '1', transform: 'scale(1.03)' },
          '88%': {opacity: '1', transform: 'scale(1.03)'},
          '99%': { opacity: '0', transform: 'translateY(50px) scale(1)'},
          '100%': { opacity: '0', transform: 'translateY(50px) scale(1)'},
        },
        ani3:{
          '0%': { opacity: '0'},
          '69%': {opacity:'0',transform:'translateX(0px)'},
          '77%': {opacity:'1', transform: 'translateX(-60px)'},
          '88%': {opacity: '0', transform: 'translateX(-120px)'},
          '100%': { opacity: '0', transform: 'translateX(-120px)'},
        }
        }
      }
    },
  plugins: [],
}
