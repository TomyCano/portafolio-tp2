const Skills = ({ habilidades }) => (
  <section className="page-section">
    <p className="eyebrow">Lo que estoy aprendiendo</p>
    <h1>Habilidades</h1>
    <p className="lead">Tecnologias y herramientas que uso en mis practicas.</p>
    <div className="skills-grid">
      {habilidades.map((habilidad, indice) => (
        <article className="skill-card" key={habilidad}>
          <span>{String(indice + 1).padStart(2, '0')}</span>
          <h2>{habilidad}</h2>
          <p>Tecnologia que estoy aprendiendo y usando en mis practicas.</p>
        </article>
      ))}
    </div>
  </section>
)

export default Skills