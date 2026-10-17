import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/productos">Productos</NavLink></li>
        <li><NavLink to="/carrito">Carrito</NavLink></li>
      </ul>
      <CartWidget />
    </nav>
  );
}
