import React from "react";
import Usuario from "./Usuario";
import "./Grilla.css";

function Grilla({ usuarios }) {
  return (
    <div className="grilla">
      {usuarios.map((user) => (
        <Usuario key={user.id} nombre={user.nombre} puntaje={user.puntaje} />
      ))}
    </div>
  );
}

export default Grilla;
