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
        'fondoNavbar': '#18181B', // Zinc 900
        'colorNavbar': '#DC2626', // Red 600
        'colorTextCart':'#4D774E',
        'colorFondo': '#F4F4F5',  // Zinc 100
        'colorButton': '#164A41', //Dark Green
        'colorButtonHover': '#4D774E', //Medium Green
        'colorTextoButton': '#ffffff', //white
        'colorBordeCard': '#9DC88D', //Natural Yellow 
        'colorFondoCard': '#FFFFFF', //white
        'colorTextoCard': '#4D774E', //Medium Green
        'colorFondoFooter': '#18181B', // Zinc 900
        'colorTextoFooter': '#F4F4F5', // Zinc 100

      }
    }
  },
  plugins: [require("daisyui")],
}
