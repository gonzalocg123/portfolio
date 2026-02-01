import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { portfolioData } from "./data/portfolioData";

/* 
 * Soy Gonzalo, estudiante de 19 años de DAM (Desarrollo de Aplicaciones Multiplataforma).
 * He optimizado este archivo principal para que sea lo más modular posible.
 * Cada sección del portafolio está encapsulada en su propio componente.
 * Esto facilita la mantenibilidad y escalabilidad del código.
 */
function App() {
  return (
    <div className="min-h-screen bg-bg-dark">
      <Navbar />
      <main>
        {/* Usamos un solo objeto de datos para centralizar la información, muy cómodo para escalarlo */}
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills data={portfolioData} />
        <Projects data={portfolioData} />
        <Roadmap data={portfolioData} />
        <Contact data={portfolioData} />
      </main>
      <Footer data={portfolioData} />
      <BackToTop />
    </div>
  );
}

export default App;

