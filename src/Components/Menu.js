import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Menu() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home" data-aos="fade-down">
          ACCUEIL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#competences" data-aos="fade-right">
              COMPETENCES
            </Nav.Link>
            <Nav.Link href="#experiences" data-aos="fade-right">
              EXPERIENCES
            </Nav.Link>
            <Nav.Link href="#formation" data-aos="fade-right">
              FORMATION
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#realisation" data-aos="fade-left">
              REALISATIONS
            </Nav.Link>
            <Nav.Link href="#contact" data-aos="fade-left" data-aos-delay="100">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
