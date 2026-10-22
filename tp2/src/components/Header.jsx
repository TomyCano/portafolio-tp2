import { useState } from "react";

const Header = ({ persona }) => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const cerrarMenu = () => {
        setMenuAbierto(false);
    };

    return (
        <div>
            <header className="site-header">

                <a
                    className="brand"
                    href="#inicio"
                    aria-label={`Ir al inicio de ${persona.nombre}`}
                >
                    <span className="brand-mark">TC</span>
                    <span>{persona.nombre}</span>
                </a>

                <button
                    className="menu-button"
                    type="button"
                    aria-label="Abrir navegación"
                    aria-expanded={menuAbierto}
                    onClick={() => setMenuAbierto(!menuAbierto)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav
                    className={`nav-links ${menuAbierto ? "open" : ""}`}
                    aria-label="Navegación principal"
                >
                    <a href="#sobre-mi" onClick={cerrarMenu}>
                        Sobre mi
                    </a>

                    <a href="#skills" onClick={cerrarMenu}>
                        Habilidades
                    </a>

                    <a href="#proyectos" onClick={cerrarMenu}>
                        Proyectos
                    </a>

                    <a href="#contacto" onClick={cerrarMenu}>
                        Contacto
                    </a>
                </nav>

            </header>
        </div>
    );
};

export default Header;