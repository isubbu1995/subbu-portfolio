import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Metrics from "./components/Metrics";
import Experience from "./components/Experience";
import Timeline from "./components/Timeline";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Experience />
        <Metrics />
        <Project />
        <Contact />
      </div>
    </div>
  );
}