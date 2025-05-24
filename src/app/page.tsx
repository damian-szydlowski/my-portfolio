import About from '../components/About';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
// import Projects from './components/Projects'; // Uncomment when ready
// import Skills from './components/Skills';     // Uncomment when ready
// import Contact from './components/Contact';   // Uncomment when ready

export default function Page() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Navbar />

      {/* Intro Section */}
      <section
        id="top"
        className="snap-start h-screen w-full flex flex-col items-center justify-center bg-black text-white"
      >
        <h1 className="text-5xl font-bold mb-4"> Damian Szydlowski</h1>
        <p className="text-lg tracking-wide opacity-70">Initializing Assembly Line...</p>
      </section>

      {/* About Section */}
      <section id="about" className="snap-start h-screen w-full bg-gray-900 text-white">
        <About />
      </section>

      {/* Projects Section (placeholder) */}
      <section id="projects" className="snap-start h-screen w-full flex items-center justify-center bg-gray-800 text-white">
        <h2 className="text-4xl">Project Conveyor Line</h2>
      </section>

      {/* Skills Section (placeholder) */}
      <section id="skills" className="snap-start h-screen w-full flex items-center justify-center bg-gray-700 text-white">
        <h2 className="text-4xl">Skills Circuit Panel</h2>
      </section>

      {/* Contact Section (placeholder) */}
      <section id="contact" className="snap-start h-screen w-full flex items-center justify-center bg-gray-600 text-white">
        <h2 className="text-4xl">Contact Terminal</h2>
      </section>
    </div>
  );
}