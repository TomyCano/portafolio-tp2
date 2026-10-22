const Projects = ({ proyectos }) => (
  <section className="page-section">
    <p className="eyebrow">Trabajos e ideas</p>
    <h1>Mis proyectos</h1>
    <p className="lead">Una seleccion de proyectos y practicas de mi formacion.</p>
    <div className="projects-grid">
      {proyectos.map((proyecto, indice) => (
        <article className="project-card" key={proyecto.nombre}>
          <span className="project-number">{String(indice + 1).padStart(2, '0')}</span>
          <h2>{proyecto.nombre}</h2>
          <p>{proyecto.descripcion}</p>
          <small>{proyecto.tecnologias}</small>
        </article>
      ))}
    </div>
  </section>
)

export default Projects
