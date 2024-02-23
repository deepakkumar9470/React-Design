/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "index.html",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      colors: {

        "mainBg": "#FBFCFD",
        "mainWhite": "#FFFFFF",
        "secondaryblack": "#212731",
        "darkBlue1": "#1B88F4",
        "darkBlue2": "#074786",
        "darkBlue3": "#074786",
        "lightBlue": "#F3F9FF",
        "lightBlue2": "#F2F4F7",
        "orangeClr": "#FF7724",
        "mainDark": "#2C384A",
        "darkMedium": "#4B5665",
        "lightGrey1": "#D1D6DA",
        "lightGrey2": "#B6BDC4",
        "lightGrey3": "#626E79",
        "darkGrey": "#5C6874",
        "darkGrey2": "#9FA9B3",
        "lightPink": "#FFF4ED",
        "red1": "#EF4C5D",

      }
    },
  },


}
