import { useEffect, useState } from "react";
import Item from "./Item.jsx";
import ProductForm from "./ProductForm.jsx";
import { getProductosLocales, saveProductoLocal } from "../utils/storage.js";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/productos.json")
      .then((res) => {
        if (!res.ok) throw new Error("No se pudieron cargar los productos");
        return res.json();
      })
      // productos del JSON + los creados con el formulario
      .then((data) => setProductos([...data, ...getProductosLocales()]))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = (nuevo) => {
    saveProductoLocal(nuevo);
    setProductos((prev) => [...prev, nuevo]);
  };

  return (
    <section>
      <h2>Productos</h2>

      {loading && <p>Cargando productos...</p>}
      {error && <p>Error: {error}</p>}

      <div className="grid">
        {productos.map((p) => (
          <Item key={p.id} {...p} />
        ))}
      </div>

      <ProductForm onAdd={handleAdd} existingIds={productos.map((p) => p.id)} />
    </section>
  );
}
