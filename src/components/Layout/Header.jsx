import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo" aria-label="Ir al inicio">
        <h1>Mi Tienda</h1>
      </Link>
      <p>Tecnología que necesitas al mejor precio</p>
    </header>
  );
}
