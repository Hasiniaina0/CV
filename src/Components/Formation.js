import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap } from "react-icons/fa6";

const Formation = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const formations = [
    {
      title: "Titre RNCP Niveau 6",
      subtitle: "Concepteur Développeur Web et Mobile Fullstack",
      location: "La Capsule, Paris",
      date: "2024",
    },
    {
      title: "Master 1 en Génie Logiciel",
      location: "ISIME, Antananarivo Madagascar",
      date: "2014",
    },
    {
      title: "Licence en Génie Logiciel",
      location: "ISIME, Antananarivo Madagascar",
      date: "2013",
    },
    {
      title: "DTS en Informatique Général",
      location: "ISIME, Antananarivo Madagascar",
      date: "2012",
    },
  ];

  return (
    <div
      id="formation"
      className="pt-16 bg-gray-100 min-h-screen flex flex-col items-center"
    >
      <h2
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        data-aos="fade-up"
      >
        Formation
      </h2>
      <div className="space-y-6 w-full max-w-3xl">
        {formations.map((formation, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-slate-600"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center gap-3 mb-3">
              <FaGraduationCap className="text-slate-800 text-2xl" />
              <h3 className="text-xl font-semibold text-gray-800">
                {formation.title}
              </h3>
            </div>
            {formation.subtitle && (
              <p className="text-lg text-gray-500 italic">
                {formation.subtitle}
              </p>
            )}
            <p className="mt-2 text-gray-700">
              <span className="font-medium">{formation.location}</span> |{" "}
              <span className="text-yellow-700 font-medium">
                {formation.date}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Formation;
