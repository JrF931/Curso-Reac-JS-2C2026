
const KEY = "productosNuevos";

export const getProductosLocales = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
};

export const saveProductoLocal = (producto) => {
  const actuales = getProductosLocales();
  localStorage.setItem(KEY, JSON.stringify([...actuales, producto]));
};
