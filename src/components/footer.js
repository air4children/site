import React from "react";
import { Link } from "gatsby";
import { Nav } from "react-bootstrap";
import {
    navLinkText,
    copyrightText
  } from '../css/footer.module.css'

const Footer = () => {
  return (
    <footer>
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link>
                    <Link to="/" className={navLinkText}>
                        Home
                    </Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/about" className={navLinkText}>
                        About
                    </Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/" className={navLinkText}>
                        Link
                    </Link>
                </Nav.Link>
            </Nav.Item>
        </Nav>
        <p className={copyrightText}>
            Copyright air4Children - 2022
        </p>
    </footer>
  );
};

export default Footer;
