import React from "react";
import "./HelpfulLinks.css";

const HelpfulLinks: React.FC = () => {
  return (
    <div className="helpful-links">
      <a
        href="https://github.com/Teitrheim"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub Profile"
      >
        <i className="fab fa-github helpful-icon"></i>
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn Profile"
      >
        <i className="fab fa-linkedin helpful-icon"></i>
      </a>
      <a href="mailto:teitrheim@gmail.com" title="Send Email">
        <i className="fas fa-envelope helpful-icon"></i>
      </a>
    </div>
  );
};

export default HelpfulLinks;
