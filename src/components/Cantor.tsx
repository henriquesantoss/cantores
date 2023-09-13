// src/components/Cantor.jsx
import React from "react";

function Cantor({ cantor }) {
  return (
    <div>
      <h2>{cantor.Cantor}</h2>
      <p>Top Música: {cantor["Top Música"]}</p>
      <p>Último Prêmio: {cantor["Último Prêmio"]}</p>
    </div>
  );
}

export default Cantor;
