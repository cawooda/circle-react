import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const footerData = {
  contact: {
    heading: "Contact",
    email: "hello@circleindependent.com",
    phone: "0400442612",
    address: "PO Box 159 Mirboo North, 3871",
  },
  disclaimer: {
    heading: "Disclaimer",
    content: "The Copyright of all material is owned by Circle Independent",
  },
  credits: {
    heading: "Credits",
    content: "Made with ♥ by Circle Independent",
  },
};

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid>
        <Header fluid />
      </Container>
      <main>
        <Container className="py-5">
          <Outlet />
        </Container>
        <Container>
          <Footer
            contact={footerData.contact}
            disclaimer={footerData.disclaimer}
            credits={footerData.credits}
          />
        </Container>
      </main>
    </>
  );
}

export default App;
