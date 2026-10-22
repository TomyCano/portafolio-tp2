import { useState } from 'react'

const About = ({ persona }) => {
  const [mostrarMas, setMostrarMas] = useState(false)

  const cambiarTexto = () => {
    setMostrarMas(!mostrarMas)
  }

  return (
    <section className="page-section">
      <p className="eyebrow">Sobre mi</p>
      <h1>Perfil personal</h1>
      <article className="content-card">
        <h2>Quien soy</h2>
        <p>
          Soy {persona.nombre}, estudiante de la Tecnicatura en Programacion en la {persona.universidad}.
          Me interesa el desarrollo web, las bases de datos y crear herramientas que ayuden a resolver problemas cotidianos.
        </p>
        <p>Actualmente estoy cursando mi carrera y practicando con las tecnologias que aprendo en clase.</p>
        {mostrarMas && (
          <p>Mi objetivo es seguir aprendiendo y participar en proyectos donde pueda aplicar lo que estudio y trabajar en equipo.</p>
        )}
        <button className="skill-filter" type="button" onClick={cambiarTexto}>
          {mostrarMas ? 'Ver menos' : 'Ver mas'}
        </button>
      </article>
      <div className="info-row">
        <div className="info-card"><strong>{persona.edad}</strong><span>Años</span></div>
        <div className="info-card"><strong>{persona.carrera}</strong><span>Formacion</span></div>
      </div>
    </section>
  )
}

export default About
