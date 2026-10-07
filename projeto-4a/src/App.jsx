import { useState } from "react";
import "./App.css";

function App() {
  const [ideias, setIdeias] = useState([]);
  const [novaIdeia, setNovaIdeia] = useState("");
  const [erro, setErro] = useState("");

  function aoAdicionar(event) {
    event.preventDefault();

    if (novaIdeia.trim() === "") {
      setErro("Digite sua ideia antes de adicionar.");
      return;
    }

    const ideia = {
      id: Date.now(),
      texto: novaIdeia.trim(),
      feita: false
    };

    setIdeias((atual) => [...atual, ideia]);
    setNovaIdeia("");
    setErro("");
  }

  function aoAlternar(id) {
    setIdeias((atual) =>
      atual.map((ideia) =>
        ideia.id === id
          ? { ...ideia, feita: !ideia.feita }
          : ideia
      )
    );
  }

  function aoRemover(id) {
    setIdeias((atual) =>
      atual.filter((ideia) => ideia.id !== id)
    );
  }

  const concluidas = ideias.filter((ideia) => ideia.feita).length;

  return (
    <main className="painel">
      <section className="container">
        <header className="cabecalho">
          <h1>Painel de Ideias</h1>
          <p>Organize suas ideias e transforme seus planos em realidade.</p>
        </header>

        <form className="formulario" onSubmit={aoAdicionar}>
          <input
            type="text"
            value={novaIdeia}
            onChange={(event) => {
              setNovaIdeia(event.target.value);
              setErro("");
            }}
            placeholder="Digite uma nova ideia..."
          />

          <button type="submit">
            Adicionar
          </button>
        </form>

        {erro && <p className="erro">{erro}</p>}

        <section className="lista">
          {ideias.length === 0 ? (
            <p className="vazio">
              Nenhuma ideia adicionada ainda.
            </p>
          ) : (
            ideias.map((ideia) => (
              <div className="ideia" key={ideia.id}>
                <label className="conteudo-ideia">
                  <input
                    type="checkbox"
                    checked={ideia.feita}
                    onChange={() => aoAlternar(ideia.id)}
                  />

                  <span className={ideia.feita ? "feita" : ""}>
                    {ideia.texto}
                  </span>
                </label>

                <button
                  className="remover"
                  type="button"
                  onClick={() => aoRemover(ideia.id)}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </section>

        <footer className="rodape">
          {`${ideias.length} ideias no painel · ${concluidas} concluídas`}
        </footer>
      </section>
    </main>
  );
}

export default App;