import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Competences = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const categories = {
    Technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "ReactJS",
      "NextJS",
      "React Native",
    ],

    Outils: ["Git", "GitHub", "Jira", "Figma", "Redux", "TDD"],
    BackEnd: ["NodeJS", "ExpressJS", "MongoDB"],
    UI: ["Tailwind", "React Bootstrap"],
  };

  return (
    <div id="competences" className="container my-12 px-6">
      <h2
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        data-aos="fade-up"
      >
        Compétences
      </h2>
      {Object.keys(categories).map((category, index) => (
        <div
          key={index}
          className="mb-12"
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <h3 className="text-2xl font-semibold  text-gray-800 mb-8">
            {category}
          </h3>
          <div className="flex flex-wrap  gap-4">
            {categories[category].map((badge, idx) => (
              <span
                key={idx}
                className="bg-gray-(0text-white py-2 px-4 rounded-full text-lg shadow-lg transform hover:scale-105 transition duration-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Competences;
