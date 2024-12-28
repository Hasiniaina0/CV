import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const contacts = [
    {
      icon: <FaPhoneAlt className="text-white" />,
      title: "Téléphone",
      subtitle: "+33 6 23 77 90 42",
      bgColor: "bg-cyan-600",
    },
    {
      icon: <FaEnvelope className="text-white" />,
      title: "E-mail",
      subtitle: "hasiniaina.faramalala@gmail.com",
      bgColor: "bg-teal-500",
    },
    {
      icon: <FaMapMarkerAlt className="text-white" />,
      title: "Adresse",
      subtitle: "Yerres, 91330",
      bgColor: "bg-yellow-700",
    },
  ];

  return (
    <div id="contact" className="p-8 bg-gray-50 ">
      <h2
        className="text-3xl font-extrabold text-gray-800 mb-8 text-center"
        data-aos="fade-up"
      >
        Mes Contacts
      </h2>
      <p className="text-xl mb-3 text-center" data-aos="fade-up">
        A la recherche d'un emploi pour les postes de :
      </p>
      <p className="text-xl mb-14 text-center" data-aos="fade-up">
        Développeur fullstack | Développeur frontend
      </p>

      <div className="flex flex-wrap gap-8 justify-center">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className={`${contact.bgColor} flex justify-center items-center gap-4 mb-6 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow w-full max-w-sm md:max-w-xs`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="text-2xl">{contact.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                {contact.title}
              </h3>
              <p className="text-white">{contact.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
