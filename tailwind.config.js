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
        'colorFondoCard': '#FFFFFF', //white
        'colorTextoCard': '#4D774E', //Medium Green
        'colorFondoFooter': '#4D774E', //Medium Green
        'colorTextoFooter': '#9DC88D',  //Light Green

      }
    }
  },
  plugins: [require("daisyui")],
}
