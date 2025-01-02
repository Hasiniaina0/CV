import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white py-4 text-center">
      <div className="container">
        <p className="mb-2">
          © 2024 Faramalala HARINIRINA - Tous droits réservés.
        </p>
        <ul className="list-inline">
          <li className="list-inline-item mx-3">
            <a
              href="https://www.linkedin.com/in/faramalala-harinirina-44a811287/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </li>
          <li className="list-inline-item mx-3">
            <a
              href="https://github.com/Hasiniaina0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub className="text-3xl" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
