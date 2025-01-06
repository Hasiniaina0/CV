import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiGithub,
  SiGit,
} from "react-icons/si";

const Badges = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en ms
    });
  }, []);

  const badges = [
    {
      text: "JavaScript",
      color: "bg-gradient-to-r from-blue-400 to-blue-600",
      icon: <SiJavascript />,
    },
    {
      text: "ReactJS",
      color: "bg-gradient-to-r from-teal-400 to-teal-600",
      icon: <SiReact />,
    },
    {
      text: "React native",
      color: "bg-gradient-to-r from-teal-400 to-teal-600",
      icon: <SiReact />,
    },
    {
      text: "Node.js",
      color: "bg-gradient-to-r from-green-400 to-green-600",
      icon: <SiNodedotjs />,
    },
    {
      text: "ExpressJS",
      color: "bg-gradient-to-r from-gray-400 to-gray-600",
      icon: <SiExpress />,
    },
    {
      text: "MongoDB",
      color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      icon: <SiMongodb />,
    },
    {
      text: "Redux",
      color: "bg-gradient-to-r from-purple-400 to-purple-600",
      icon: <SiRedux />,
    },
    {
      text: "NextJS",
      color: "bg-gradient-to-r from-red-400 to-red-600",
      icon: <SiNextdotjs />,
    },
    {
      text: "Git",
      color: "bg-gradient-to-r from-gray-400 to-purple-400  ",
      icon: <SiGit />,
    },
    {
      text: "GitHub",
      color: "bg-gradient-to-r from-gray-700 to-gray-900",
      icon: <SiGithub />,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10 mb-10 items-center">
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`flex items-center text-white text-lg px-4 py-2 rounded-full shadow-lg transform hover:scale-110 transition duration-300 ${badge.color}`}
          data-aos="zoom-in"
          data-aos-delay={200 + index * 100} // Ajout d'un délai progressif
        >
          <span className="text-2xl mr-2">{badge.icon}</span>
          {badge.text}
        </div>
      ))}
    </div>
  );
};

export default Badges;
