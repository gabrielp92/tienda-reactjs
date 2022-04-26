module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:
    {
      'paleta':
      {
        'fondoNavbar': '#164A41', //Dark Green
        'colorNavbar': '#F1B24A', //Natural Yellow
        'colorTextCart':'#4D774E', //Medium Green
        'colorFondo': '#9DC88D',  //Light Green
        'colorButton': '#164A41', //Dark Green
        'colorButtonHover': '#4D774E', //Medium Green
        'colorTextoButton': '#ffffff', //white
        'colorBordeCard': '#9DC88D', //Natural Yellow 
        'colorTextoCard': '#4D774E', //Medium Green
        'colorFondoFooter': '#4D774E', //Medium Green
        'colorTextoFooter': '#9DC88D',  //Light Green

      },
      'fuchsia': 
      { 
        50: '#fdf4ff',
        100: '#fae8ff',
        200: '#f5d0fe',
        300: '#f0abfc',
        400: '#e879f9',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87',
      }
    }
  },
  plugins: [require("daisyui")],
}
