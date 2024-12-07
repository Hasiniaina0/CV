import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

const Badges = () => {
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="mt-2 p-1  flex-wrap justify-center"
    >
      <Badge bg="primary" className="d-flex align-items-center pt-10 fs-6">
        JavaScript
      </Badge>
      <Badge bg="secondary" className="d-flex align-items-center fs-6">
        HTML
      </Badge>
      <Badge bg="success" className="d-flex align-items-center fs-6">
        ReactJS
      </Badge>
      <Badge bg="danger" className="d-flex align-items-center fs-6">
        React Native
      </Badge>
      <Badge
        bg="warning"
        text="dark"
        className="d-flex align-items-center fs-6"
      >
        CSS
      </Badge>
      <Badge bg="info" className="d-flex align-items-center fs-6">
        Tailwind
      </Badge>
      <Badge bg="primary" className="d-flex align-items-center fs-6">
        Agile
      </Badge>
      <Badge bg="info" text="dark" className="d-flex align-items-center fs-6">
        GitHub
      </Badge>
      <Badge bg="danger" className="d-flex align-items-center fs-6">
        React Native
      </Badge>
      <Badge bg="dark" className="d-flex align-items-center fs-6">
        Jira
      </Badge>
      <Badge bg="success" className="d-flex align-items-center fs-6">
        Git
      </Badge>
      <Badge bg="info" className="d-flex align-items-center fs-6">
        React Bootstrap
      </Badge>
      <Badge bg="danger" className="d-flex align-items-center fs-6">
        MongoDB
      </Badge>
      <Badge bg="primary" className="d-flex align-items-center fs-6">
        Expo
      </Badge>
      <Badge bg="dark" className="d-flex align-items-center fs-6">
        MongoDB
      </Badge>
      <Badge bg="info" className="d-flex align-items-center fs-6">
        ExpressJS
      </Badge>
      <Badge bg="primary" className="d-flex align-items-center fs-6">
        NextJS
      </Badge>
      <Badge bg="secondary" className="d-flex align-items-center fs-6">
        Vercel
      </Badge>
      <Badge bg="danger" className="d-flex align-items-center fs-6">
        Figma
      </Badge>
      <Badge bg="success" className="d-flex align-items-center fs-6">
        Redux
      </Badge>
      <Badge bg="danger" className="d-flex align-items-center fs-6">
        TDD
      </Badge>
    </Stack>
  );
};

export default Badges;
