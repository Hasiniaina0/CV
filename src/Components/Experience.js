import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cv from "../assets/cv.png";
import calendrier from "../assets/calendrier.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import coloc from "../assets/coloc.png";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "Projet personnel : Création d'un CV en ligne",
      date: "Décembre 2024",
      description: "Conception / Développement",
      image: cv,
      technologies: ["ReactJS", "PNPM", "React-Bootstrap", "Tailwind", "AOS"],
      link: "https://github.com/Hasiniaina0/CV-reactJS",
    },
    {
      title: "Projet personnel : Création d'un calendrier lunaire",
      date: "Novembre 2024",
      description: "Conception / Développement / Déploiement",
      image: calendrier,
      technologies: ["ReactJS", "Tailwind", "Jira", "GitHub"],
      link: "https://github.com/Hasiniaina0/calendrier-lunaire",
    },
    {
      title:
        "Projet de fin d'études : Application mobile de colocation intergénérationnelle",
      date: "Avril 2024",
      description: "Conception / Développement / Déploiement",
      image: coloc,
      technologies: ["ReactJS", "Expo", "NodeJS", "ExpressJS", "MongoDB"],
      link: "https://github.com/Hasiniaina0/HARMONY-HOME-Frontend",
    },
  ];

  const renderTechnologies = (technologies) => {
    return technologies.map((tech, index) => (
      <span
        key={index}
        className="text-sm bg-slate-200 text-slate-900 rounded px-3 py-1 mr-2 mb-2 shadow-md hover:bg-teal-600 transition duration-300"
      >
        {tech}
      </span>
    ));
  };

  return (
    <section id="experiences" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          data-aos="fade-up"
        >
          Expériences professionnelles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500">{project.date}</p>
                <h3 className="text-xl font-semibold text-gray-800">
                  - {project.title}
                </h3>

                <p className="text-gray-700 mt-4">{project.description}</p>
                <div className="mt-4 flex flex-wrap ">
                  {renderTechnologies(project.technologies)}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className="mt-4 inline-block text-teal-600 hover:text-teal-800 font-medium"
                  >
                    Voir le projet
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          className="bg-white mt-3 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          data-aos="fade-up"
          data
        >
          <div className="grid md:grid-cols-1 lg:grid-cols-1  ">
            <div className="p-6">
              <p className="text-sm text-gray-500">2114 - 2021</p>
              <h3 className="text-xl font-semibold text-gray-800">
                - Auto-entrepreneur
              </h3>

              <ListGroup>
                <ListGroup.Item action variant="light">
                  Création et gestion d’une entreprise de vente de pièces,
                  consommables et accessoires de moto,
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                  Création et gestion d’une entreprise de vente de produits
                  alimentaires,
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                  Création et gestion d’une entreprise de vente de mode en
                  ligne.
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
