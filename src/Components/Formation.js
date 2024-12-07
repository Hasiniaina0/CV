import Card from "react-bootstrap/Card";

const Formation = () => {
  const formations = [
    {
      title: "Titre RNCP Niveau 6 (en cours)",
      subtitle: "Concepteur Développeur Web et Mobile Fullstack",
      location: "La Capsule, Paris",
      date: "Avril 2024",
    },
    {
      title: "Master 1 en Génie Logiciel",
      location: "ISIME, Antananarivo Madagascar",
      date: "2014",
    },
    {
      title: "Licence en Génie Logiciel",
      location: "ISIME, Antananarivo Madagascar",
      date: "2013",
    },
    {
      title: "DTS en Informatique Général",
      location: "ISIME, Antananarivo Madagascar",
      date: "2012",
    },
  ];

  return (
    <Card>
      <Card.Header className="bg-gray-500">FORMATION</Card.Header>
      {formations.map((formation, index) => (
        <Card className="border-0 shadow-sm" key={index}>
          <Card.Body>
            <Card.Title>{formation.title}</Card.Title>
            {formation.subtitle && (
              <Card.Subtitle className="mb-1 text-muted">
                {formation.subtitle}
              </Card.Subtitle>
            )}
            <Card.Text>
              <strong>{formation.location}</strong>
              <br />
              <em>{formation.date}</em>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Card>
  );
};

export default Formation;
