import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar from "../assets/avatar.jpg";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <header className="bg-stone-500 text-white py-6">
      <Container>
        <Row className="justify-content-md-center">
          <Col className="flex ">
            <Image
              src={Avatar}
              alt="Photo de profil"
              style={{
                width: "120px",
                height: "120px",
              }}
              roundedCircle
              className="border-4 border-white "
            />
          </Col>
          <Col sm className="mt-4 sm:mt-0">
            <Row>
              <h1 className="text-xl font-bold">HARINIRINA Faramalala H.</h1>
              <p className="text-lg ">Développeuse React</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
