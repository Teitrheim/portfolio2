import React from "react";
import { Container } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container className="text-center">
        <p>
          &copy; {new Date().getFullYear()} Portfolio2. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
