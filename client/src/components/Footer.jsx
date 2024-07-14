import { Container, Col, Row } from "react-bootstrap";

function Footer({ contact, disclaimer, credits }) {
  return (
    <>
      <Container className="py-5 border-top">
        <Row className="row-cols-2 row-cols-lg-2 g-2 g-lg-3">
          <Col className="gx-5 gy-2 p-3">
            <h3>{disclaimer.heading}</h3>
            <p>{disclaimer.content}</p>
          </Col>
          <Col className="gx-5 gy-2 p-3">
            <h3>{credits.heading}</h3>
            <p>{credits.content}</p>
          </Col>
        </Row>
        <Row className="p-5 text-center">
          <h3>{contact.heading}</h3>
          <h5>Email:</h5>
          <p>{contact.email}</p>
          <h5>Address</h5>
          <p>{contact.address}</p>
          <h5>Phone:</h5>
          <p>{contact.phone}</p>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
