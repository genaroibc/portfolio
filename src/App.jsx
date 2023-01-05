import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { useObserver } from "./hooks/useObserver";
import { useEffect } from "react";
import { Suspense } from "react";
import { Loader } from "./components/shared/Loader";

function App() {
  const { entries, setElements } = useObserver({});

  useEffect(() => {
    const observeElements = () => {
      const sections = document.querySelectorAll("section.animated-section");
      setElements(sections);
    };

    const observeElementsTimeout = setTimeout(observeElements, 2000);

    return () => {
      clearTimeout(observeElementsTimeout);
    };
  }, [setElements]);

  useEffect(() => {
    entries.forEach(entry => {
      entry.target.classList.toggle("section-visible", entry.isIntersecting);
    });
  }, [entries]);

  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default App;
