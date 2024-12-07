import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const Experience = () => {
  const projects = [
    {
      title: "Projet personnel :",
      subtitle: "CV en ligne  | 12/2024",
      description: "Conception / Développement / Déploiement",
      technologies: ["ReactJS", "PNPM", "React-Bootstrap", "Tailwind"],
    },
    {
      subtitle: "Calendrier lunaire | 11/2024",
      description: "Conception / Développement",
      technologies: ["ReactJS", "Tailwind", "Jira", "GitHub"],
    },
    {
      title: "Projet de fin d'études :",
      subtitle:
        "Application mobile de colocation intergénérationnelle | 04/2024",
      description: "Conception / Développement / Déploiement",
      technologies: ["ReactJS", "Expo", "NodeJS", "ExpressJS", "MongoDB"],
    },
  ];

  const renderTechnologies = (technologies) => {
    return technologies.map((tech, index) => (
      <Badge key={index} className="me-2" bg="danger">
        {tech}
      </Badge>
    ));
  };

  return (
    <Card className="border-0">
      <Card.Header>EXPERIENCES PROFESSIONNELLES</Card.Header>
      <Card.Body>
        {projects.map((project, index) => (
          <div key={index}>
            <Card.Title>{project.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted pl-6 mt-3">
              - {project.subtitle}
            </Card.Subtitle>
            <Card.Text className="pl-9">
              <p>{project.description}</p>
              <p>Technologies : {renderTechnologies(project.technologies)}</p>
            </Card.Text>
          </div>
        ))}
        <Card.Title>Auto-entrepreneuse</Card.Title>
        <Card.Subtitle className="mb-2 text-muted pl-6 mt-3">
          <p>
            - Création et gestion d’une entreprise de vente de pièces et
            accessoires de moto, de produits alimentaires, et de mode en ligne |
            2014-2021
          </p>
          <p>
            {" "}
            - Gestion des stocks, des budgets, des approvisionnements, des
            livraisons et des clients | 2014-2021
          </p>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default Experience;
