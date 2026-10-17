import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { cart, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <section>
        <h2>Tu carrito está vacío, seleccione algun producto para realizar la compra</h2>
        <Link className="btn" to="/productos">Ir al Inicio</Link>
      </section>
    );
  }

  return (
    <section>
      <h2>Carrito</h2>
      <table className="tabla">
        <thead>
          <tr><th>Producto</th><th>Precio</th><th>Cant.</th><th>Subtotal</th><th></th></tr>
        </thead>
        <tbody>
          {cart.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>${p.precio.toLocaleString("es-AR")}</td>
              <td>{p.cantidad}</td>
              <td>${(p.precio * p.cantidad).toLocaleString("es-AR")}</td>
              <td><button onClick={() => removeFromCart(p.id)}>🗑️</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ${totalPrice.toLocaleString("es-AR")}</h3>
      <button className="btn" onClick={clearCart}>Vaciar carrito</button>
    </section>
  );
}
