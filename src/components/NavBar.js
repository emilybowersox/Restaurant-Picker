import React from "react";
// import Navbar from "react-bootstrap/NavBar";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Welcome</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="/pick">Where should I eat?</Nav.Link> */}
                            <Nav.Link href="/restaurants">Restaurant Picker</Nav.Link>

                            <NavDropdown title="Other Projects" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/parks">Parks</NavDropdown.Item>
                                <NavDropdown.Item href="/seleucids">Seleucids</NavDropdown.Item>
                                <NavDropdown.Item href="/cats">Cats</NavDropdown.Item>
                                <NavDropdown.Item href="/colorchanger">Color Changer</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;