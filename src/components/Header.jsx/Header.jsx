import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.scss';

function Header() {
  return (
    <Navbar className="fixed-top custom-navbar" expand="md">
      <Container fluid>
        <LinkContainer to="/home">
          <Navbar.Brand>EduPlus</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" variant="underline">
            <Nav.Link href="/home#stats">Statistics</Nav.Link>
            <Nav.Link href="/home#call-to-action">How to help</Nav.Link>
            <LinkContainer to={"/about-us"}><Nav.Link href="#">Contact us</Nav.Link></LinkContainer>
            <LinkContainer to="/login"><Nav.Link>Sign In</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
