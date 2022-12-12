/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      "30": "30px",
      "60": "60px",
      "20": "20px",
    },
    screens: {
      tablet: "640px",
      smartphone: "360px",
      desktop: "1024px",
    },
    fontFamily: {
      Belleza: ["Belleza"],
      Angella: ["Angella"],
    },
    extend: {
      width: {
        "60": "60%",
        "120": "120px",
      },
      height: {
        meio: "calc(100vh/2)",
        metade: "512px",
        "250": "250px",
      },
      inset: {
        meio: "calc(50% - 512px)",
        controle: "calc(50% - 175px)",
      },
      backgroundImage: {
        fundo: "url('./assets/fundo.png')",
        casal: "url('../../assets/casal.jpg')",
      },
      colors: {
        title: "#805730",
        versiculo: "#613d1a",
        "button-hover": "#42280e",
      },
      textShadow: {
        default: "8px 6px 3px rgba(255, 255, 255, 0.486)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
