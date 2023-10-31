import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import "./Header.scss";

function Header() {
    return(
        <Navbar className="navbar fixed-top" bg="light body-tertiary" expand="md">
            <Container fluid>
            <LinkContainer to="/home"><Navbar.Brand>Goal 4</Navbar.Brand></LinkContainer>
                <Navbar.Toggle/>
                <Navbar.Collapse className="navs justify-content-end" id="basic-Navbar-nav">
                    <Nav className="mr-auto" variant="underline">
                        <LinkContainer to="/statistics"><Nav.Link>Statistics</Nav.Link></LinkContainer> 
                        <LinkContainer to="/news"><Nav.Link>News</Nav.Link></LinkContainer>
                        <LinkContainer to="/how-to-help"><Nav.Link>How to help</Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;