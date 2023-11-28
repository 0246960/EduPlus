import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import "./Header.scss";

function Header() {
    return(
        <Navbar className="fixed-top" bg="primary body-tertiary" expand="md">
            <Container fluid>
            <LinkContainer to="/home"><Navbar.Brand>EduPlus</Navbar.Brand></LinkContainer>
                <Navbar.Toggle/>
                <Navbar.Collapse className="navs" id="basic-Navbar-nav">
                    <Nav className="ml-auto" variant="underline">
                        <Nav.Link href="/home#stats">Statistics</Nav.Link>
                        <Nav.Link href="/home#call-to-action">How to help</Nav.Link>
                        <LinkContainer to={"/about-us"}><Nav.Link href="#">About Us</Nav.Link></LinkContainer>
                        <Nav.Link>Log In</Nav.Link>
                        <Nav.Link>Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;