import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({ persona }) => {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <header className="site-header">
      <NavLink
        to="/"
        className="brand"
        aria-label={`Ir al inicio de ${persona.nombre}`}
        onClick={cerrarMenu}
        end
      >
        <span className="brand-mark">TC</span>
        <span>{persona.nombre}</span>
      </NavLink>

      <button
        className="menu-button"
        type="button"
        aria-label="Abrir navegacion"
        aria-expanded={menuAbierto}
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        className={`nav-links ${menuAbierto ? 'open' : ''}`}
        aria-label="Navegacion principal"
      >
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={cerrarMenu}>
          Sobre mi
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''} onClick={cerrarMenu}>
          Habilidades
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={cerrarMenu}>
          Proyectos
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={cerrarMenu}>
          Contacto
        </NavLink>
      </nav>
    </header>
  )
}

export default Header