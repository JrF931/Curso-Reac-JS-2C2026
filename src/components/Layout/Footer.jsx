
const equipo = [
  { nombre: "María García", rol: "Desarrollo Frontend", email: "MaríaGarcía@mitienda.com" },
  { nombre: "Joshua Fernandez", rol: "Diseño UX/UI", email: "JosFernandez@mitienda.com" },
  { nombre: "Carlos Rodríguez", rol: "Atención al cliente", email: "CarRodríguez@mitienda.com" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-empresa">
        <h3>Mi Tienda S.A.</h3>
        <p>Venta de tecnología y periféricos desde 2020.</p>
        <p>Ubicacion: Avenida Siempreviva 742, Buenos Aires, Argentina</p>
        <p>Email: JosFernandez@mitienda.com</p>
      </section>

      <section className="footer-equipo">
        <h3>Nuestro equipo</h3>
        <div className="cards">
          {equipo.map((p, i) => (
            <article className="card-persona" key={i}>
              <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={p.nombre} />
              <h4>{p.nombre}</h4>
              <p>{p.rol}</p>
              <small>{p.email}</small>
            </article>
          ))}
        </div>
      </section>

      <p className="copy">© {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
    </footer>
  );
}
