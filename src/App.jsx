import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}