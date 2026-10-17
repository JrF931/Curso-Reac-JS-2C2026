import { Link } from "react-router-dom";
export default function Item({ id, nombre, precio, categoria, imagen }) {
  return (
    <article className="item">
      <img src={imagen || `https://picsum.photos/seed/prod${id}/300/200`} alt={nombre} />
      <h3>{nombre}</h3>
      <p className="categoria">{categoria}</p>
      <p className="precio">${precio.toLocaleString("es-AR")}</p>
      <Link className="btn" to={`/producto/${id}`}>Ver detalle</Link>
    </article>
  );
}
