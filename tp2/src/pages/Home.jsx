const Home = ({ persona, profesion }) => (
  <section className="page-section home-page">
    <p className="eyebrow">Portfolio / Programacion / UTN Tucuman</p>
    <h1>{persona.nombre}</h1>
    <h2>{profesion}</h2>
    <p className="lead">
      Tengo {persona.edad} años y estoy aprendiendo a crear paginas y sistemas utiles.
      Me interesa construir interfaces claras y organizar bien la informacion.
    </p>
    <div className="home-card">
      <span className="home-initials">TC</span>
      <div>
        <h3>Bienvenido a mi portfolio</h3>
        <p>Usa el menu para conocer mi perfil, mis habilidades, mis proyectos y mis datos de contacto.</p>
      </div>
    </div>
  </section>
)

export default Home
