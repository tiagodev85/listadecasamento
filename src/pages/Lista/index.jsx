import Seta from "../../Components/Seta";
import { useEffect } from "react";
import { useState } from "react";
import "./lista.css";
import CheckDevice from "../../Components/CheckDevice/checkDevice";

function Lista() {
  const isMobile = CheckDevice();
  let texto1 =
    "Você está aqui, porque é muito especial em nossas vidas! Por isso," +
    "não se prendam a itens da lista. O mais importante, é saber que" +
    "estamos dando esse passo com a benção de Deus e com as suas" +
    "orações! A sua vida já é um presente!";
  let texto2 =
    " Deixaremos abaixo, as cores escolhidas para compor os" +
    "ambientes em nosso lar.";

  const [presentes, setPresentes] = useState([]);

  useEffect(() => {
    fetch("./lista.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setPresentes(res.presentes);
      });
  }, []);

  // <div className="desktop:absolute top-0">

  //   </div>
  if (isMobile) {
    return <Mobile />;
  } else {
    return <Desktop />;
  }

  function Desktop() {
    return (
      <div id="content" className="desktop:lista-lg">
        {/* TOPO */}
        <div id="toolbar" className="desktop:toolbar-lg">
          <div className="voltar-lg">
            <Seta comando="Ínicio" link="start" id="seta-inicio" />
          </div>
          <h1>Como deseja nos presentear?</h1>        
        </div>
        {/* LISTA DE PRESENTES */}
        <div id="content" className="desktop:content-lista-lg">          
          <div id="lista-presentes" className="desktop:presentes-lg">
            {presentes.map((res) => {
              return (
                <div key={res.id} className="return">
                  <a href={"https://" + res.link} target="_blank">
                    <span>
                      {res.item}
                      <img src={res.image} alt={res.image} />
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
          {/* MENSAGEM */}
          <div id="mensagem" className="desktop:msg-lg">
            <h1>Desejamos que saiba...</h1>
            <p>{texto1}</p>
            <h1>MAS, SE POR VENTURA TIVER OUTRO INTEM EM MENTE...</h1>
            <p>{texto2}</p>
            <div className="desktop:temas-lg">
              <div className="nome-cor-lg ">
                <span className="nome-cor">bege</span>
                <span className="nome-cor">branco</span>
                <span className="nome-cor">cinza</span>
                <span className="nome-cor">creme</span>
                <span className="nome-cor">pinus</span>
              </div>
              <div className="desktop:tabela-cores-lg">
                <div className="cores cor-1"></div>
                <div className="cores cor-2"></div>
                <div className="cores cor-3"></div>
                <div className="cores cor-4"></div>
                <div className="cores cor-5"></div>
              </div>
            </div>
          </div>
          {/* RODAPÉ */}
          <div id="rodape" className="desktop:rodape-lg">
            <div id="endereco">
              <h2>Endereços para o envio dos presentes abaixo!</h2>
              <div className="enderecos-lg">
                <div className="end end-1">
                  <h2>📍residência dos noivos</h2>
                  <span>Rua ambrósio calmon, 34 - periperi</span>
                  <span>cep: 40725-630</span>
                </div>
                <div className="end end-2">
                  <h2> 📍residência dos pais da noiva</h2>
                  <span>Rua do gravatá, 118E - periperi</span>
                  <span>cep: 40720-010</span>
                </div>
              </div>
            </div>
          </div>
          <div className="agradecimento-lg">
            <h1>Agradecemos por seu apoio e carinho!</h1>
          </div>
        </div>
      </div>
    );
  }
  function Mobile() {
    return (
      <div id="content" className="smartphone:lista-sm">
        {/* TOPO */}
        <div id="toolbar" className="smartphone:toolbar-sm">
          <div className="voltar-sm">
            <a href="#home">home</a>
          </div>
          <h1>presentes</h1>
        </div>
        {/* LISTA DE PRESENTES */}
        <div id="content" className="smartphone:content-lista-sm">
          <h2>Como deseja nos presentear?</h2>
          <div id="lista-presentes" className="smartphone:presentes-sm">
            {presentes.map((res) => {
              return (
                <div key={res.id} className="return">
                  <a href={"https://" + res.link} target="_blank">
                    <img src={res.image} alt={res.image} />
                  </a>
                  <span>{res.item}</span>
                </div>
              );
            })}
          </div>
          {/* MENSAGEM */}
          <div id="mensagem" className="smartphone:msg-sm">
            <h1>Desejamos que saiba...</h1>
            <p>{texto1}</p>
            <h1>MAS, SE POR VENTURA TIVER OUTRO ITEM EM MENTE...</h1>
            <p>{texto2}</p>
            <div className="smartphone:temas-sm">
              <div className="nome-cor-sm ">
                <span className="nome-cor">bege</span>
                <span className="nome-cor">branco</span>
                <span className="nome-cor">cinza</span>
                <span className="nome-cor">creme</span>
                <span className="nome-cor">pinus</span>
              </div>
              <div className="smartphone:tabela-cores-sm">
                <div className="cores cor-1"></div>
                <div className="cores cor-2"></div>
                <div className="cores cor-3"></div>
                <div className="cores cor-4"></div>
                <div className="cores cor-5"></div>
              </div>
            </div>
          </div>
          {/* RODAPÉ */}
          <div id="rodape" className="smartphone:rodape-sm">
            <div id="endereco">
              <h2>Endereços para o envio dos presentes abaixo!</h2>
              <div className="enderecos-sm">
                <div className="end end-1">
                  <h2>📍residência dos noivos</h2>
                  <span>Rua ambrósio calmon, 34 - periperi</span>
                  <span>cep: 40725-630</span>
                </div>
                <div className="end end-2">
                  <h2> 📍residência dos pais da noiva</h2>
                  <span>Rua do gravatá, 118E - periperi</span>
                  <span>cep: 40720-010</span>
                </div>
              </div>
            </div>
          </div>
          <div className="agradecimento-sm">
            <h1>Agradecemos por seu apoio e carinho!</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Lista;
