import "./lista.css";
// import "./AppMobile.css";

function Lista() {
  return (
    <>
      <div id="content" className="smartphone:c-sm desktop:c-lg">
        <div id="bandeirola" className="smartphone:band-sm  desktop:band-lg">
          <span>jan</span>
          <span>20</span>
          <span>23</span>
        </div>
        <div id="title" className="smartphone:t-sm desktop:t-lg">
          <div className="smartphone:text-sm desktop:text-lg">
            <h3>lista de</h3>
            <h1>casamento</h1>
          </div>
        </div>
        <div id="photo" className="smartphone:p-sm desktop:p-lg"></div>
        <div className="smartphone:n-sm desktop:n-lg">
          <h1>Tiago e Laís</h1>
        </div>
      </div>
      <div id="versiculo" className="smartphone:v-sm desktop:v-lg">
        <p className="m-auto w-[60%] items-center text-versiculo text-5xl">
          "Bem sei eu que tudo podes, e que nenhum dos teus propósitos podem ser
          impedidos."
          <span>(Jó 42,2)</span>
        </p>
      </div>
      <div id="agradecimento" className="smartphone:a-sm desktop:a-lg">
        <p>
          De uma maneira inesperada e improvável, Deus nos uniu. Foram muitos os
          desafios superados ao longo desses 11 anos. Hoje, estamos muito
          felizes em compartilhar com você mais uma vitória. Somos gratos e
          abencoados por tê-lo(a) em nossos dias.
        </p>
      </div>
      <div className="smartphone:btn-sm desktop:btn-lg">
        <button>nos presenteie</button>
      </div>
    </>
  );
}

export default Lista;