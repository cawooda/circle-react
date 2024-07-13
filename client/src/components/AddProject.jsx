import { Container, Button, Form } from "react-bootstrap";

import dayjs from "dayjs";

function AddProject() {
  return (
    <>
      <Container>
        <h2 className="py-4">Add Project</h2>
        <Form className="py-3">
          <Form.Group className="mb-3" controlId="addProjectName">
            <Form.Label>Project Name</Form.Label>
            <Form.Control type="text" placeholder="project name" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="addProjectDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={10} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default AddProject;
