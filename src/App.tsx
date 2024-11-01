import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HelpfulLinks from "./components/HelpfulLinks";
import { Container, Card, Button } from "react-bootstrap";
import selfieImage from "./assets/jobbbilde2.jpg";
import handsomeManImage from "./assets/a-handsome-blonde-man-with-a-big-beard-709007991.png";
import projectImage1 from "./assets/Screenshot zany.png";
import projectImage2 from "./assets/java2.png";
import projectImage3 from "./assets/exam2.png";
import resumePdf from "./assets/Ny CV.pdf";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [textSize, setTextSize] = useState(16);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const increaseTextSize = () => {
    const newSize = Math.min(textSize + 2, 24);
    setTextSize(newSize);
    document.documentElement.style.setProperty("--text-size", `${newSize}px`);
  };

  const decreaseTextSize = () => {
    const newSize = Math.max(textSize - 2, 12);
    setTextSize(newSize);
    document.documentElement.style.setProperty("--text-size", `${newSize}px`);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--text-size", `${textSize}px`);

    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    const handleScroll = () => {
      if (!scrollToTopBtn) return;

      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [textSize]);

  const projects = [
    {
      image: projectImage1,
      title: "The Zany Tradehouse",
      description:
        "An auction website where users can browse, search, and bid on items.",
      link: "https://thezanytradehouse.netlify.app",
      repo: "https://github.com/Teitrheim/THE-ZANY-TRADEHOUSE",
    },
    {
      image: projectImage2,
      title: "E-Commerce Store",
      description:
        "An eCommerce website built using React. It features a homepage, product pages, a cart, and a checkout page.",
      link: "https://guileless-puppy-75e10b.netlify.app",
      repo: "https://github.com/Teitrheim/Front-end-Frameworks",
    },
    {
      image: projectImage3,
      title: "Exam Project Holidaze",
      description:
        "A project involving complex data fetching and state management, showcasing advanced React skills.",
      link: "https://shiny-wisp-e94719.netlify.app/",
      repo: "https://github.com/Teitrheim/Holidaze.git",
    },
  ];

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Header />
      <div className="controls-container">
        <button onClick={toggleDarkMode} className="toggle-dark-mode">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <div className="text-size-buttons">
          <button onClick={increaseTextSize} className="text-resize-button">
            A+
          </button>
          <button onClick={decreaseTextSize} className="text-resize-button">
            A-
          </button>
        </div>
      </div>
      <Container className="main-container">
        <section id="home" className="text-center my-5 section-home">
          <h1 className="gold-text">Building the Future</h1>
          <img src={selfieImage} alt="My Photo" className="profile-image" />
          <p>
            I&apos;m Thomas Eitrheim, a front-end developer with expertise in
            creating engaging web experiences.
          </p>
          <Button
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="custom-button"
          >
            Download Resume
          </Button>
        </section>

        <section id="work" className="my-5 section-work">
          <h2 className="gold-text">My Work</h2>
          <div className="project-cards-container">
            {projects.map((project, index) => (
              <Card key={index} className="project-card mx-3 my-3">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={`${project.title} screenshot`}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="button-group">
                    <Button
                      className="custom-button"
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repo
                    </Button>
                    <Button
                      className="custom-button"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Site
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="my-5 section-skills">
          <h2 className="gold-text">My Skills</h2>
          <div className="skills-bars">
            <div className="skill">
              <span className="gold-text skill-label">JavaScript</span>
              <div className="skill-bar skill-javascript"></div>
            </div>
            <div className="skill">
              <span className="gold-text skill-label">React & TypeScript</span>
              <div className="skill-bar skill-react"></div>
            </div>
            <div className="skill">
              <span className="gold-text skill-label">HTML & CSS</span>
              <div className="skill-bar skill-html"></div>
            </div>
          </div>
        </section>

        <section id="about" className="my-5 section-about">
          <h2 className="gold-text">About Me</h2>
          <p className="about-text">
            Welcome to my portfolio! My name is Thomas Eitrheim. I find immense
            joy in everything about front-end development and am dedicated to
            creating engaging and responsive web experiences. This website
            showcases my projects and skills developed during my two years of
            studying at Noroff.
          </p>
          <img
            src={handsomeManImage}
            alt="My Photo"
            className="about-profile-image"
          />
          <p className="about-text">
            I believe in clean and efficient code to bring all my ideas to life.
            Feel free to explore my work and get in touch if you have any
            questions or collaboration opportunities.
          </p>
        </section>

        <section id="contact" className="my-5 section-contact">
          <h2 className="gold-text">Contact Me</h2>
          <p>Email: teitrheim@gmail.com</p>
          <div className="contact-links">
            <a
              href="https://github.com/Teitrheim"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-button"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-eitrheim"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-button"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <HelpfulLinks />
      </Container>
      <Footer />
      <div
        id="scrollToTopBtn"
        title="Go to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="scroll-to-top"
      >
        ↑
      </div>
    </div>
  );
};

export default App;
