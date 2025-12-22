import "@/components/Tarjeta/Tarjeta.css";

function Tarjeta({ nombre, profesion, imagen, descripcion }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <h3>{profesion}</h3>
      <p>{descripcion}</p>
    </div>
  );
}
export default Tarjeta;
