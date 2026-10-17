import { useState } from "react";

const initialForm = { id: "", nombre: "", precio: "", stock: "" };

export default function ProductForm({ onAdd, existingIds }) {
  const [form, setForm] = useState(initialForm);
  const [imagen, setImagen] = useState("");
  const [fileKey, setFileKey] = useState(0); // para limpiar el input file
  const [error, setError] = useState("");
  const [ok, setOk] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setOk(false);
  };

  // Convertimos la imagen a base64 para poder mostrarla y guardarla
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return setImagen("");
    const reader = new FileReader();
    reader.onloadend = () => setImagen(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Number(form.id);
    const precio = Number(form.precio);
    const stock = Number(form.stock);

    if (!form.id || !form.nombre.trim() || !form.precio || form.stock === "") {
      return setError("Completá todos los campos.");
    }
    if (existingIds.includes(id)) return setError("Ya existe un producto con ese Id.");
    if (precio <= 0) return setError("El precio debe ser mayor a 0.");
    if (!Number.isInteger(stock) || stock < 0) return setError("El stock debe ser un entero positivo.");

    onAdd({
      id,
      nombre: form.nombre.trim(),
      precio,
      stock,
      categoria: "Nuevo",
      descripcion: "Producto agregado desde el formulario.",
      imagen,
    });

    setForm(initialForm);
    setImagen("");
    setFileKey((k) => k + 1);
    setOk(true);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>Agregar Nuevo Producto</h3>

      <label>Id:
        <input type="number" name="id" value={form.id} onChange={handleChange} />
      </label>
      <label>Nombre del Producto:
        <input type="text" name="nombre" placeholder="Ej: Teclado Mecánico" value={form.nombre} onChange={handleChange} />
      </label>
      <label>Precio:
        <input type="number" name="precio" placeholder="Ej: 95" value={form.precio} onChange={handleChange} />
      </label>
      <label>Stock:
        <input type="number" name="stock" placeholder="Ej: 5" value={form.stock} onChange={handleChange} />
      </label>
      <label>Imagen:
        <input key={fileKey} type="file" accept="image/*" onChange={handleFile} />
      </label>

      {imagen && <img className="preview" src={imagen} alt="Vista previa" />}
      {error && <p className="error">{error}</p>}
      {ok && <p className="ok">✅ Producto agregado</p>}

      <button type="submit">Guardar Producto</button>
    </form>
  );
}
