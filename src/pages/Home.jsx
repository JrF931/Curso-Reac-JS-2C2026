import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <h2>¡Bienvenido/a a Mi Tienda!</h2>
      <p>Encontrá los mejores productos de tecnología.</p>
      <Link className="btn" to="/productos">Ver productos</Link>
    </section>
  );
}
