import React from "react";
import Grilla from "./components/Grilla";

function App() {
  const usuarios = [
    { id: 1, nombre: "José", puntaje: 50 },
    { id: 15, nombre: "María", puntaje: 20 },
    { id: 14, nombre: "Juan", puntaje: 39 },
    { id: 13, nombre: "Lucía", puntaje: 35 },
    { id: 9, nombre: "Carlos", puntaje: 82 },
    { id: 8, nombre: "Ana", puntaje: 42 },
    { id: 7, nombre: "Pedro", puntaje: 67 },
    { id: 6, nombre: "Juana", puntaje: 30 },
    { id: 5, nombre: "Andrés", puntaje: 85 },
    { id: 4, nombre: "Camila", puntaje: 46 },
    { id: 3, nombre: "Felipe", puntaje: 63 },
    { id: 10, nombre: "Valentina", puntaje: 77 },
    { id: 11, nombre: "Mateo", puntaje: 64 },
    { id: 12, nombre: "Isabella", puntaje: 59 },
    { id: 16, nombre: "Sofía", puntaje: 34 },
    { id: 17, nombre: "Diego", puntaje: 91 },
    { id: 19, nombre: "Manuela", puntaje: 43 },
    { id: 18, nombre: "Daniel", puntaje: 38 }
  ];

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <Grilla usuarios={usuarios} />
    </div>
  );
}

export default App;
