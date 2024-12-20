import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import myImage from "../assets/avatar2.jpg";

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
          <div className="flex">
            {/* Conteneur de l'image avec marges et taille */}
            <div className="mr-6 flex-shrink-0">
              <img src={myImage} alt="Avatar" className="w-42 h-80 mt-2  " />
              <div className="mt-2">
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
                ReactJS, React Native, Node.js, Express.js et MongoDB.{" "}
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
        </div>
      </div>
    </section>
  );
};

export default Resume;
