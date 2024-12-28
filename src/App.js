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
import Competences from "./Components/Competences";
import Footer from "./Components/Footer";

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
      <Competences id="competences" />
      <Formation id="formation" />
      <Footer />
    </div>
  );
}

export default App;
