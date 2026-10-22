import { NavLink } from 'react-router-dom'

const Sidebar = ({ persona }) => (
  <aside className="portfolio-sidebar">
    <div className="sidebar-brand">
      <span className="brand-mark">TC</span>
      <div>
        <strong>{persona.nombre}</strong>
        <span>Portfolio personal</span>
      </div>
    </div>

    <p className="sidebar-label">Navegacion</p>
    <nav className="sidebar-nav" aria-label="Navegacion principal">
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/about">Sobre mi</NavLink>
      <NavLink to="/skills">Habilidades</NavLink>
      <NavLink to="/projects">Proyectos</NavLink>
      <NavLink to="/contact">Contacto</NavLink>
    </nav>

    <div className="sidebar-note">
      <span>PERFIL</span>
      <p>{persona.carrera}</p>
      <small>{persona.universidad}</small>
    </div>
  </aside>
)

export default Sidebar
