import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@/App.css";
import Tarjeta from "@/components/Tarjeta/Tarjeta.jsx";

function App() {


  return (
    <div className="App">
      <header>
        <h1>Nuestro equipo</h1>
      </header>
      <div className="contenedor-tarjetas">
        <Tarjeta
          imagen="https://img.freepik.com/foto-gratis/programador-smiley-tiro-medio-interiores_23-2149101154.jpg?semt=ais_hybrid&w=740&q=80"
          nombre="Camilo Pueblo"
          profesion="Desarrollador Web"
          descripcion="Especialista en crear experiencias digitales interactivas, fluidas y optimizadas."
        />
        <Tarjeta
          imagen="https://img.freepik.com/foto-gratis/asistente-medico-preparandose-ejercicios-fisioterapia_23-2149071431.jpg?semt=ais_hybrid&w=740&q=80"
          nombre="Julieta Marra"
          profesion="Analista funcional"
          descripcion="Experta en transformar necesidades de negocio en soluciones técnicas claras."
        />
        <Tarjeta
          imagen="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&h=256&fit=crop"
          nombre="Giuliana Pierre"
          profesion="Ingeniera de software"
          descripcion="Enfocada en el diseño de arquitecturas robustas y código de alta calidad."
        />
      </div>
    </div>
  );
}

export default App;
