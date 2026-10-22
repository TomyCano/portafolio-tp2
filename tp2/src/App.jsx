import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

const App = () => {
  const persona = {
    nombre: 'Tomas Cano',
    edad: 20,
    universidad: 'UTN Tucuman',
    carrera: 'Tecnicatura en Programacion',
  }

  const profesion = 'Estudiante de Programacion'
  const habilidades = ['HTML', 'CSS', 'JavaScript', 'React', 'MySQL', 'Redis', 'C#', 'Git', 'GitHub']
  const proyectos = [
    {
      nombre: 'Gestor de empleados',
      descripcion: 'Sistema para organizar tareas, consultar estadisticas y comparar perfiles de ingresantes.',
      tecnologias: 'React, JavaScript y CSS',
    },
    {
      nombre: 'Portfolio personal',
      descripcion: 'Pagina para presentar mi perfil, las tecnologias que uso y mis proyectos.',
      tecnologias: 'React, Vite y CSS',
    },
    {
      nombre: 'Practicas de programacion',
      descripcion: 'Ejercicios y proyectos realizados durante mi formacion en programacion.',
      tecnologias: 'JavaScript, React, C# y MySQL',
    },
  ]

  return (
    <BrowserRouter>
      <div className="portfolio-layout">
        <Sidebar persona={persona} />
        <div className="portfolio-main">
          <main className="portfolio-content">
            <Routes>
              <Route path="/" element={<Home persona={persona} profesion={profesion} />} />
              <Route path="/about" element={<About persona={persona} />} />
              <Route path="/skills" element={<Skills habilidades={habilidades} />} />
              <Route path="/projects" element={<Projects proyectos={proyectos} />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer persona={persona} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

