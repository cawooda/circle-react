import Navigation from "./Navigation";
import Logo from "./Logo";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <>
      <Container>
        <Logo />
        <Navigation />
      </Container>
    </>
  );
}

export default Header;
