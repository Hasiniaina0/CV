import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import headerImage from "../assets/lohany.jpg";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with options
  }, []);

  return (
    <header
      className="relative h-screen text-white  flex items-center justify-end  "
      style={{
        backgroundImage: `url(${headerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      s
    >
      <div className="absolute bg-opacity-50"></div>
      <div className=" relative text-center pt-96">
        <h1
          className="text-4xl md:text-4xl lg:text-6xl font-bold mb-7  text-slate-400"
          data-aos="zoom-in"
        >
          Bienvenue sur mon CV en ligne
        </h1>
        <p
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  mb-7 text-slate-400 "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Je suis Faramalala HARINIRINA,
        </p>
        <p
          className="text-2xl md:text-6xl mb-16 text-slate-700 font-bold underline decoration-pink-500/30 "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Développeur fullstack JS{" "}
        </p>
        <a
          href="#about"
          className="bg-emerald-600  text-white px-6 py-3 rounded-full text-lg hover:bg-cyan-700 transition duration-300"
          data-aos="zoom-in"
        >
          Découvrez mes projets
        </a>
      </div>
    </header>
  );
};
export default Header;
