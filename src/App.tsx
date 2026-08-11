import Contact from "./components/Contacts";
import Education from "./components/Education&Goals";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
