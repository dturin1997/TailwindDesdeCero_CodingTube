/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "azul-claro": "#243cff",
        "azul-oscuro": "#0d1b3e",
      },
      spacing: {
        42: "170px",
      },
      width: {
        43: "180px",
      },
      //Aca solo se extienden sin sobreescribir lo anterior
      screens: {
        tablet: "900px",
      },
    },
    //En esta posicion se sobreescriben,
    //por lo que se deben escribir manualmente
    /*
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      tablet: "900px",
    },
    */
  },
  plugins: [],
};
