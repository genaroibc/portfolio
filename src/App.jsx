import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { useObserver } from "./hooks/useObserver";
import { useEffect } from "react";

function App() {
  const { entries, setElements } = useObserver({
    rootMargin: "-160px",
  });

  useEffect(() => {
    const sections = document.querySelectorAll("section.animated-section");
    setElements(sections);
  }, [setElements]);

  useEffect(() => {
    entries.forEach(entry => {
      entry.target.classList.toggle("section-visible", entry.isIntersecting);
    });
  }, [entries]);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
