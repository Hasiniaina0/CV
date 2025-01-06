import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import myImage from "../assets/avatar1.jpg";
import Button from "react-bootstrap/Button";
import cv from "../assets/CV-FARAMALALA.pdf";

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="resume" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center text-gray-800 mb-8"
          data-aos="fade-up"
        >
          A propos de moi ?
        </h2>

        <div
          className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
              <img
                src={myImage}
                alt="Avatar"
                className="w-48 h-48 md:w-60 md:h-80 rounded object-cover"
              />
              <div className="mt-4  md:text-left">
                <strong>Atouts :</strong> autonome, capacité d'apprendre vite,
                <br /> curieuse et aime le travail en équipe.
              </div>
            </div>

            {/* Conteneur du texte */}
            <div>
              <p className="font-semibold text-lg">
                <strong>Nom: </strong> HARINIRINA <br />
                <strong>Prénom: </strong> Faramalala
                <br />
                <strong>Naissance: </strong>1991
                <br />
                <strong>Ville: </strong>Yerres (91330)
              </p>

              <p className="text-gray-700 text-lg mt-4 leading-relaxed tracking-wide">
                Développeur web et mobile, curieuse et passionnée par
                l’apprentissage des nouvelles technologies. Récemment formée en
                conception et développement d’applications modernes, je maîtrise
                ReactJS, React Native, Node.js, Express.js et MongoDB.
              </p>
              <p className="text-gray-700 text-lg mt-4 leading-relaxed tracking-wide">
                Je suis à la recherche d’une opportunité pour mettre en pratique
                mes compétences tout en explorant de nouveaux outils et
                frameworks.
              </p>
              <p className="text-gray-700 text-lg mt-4 leading-relaxed tracking-wide">
                Motivée à relever des défis techniques, je m’investis pleinement
                pour proposer des solutions innovantes et participer activement
                à la réussite des projets d’équipe.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4 mt-6 ">
            <Button
              className=" text-black  py-2 px-4 rounded-full border-2"
              href={cv}
              download
              variant="outline-warning"
            >
              Télécharger CV
            </Button>
            <Button
              className=" text-black  py-2 px-4 rounded-full border-2"
              href="#contact"
              variant="outline-warning"
            >
              Me contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
