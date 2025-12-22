import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@/App.css";
import Tarjeta from "@/components/Tarjeta/Tarjeta.jsx";

function App() {
  const nombre = "Andy";

  // function Saludo() {
  //   return <h2>¡Hola, {nombre.toUpperCase()}!</h2>;
  // }

  return (
    <div className="App">
      <header>
        <h1>Primer proyecto react</h1>
      </header>
      <div className="contenedor-tarjetas">
        <Tarjeta
          imagen="https://cdn-icons-png.freepik.com/256/12631/12631417.png?semt=ais_white_label"
          nombre="Usuario"
          profesion="Desarrollador Web"
          descripcion="Esta es la descripcion de la tarjeta"
        />
        <Tarjeta
          imagen="https://cdn-icons-png.freepik.com/256/12631/12631417.png?semt=ais_white_label"
          nombre="Usuario"
          profesion="Desarrollador Web"
          descripcion="Esta es la descripcion de la tarjeta"
        />
        <Tarjeta
          imagen="https://cdn-icons-png.freepik.com/256/12631/12631417.png?semt=ais_white_label"
          nombre="Usuario"
          profesion="Desarrollador Web"
          descripcion="Esta es la descripcion de la tarjeta"
        />
      </div>
    </div>
  );
}

export default App;
