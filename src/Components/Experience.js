import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cv from "../assets/cv.png";
import calendrier from "../assets/calendrier.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import coloc from "../assets/harmony.jpg";
import cvImg from "../assets/cv-img.png";
import calendrierImg from "../assets/calendrier-img.png";
import colocImg from "../assets/coloc-img.png";
import { FaGithub, FaEye } from "react-icons/fa";

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
      source: cvImg,
    },
    {
      title: "Projet personnel : Création d'un calendrier lunaire",
      date: "Novembre 2024",
      description: "Conception / Développement / Déploiement",
      image: calendrier,
      technologies: ["ReactJS", "Tailwind", "Jira", "GitHub"],
      link: "https://github.com/Hasiniaina0/calendrier-lunaire",
      source: calendrierImg,
    },
    {
      title:
        "Projet de fin d'études : Application mobile de colocation intergénérationnelle",
      date: "Avril 2024",
      description: "Conception / Développement / Déploiement",
      image: coloc,
      technologies: ["ReactJS", "Expo", "NodeJS", "ExpressJS", "MongoDB"],
      link: [
        {
          name: "Frontend",
          url: "https://github.com/Hasiniaina0/HARMONY-HOME-Frontend",
        },
        {
          name: "Backend",
          url: "https://github.com/Hasiniaina0/HARMONY-HOMY-Backend",
        },
      ],
      source: colocImg,
    },
  ];

  const renderTechnologies = (technologies) =>
    technologies.map((tech, index) => (
      <span
        key={index}
        className="inline-block text-sm bg-slate-200 text-slate-950 rounded-full px-3 py-1 mr-2 mb-2 hover:bg-slate-300 transition"
      >
        {tech}
      </span>
    ));

  return (
    <section id="experiences" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          data-aos="fade-up"
        >
          Expériences professionnelles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{project.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {renderTechnologies(project.technologies)}
                </div>
                <div className="flex justify-between items-center gap-4">
                  {Array.isArray(project.link) ? (
                    project.link.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-teal-600 hover:text-teal-800 font-medium"
                        aria-label={`GitHub - ${link.name}`}
                      >
                        <FaGithub className="text-xl text-orange-950" />
                        {link.name}
                      </a>
                    ))
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-teal-600 hover:text-teal-800 font-medium"
                      aria-label="Lien GitHub"
                    >
                      <FaGithub className="text-xl text-orange-950" />
                      Lien GitHub
                    </a>
                  )}
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-teal-600 hover:text-teal-800 font-medium"
                    aria-label="Voir le projet"
                  >
                    <FaEye className="text-xl text-orange-950" />
                    Voir le projet
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="bg-white mt-10 rounded-lg shadow-lg overflow-hidden"
          data-aos="fade-up"
        >
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">2014 - 2021</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Auto-entrepreneur
            </h3>
            <ListGroup>
              <ListGroup.Item>
                - Création et gestion d’une entreprise de vente de pièces,
                consommables et accessoires de moto.
              </ListGroup.Item>
              <ListGroup.Item>
                - Création et gestion d’une entreprise de vente de produits
                alimentaires.
              </ListGroup.Item>
              <ListGroup.Item>
                - Création et gestion d’une entreprise de vente de mode en
                ligne.
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
