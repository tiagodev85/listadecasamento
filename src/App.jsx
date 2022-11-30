import "./App.css";

import casal from "./assets/casal.jpeg";

function App() {
  return (
    <>
      <div className="container">
        <div className="bandeirola">
          <span>jan</span>
          <span>20</span>
          <span>23</span>
        </div>
        <div className="title">
          <h3>lista de</h3>
          <h1>casamento</h1>
        </div>
        <div className="bg-img"></div>
        <div className="title-casal">
          <h1>Tiago e Laís</h1>
        </div>
      </div>
      <div className="versiculo">
        <p>
          "Bem sei eu que tudo podes, e que nenhum dos teus propósitos podem ser
          impedidos."          
        </p>
        <span>Jó 42:2</span>
      </div>
      <div className="agradecimento">
        <p>
          De uma maneira inesperada e improvável, Deus nos uniu. Foram muitos os
          desafios superados ao longo desses 11 anos. Hoje, estamos muito
          felizes em compartilhar com você mais uma vitória. Somos gratos e
          abencoados por tê-lo(a) em nossos dias.
        </p>
      </div>
      <div className="controle">
        <button>nos presenteie</button>
      </div>
    </>
  );
}

export default App;
