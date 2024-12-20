import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const Badges = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en ms
    });
  }, []);

  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="flex-wrap justify-center mt-10  items-center"
    >
      <Badge
        pill
        bg="primary"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        JavaScript
      </Badge>
      <Badge
        pill
        bg="secondary"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        HTML
      </Badge>
      <Badge
        pill
        bg="success"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        ReactJS
      </Badge>
      <Badge
        pill
        bg="primary"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        React Native
      </Badge>
      <Badge
        pill
        bg="secondary"
        text="white"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        CSS
      </Badge>
      <Badge
        pill
        bg="success"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Tailwind
      </Badge>
      <Badge
        pill
        bg="primary"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Agile
      </Badge>
      <Badge
        pill
        bg="secondary"
        text="white"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        GitHub
      </Badge>
      <Badge
        pill
        bg="success"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        React Native
      </Badge>
      <Badge
        pill
        bg="primary"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Jira
      </Badge>
      <Badge
        pill
        bg="secondary"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Git
      </Badge>
      <Badge
        pill
        bg="success"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        React Bootstrap
      </Badge>
      <Badge
        pill
        bg="primary"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        MongoDB
      </Badge>
      <Badge
        pill
        bg="secondary"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Expo
      </Badge>
      <Badge
        pill
        bg="success"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        MongoDB
      </Badge>
      <Badge
        pill
        bg="primary"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        ExpressJS
      </Badge>
      <Badge
        pill
        bg="secondary"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        NextJS
      </Badge>
      <Badge
        pill
        bg="success"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Vercel
      </Badge>
      <Badge
        pill
        bg="primary"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Figma
      </Badge>
      <Badge
        pill
        bg="secondary"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Redux
      </Badge>
      <Badge
        pill
        bg="success"
        className="d-flex items-center justify-center w-28 h-12 text-lg shadow-lg transform hover:scale-110 transition duration-300"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        TDD
      </Badge>
    </Stack>
  );
};

export default Badges;
