import { Link } from "react-router-dom";
import CheckDevice from "../CheckDevice/checkDevice";
import Seta from "../Seta";
import "./messages.css";

function Messages() {
  const isMobile = CheckDevice();

  if (isMobile) {
    return (
      <div className="smartphone:msgs-sm">
        <div id="versiculo" className="smartphone:versiculo-sm">
          <p className="m-auto w-[60%] items-center text-versiculo text-5xl">
            "Bem sei eu que tudo podes, e que nenhum dos teus propósitos podem
            ser impedidos."
            <span>(Jó 42,2)</span>
          </p>
        </div>
        <div id="agradecimento" className="smartphone:agra-sm">
          <p>
            De uma maneira inesperada e improvável, Deus nos uniu. Foram muitos
            os desafios superados ao longo desses 11 anos. Hoje, estamos muito
            felizes em compartilhar com você mais uma vitória. Somos gratos e
            abencoados por tê-lo(a) em nossos dias.
          </p>
        </div>        
      </div>
    );
  } else {
    return (
      <div className="desktop:msgs-lg">
        <div id="versiculo" className="desktop:versiculo-lg">
          <p className="m-auto w-[60%] items-center text-versiculo text-5xl">
            "Bem sei eu que tudo podes, e que nenhum dos teus propósitos podem
            ser impedidos."
            <span>(Jó 42,2)</span>
          </p>
        </div>
        <div id="agradecimento" className="desktop:agra-lg">
          <p>
            De uma maneira inesperada e improvável, Deus nos uniu. Foram muitos
            os desafios superados ao longo desses 11 anos. Hoje, estamos muito
            felizes em compartilhar com você mais uma vitória. Somos gratos e
            abencoados por tê-lo(a) em nossos dias.
          </p>
        </div>
        <div className="desktop:btn-lg">
          <Seta link="lista" id="seta-lista" comando="Lista de presentes"/>
          <Seta link="start" id="seta-start" comando="Voltar"/>
          {/* <button>
            <Link to={"/lista"}>Nos presenteie</Link>
          </button> */}
        </div>
      </div>
    );
  }
  
}

export default Messages;
