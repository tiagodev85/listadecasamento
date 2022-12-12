import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./lista.css";

function Lista() {
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
  return (
    <div>
      <div id="content" className="smartphone:lista-sm desktop:lista-lg">
        {/* TOPO */}
        <div id="toolbar" className="smartphone:toolbar-sm desktop:toolbar-lg">
          <h1>presentes</h1>
          <button>
            <Link to={"/"}>voltar</Link>
          </button>
        </div>
        {/* LISTA DE PRESENTES */}
        <div id="content" className="smartphone:content-lista-sm">
          <div id="info" className="smartphone:info-sm">
            <label htmlFor="nome">Quem nos presenteia?</label>
            <input type="text" name="nome" id="nome" />
          </div>
          <h2>E como deseja nos presentear?</h2>
          <div
            id="lista-presentes"
            className="smartphone:presentes-sm desktop:presentes-lg"
          >
            {presentes.map((res) => {
              return (
                <div key={res.id} className="return">
                  <a href={"https://"+res.link} target="_blank">
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
            <p>
              Você está aqui, porque é muito especial em nossas vidas! Por isso,
              não se prendam a itens da lista. O mais importante, é saber que
              estamos dando esse passo com a benção de Deus e com as suas
              orações! A sua vida já é um presente!
            </p>
            <h1>MAS, SE POR VENTURA TIVER OUTRO INTEM EM MENTE...</h1>
            <p>
              Deixaremos abaixo, cores e madeiras escolhidas para compor os
              ambientes em nosso lar.
            </p>
            <div className="smartphone:temas-sm desktop:temas-lg">
              <div className="smartphone:nome-cor-sm ">
                <span className="smartphone:nome-cor">bege</span>
                <span className="smartphone:nome-cor">branco</span>
                <span className="smartphone:nome-cor">cinza</span>
                <span className="smartphone:nome-cor">creme</span>
                <span className="smartphone:nome-cor">pinus</span>
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
              <div className="smartphone:enderecos-sm">
                <div className="smartphone:end end-1 desktop:end-lg">
                  <h2>📍residência dos noivos</h2>
                  <span>Rua ambrósio calmon, 34 - periperi</span>
                  <span>cep: 40725-630</span>
                </div>
                <div className="smartphone:end end-2 desktop:end-lg">
                  <h2> 📍residência dos pais da noiva</h2>
                  <span>Rua do gravatá, 118E - periperi</span>
                  <span>cep: 40720-010</span>
                </div>
              </div>
            </div>
          </div>
          <div className="smartphone:agradecimento-sm desktop:agradecimento-lg">
            <h1>Agradecemos por seu apoio e carinho!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Lista;
