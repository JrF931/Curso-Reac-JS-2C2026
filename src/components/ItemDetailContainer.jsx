import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { getProductosLocales } from "../utils/storage.js";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [loading, setLoading] = useState(true);
  const [agregado, setAgregado] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/productos.json")
      .then((res) => res.json())
      .then((data) => setProducto([...data, ...getProductosLocales()].find((p) => p.id === Number(id)) || null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!producto) return <p>Producto no encontrado. <Link to="/productos">Volver</Link></p>;

  const handleAdd = () => {
    addToCart(producto, cantidad);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1500);
  };

  return (
    <section className="detalle">
      <img src={producto.imagen || `https://picsum.photos/seed/prod${producto.id}/500/350`} alt={producto.nombre} />
      <div>
        <h2>{producto.nombre}</h2>
        <p className="categoria">{producto.categoria}</p>
        <p>{producto.descripcion}</p>
        <p className="precio">${producto.precio.toLocaleString("es-AR")}</p>
        <p>Stock: {producto.stock}</p>

        <div className="contador">
          <button onClick={() => setCantidad((c) => Math.max(1, c - 1))}>-</button>
          <span>{cantidad}</span>
          <button onClick={() => setCantidad((c) => Math.min(producto.stock, c + 1))}>+</button>
        </div>

        <button className="btn" onClick={handleAdd}>Agregar al carrito</button>
        {agregado && <p className="ok">✅ Agregado al carrito</p>}
        <p><Link to="/productos">← Volver a productos</Link></p>
      </div>
    </section>
  );
}
