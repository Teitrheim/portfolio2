import React from "react";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <header className="custom-header">
      <Navbar expand="lg" className="navbar-custom">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto custom-nav-links">
            <Nav.Link href="#home" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link href="#work" className="nav-link-custom">
              Work
            </Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">
              Skills
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">
              About Me
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
