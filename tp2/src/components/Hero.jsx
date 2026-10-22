const Hero = ({ persona,profesion }) => {
  return (
    <div>
    <section className="hero section" id="inicio">
      <div className="hero-grid" aria-hidden="true"></div>

      <div className="hero-content">
        <p className="eyebrow">Portfolio / Programacion / UTN Tucuman</p>
        <h1>{persona.nombre}</h1>
        <p className="hero-copy">
          Soy {profesion}, tengo 20 años y estoy aprendiendo a crear paginas y
          sistemas utiles. Me interesa construir interfaces claras y organizar
          bien la informacion.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#proyectos">Ver mis proyectos</a>
          <a className="ghost-button" href="#contacto">Contactarme</a>
        </div>
      </div>

      <div className="hero-side">
        <figure className="profile-card">
          <div className="profile-photo" aria-label="Iniciales del estudiante">
            <span>TC</span>
          </div>
          <figcaption>
            <strong>{persona.nombre}</strong>
            <span>{profesion}</span>
          </figcaption>
        </figure>

        <aside className="terminal-card" aria-label="Resumen personal">
          <div className="terminal-top"><span></span><span></span><span></span></div>
          <div className="terminal-body">
            <p><span className="prompt">PERFIL</span></p>
            <p>Nombre: {persona.nombre}</p>
            <p>Edad: {persona.edad}</p>
            <p>Universidad: {persona.universidad}</p>
            <p>Carrera: {persona.carrera}</p>
          </div>
        </aside>
      </div>
    </section>
    </div>
  )
}

export default Hero