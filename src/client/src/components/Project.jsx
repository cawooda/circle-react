import { Container, Card, CardGroup, Col, Row, Button } from "react-bootstrap";

import dayjs from "dayjs";

function Project({ projects }) {
  return (
    <>
      <Container>
        <CardGroup>
          {projects.map((project) => (
            <Card className="row gx-5" key="{project.id}">
              <Card.Img src={project.imageUrl}></Card.Img>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>

                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Col>
                  <Row>
                    <Button href="{project.link}" class="btn btn-info">
                      {project.title}
                    </Button>
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
