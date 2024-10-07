import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <Navbar expand="lg" className="header-navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#work" className="header-link">
            Work
          </Nav.Link>
          <Nav.Link href="#skills" className="header-link">
            Skills
          </Nav.Link>
          <Nav.Link href="#about" className="header-link">
            About Me
          </Nav.Link>
          <Nav.Link href="#contact" className="header-link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
