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
        'fondoNavbar': '#161416',
        'colorNavbar': '#DC2626', // Red 600
        'colorNavbarMedio':'#7f1d1d', //Red 900
        'colorFondoWidget': '#e4e4e7',
        'colorFondo': '#F4F4F5',  // Zinc 100
        'colorFondoContainer': '#D7AAA2',
        'colorShadowItem': '#161416',
        'colorButton': '#161416',
        'colorButtonHover': '#161416',
        'colorTextoButton': '#FFFFFF', //white
        'colorFondoCard': '#FFFFFF', //white
        'colorTextoCard': '#161416',
        'colorFondoFooter': '#161416',
        'colorTextoFooter': '#F4F4F5', // Zinc 100
      }
    }
  },
  plugins: [require("daisyui")],
}
