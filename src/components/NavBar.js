import React from "react";
// import Navbar from "react-bootstrap/NavBar";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Welcome</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/restaurants">Restaurants</Nav.Link>
                            <Nav.Link href="/parks">Parks</Nav.Link>
                            <Nav.Link href="/seleucids">Seleucids</Nav.Link>
                            <Nav.Link href="/cats">Cats</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;