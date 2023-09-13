// src/App.jsx
import { useState, useEffect } from "react";
import Cantor from "./components/Cantor";
import "./App.css";
function App() {
  const [country, setCountry] = useState("Brasil");
  const [cantores, setCantores] = useState([]);
  const [loading, setLoading] = useState(true);

  const changeCountry = (newCountry) => {
    setCountry(newCountry);
  };

 useEffect(() => {
    setLoading(true);

    const githubUrl =
      "https://raw.githubusercontent.com/henriquesantoss/cantor/main/cantor.json";

    fetch(githubUrl)
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((data) => {
        const cantoresData = data[country];
        setCantores(cantoresData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
        setLoading(false);
      });
  }, [country]);


  return (
    <main>
      <h1>Informações de Cantores</h1>
      <div>
        <button onClick={() => changeCountry("Brasil")}>Brasil</button>
        <button onClick={() => changeCountry("Japão")}>Japão</button>
        <button onClick={() => changeCountry("Estados Unidos")}>
          Estados Unidos
        </button>
        <button onClick={() => changeCountry("Coreia do Sul")}>
          Coreia do Sul
        </button>
      </div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {cantores.map((cantor, index) => (
            <div key={index} className="card">
              <Cantor key={index} cantor={cantor} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
