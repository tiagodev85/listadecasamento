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
      smartphone: {'min' : '360px', 'max' : '1024px'},
      desktop: {'min' : '1024px'},
    },
    fontFamily: {
      Belleza: ["Belleza"],
      Angella: ["Angella"],
    },
    extend: {
      content:{
        'vazio': ''
      },
      scale: {
        "scale": "0.3"
      },
      skew: {
        "trinta": '30deg'
      },
      keyframes: {
        move: {
          "25%": {opacity: 1},
          "33.3%": {opacity: 1, transform: 'translateY(0.6rem * 3.8)'},
          "66.6%": {opacity: 1, tranform: 'translateY(0.6rem * 5.2'},
          "100%": {opacity: 0, tranform: 'translateY(0.6rem * 8) scale(0.5)'}

        },
        chevron: {
          '0%': { color: 'white' },
          '5%': { top: '0' },
          '50%': { top: '5%' },
          '100%': { top: '0' },
          // '25%': { top: '5%' },
          // '100%': { top: '10%' },          
        },
        chevron1: {
          '0%': { top: '5%' },
          '20%': { color: 'white' },          
          '50%': { top: '10%' },
          '100%': { top: '5%' },         
        },
        chevron2: {
          '0%': { top: '10%' },
          '45%': { color: 'white' },
          '50%': { top: '15%' },
          '100%': { top: '10%' },          
        }
      },
      animation: { 
        mover1: "move 3s ease-out infinite",
        mover1first: "move 3s ease-out 1s infinite",
        mover1child: "move 3s ease-out 2s infinite",
        chevron: "chevron 1s linear infinite",
        chevron1: "chevron1 1s linear infinite",        
        chevron2: "chevron2 1s linear infinite",        
      },
      width: {
        "60": "60%",
        "120": "120px",
        baseW: "calc(0.6rem * 3.5)",        
      },
      height: {
        meio: "calc(100vh/2)",
        metade: "512px",
        "250": "250px",
        baseH: "calc(0.6rem * 0.8)"
      },
      inset: {
        meio: "calc(50% - 512px)",
        controle: "calc(50% - 175px)",
        nomeAltura: "calc(0px + 70%)",
        msgsAltura: "calc(100% + 60vh)",
        topMsg: "calc(100vh)"
      },
      backgroundImage: {
        fundo: "url('./assets/fundo.png')",
        casal: "url('../../assets/casal.jpg')",
      },
      colors: {
        title: "#805730",
        versiculo: "#613d1a",
        "button-hover": "#42280e",
        bege: "#e2cbaf",
        cinza: "#cdc6bf",
        creme: "#eedccb",
        pinus: "#d9b181" 
      },
      textShadow: {
        default: "8px 6px 3px rgba(255, 255, 255, 0.486)",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar-hide")
  ],
};
