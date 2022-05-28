import React from "react";
import { Link } from "gatsby";
import { Navbar, Container, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import {
    nav,
    navLinkText
  } from '../css/header.module.css'

const Header = () => {
  return (
    <header>
        <Navbar expand="lg" variant="light" bg="light" className={nav}>
            <Container>
                <Navbar.Brand>
                    <Link to="/" className={navLinkText}>
                        air-4-children
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link>
                            <Link to="/about" className={navLinkText}>
                                About
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/workshops" className={navLinkText}>
                                Workshops
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title="Actions" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            <Link to="/volunteering" className={navLinkText}>
                                Volunteering
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link to="/team" className={navLinkText}>
                                Team
                            </Link>
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Xicohtzinco</NavDropdown.Item> */}
                    </NavDropdown>
                    <Form className="d-flex">
                        <Button variant="outline-success">
                            <Link to="/donations" className={navLinkText}>
                                Donate
                            </Link>
                        </Button>
                    </Form>
                    {/* <NavDropdown title="lang" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Spanish</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">French</NavDropdown.Item>
                    </NavDropdown> */}
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    </header>
  );
};

export default Header;
