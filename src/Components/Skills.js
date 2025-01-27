import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiFigma,
  SiJira,
  SiReactbootstrap,
} from "react-icons/si";
import { TbUserCode } from "react-icons/tb";
import { SiExpo } from "react-icons/si";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const categories = {
    Technologies: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "ReactJS", icon: <FaReact className="text-blue-500" /> },
      { name: "NextJS", icon: <SiNextdotjs className="text-gray-800" /> },
      { name: "React Native", icon: <FaReact className="text-blue-500" /> },
      { name: "Expo", icon: <SiExpo className="text-blue-500" /> },
      { name: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
      { name: "ExpressJS", icon: <SiExpress className="text-gray-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
      { name: "Jest", icon: <TbUserCode className="text-purple-600" /> },
      {
        name: "React Bootstrap",
        icon: <SiReactbootstrap className="text-blue-500" />,
      },
    ],

    "Outils et Méthodes": [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
      { name: "Jira", icon: <SiJira className="text-blue-700" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-500" /> },

      { name: "TDD", icon: <TbUserCode className="text-green-500" /> },
    ],
  };

  return (
    <div id="competences" className="container px-6 py-16 max-w-screen-lg mx-auto">
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
            {categories[category].map((item, idx) => (
              <span
                key={idx}
                className="flex items-center gap-2 bg-gray-200 text-gray-800 py-2 px-5 rounded-full text-lg font-medium shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
              >
                {item.icon} {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
