import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Resume from "./Components/Resume";
import Experience from "./Components/Experience";
import Formation from "./Components/Formation";
import Menu from "./Components/Menu";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Durée de l'animation (en ms)
    });
  }, []);

  return (
    <div className="App">
      <Menu />
      <Header />
      <Resume id="resume" />
      <Experience id="experiences" />
      <Skills id="competences" />
      <Formation id="formation" />
      <Contact id="contact" />
      <Footer id="contact" />
    </div>
  );
}

export default App;
