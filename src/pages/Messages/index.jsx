import { Link } from "react-router-dom";
import CheckDevice from "../../Components/CheckDevice/checkDevice";
import Seta from "../../Components/Seta";
import "./messages.css";

function Messages() {
  const isMobile = CheckDevice();
  let texto1 = "Bem sei eu que tudo podes, e que nenhum dos teus propósitos podem"
              +"ser impedidos."
  let texto2 = "De uma maneira inesperada e improvável, Deus nos uniu. Foram muitos"
              +"os desafios superados ao longo desses 11 anos. Hoje, estamos muito"
              +"felizes em compartilhar com você mais uma vitória. Somos gratos e"
              +"abencoados por tê-lo(a) em nossos dias."

  if (isMobile) {
    return (
      <div className="smartphone:msgs-sm">
        <div id="versiculo" className="smartphone:versiculo-sm">
          <p className="m-auto w-[60%] items-center text-versiculo text-5xl">
            {texto1}
            <span>(Jó 42,2)</span>
          </p>
        </div>
        <div id="agradecimento" className="smartphone:agra-sm">
          <p>
            {texto2}
          </p>
        </div>        
      </div>
    );
  } else {
    return (
      <div className="desktop:msgs-lg">
        <div id="versiculo" className="desktop:versiculo-lg">
          <p className="m-auto w-[60%] items-center text-versiculo text-5xl">
           {texto1}
            <span>(Jó 42,2)</span>
          </p>
        </div>
        <div id="agradecimento" className="desktop:agra-lg">
          <p>
            {texto2}
          </p>
        </div>        
      </div>
    );
  }
  
}

export default Messages;
