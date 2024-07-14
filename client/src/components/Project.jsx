import { Container, Card, CardGroup, Col, Row, Button } from "react-bootstrap";

import dayjs from "dayjs";

function Project({ projects }) {
  return (
    <>
      <Container className="p-3">
        <CardGroup>
          {projects.map((project) => (
            <Card className="row gx-5" key="{project.id}">
              <Card.Img src={project.imageUrl}></Card.Img>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>

                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Col className="p-3">
                  <Row className="p-1">
                    <a href={project.link}>
                      <Button variant="outline-info" size="lg">
                        {project.title}
                      </Button>
                    </a>
                  </Row>
                </Col>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </Container>
    </>
  );
}

export default Project;
