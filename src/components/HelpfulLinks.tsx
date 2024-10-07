import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./HelpfulLinks.css";

const HelpfulLinks: React.FC = () => {
  return (
    <div className="helpful-links">
      <h3>Helpful Links</h3>
      <div className="links-container">
        <a
          href="https://github.com/Teitrheim"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icon"
        >
          <FaGithub size={40} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-id"
          target="_blank"
          rel="noopener noreferrer"
          className="link-icon"
        >
          <FaLinkedin size={40} />
          <span>LinkedIn</span>
        </a>
        <a href="mailto:your-email@example.com" className="link-icon">
          <FaEnvelope size={40} />
          <span>Email Me</span>
        </a>
      </div>
    </div>
  );
};

export default HelpfulLinks;
