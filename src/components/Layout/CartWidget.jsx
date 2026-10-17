import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";

export default function CartWidget() {
  const { totalItems } = useCart();
  return (
    <Link to="/carrito" className="cart-widget" aria-label="Ir al carrito">
      🛒
      <span className="cart-badge">{totalItems}</span>
    </Link>
  );
}
