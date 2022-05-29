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
        'fondoNavbar': '#141416',
        'colorNavbar': '#DC2626', // Red 600
        'colorNavbarMedio':'#7f1d1d', //Red 900
        'colorFondoWidget': '#e4e4e7',
        'colorFondo': '#F4F4F5',  // Zinc 100
        'colorFondoContainer': '#404040',
        'colorShadowItem': '#141416',
        'colorButton': '#141416',
        'colorButtonHover': '#141416',
        'colorTextoButton': '#FFFFFF', //white
        'colorFondoCard': '#FFFFFF', //white
        'colorTextoCard': '#141416',
        'colorFondoFooter': '#141416',
        'colorTextoFooter': '#F4F4F5', // Zinc 100
      }
    }
  },
  plugins: [require("daisyui")],
}
