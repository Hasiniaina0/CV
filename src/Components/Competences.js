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
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Tailwind",
      "React Bootstrap",
    ],

    Outils: ["Git", "GitHub", "Jira", "Figma", "Redux", "TDD"],
  };

  return (
    <div
      id="competences"
      className="container px-6 py-12 max-w-screen-lg mx-auto"
    >
      <h2
        className="text-4xl font-semibold text-center text-gray-900 mb-12"
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
          <h3 className="text-2xl text-center  font-medium text-teal-600 mb-6">
            {category}
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories[category].map((badge, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-gray-800 py-2 px-5 rounded-full text-lg font-medium shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
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
