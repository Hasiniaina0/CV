import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Menu() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="shadow-lg"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1050,
      }}
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="text-light hover:underline">
          ACCUEIL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link
              href="#resume"
              className="text-light mx-3 hover:underline"
            >
              PROFIL
            </Nav.Link>
            <Nav.Link
              href="#experiences"
              className="text-light mx-3 hover:underline"
            >
              EXPERIENCES
            </Nav.Link>
            <Nav.Link
              href="#competences"
              className="text-light mx-3 hover:underline"
            >
              COMPETENCES
            </Nav.Link>
            <Nav.Link
              href="#formation"
              className="text-light mx-3 hover:underline"
            >
              FORMATION
            </Nav.Link>
            <Nav.Link
              href="#experiences"
              className="text-light mx-3 hover:underline"
            >
              REALISATIONS
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="text-light mx-3 hover:underline"
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
