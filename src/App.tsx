import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HelpfulLinks from "./components/HelpfulLinks";
import { Container, Card, Button } from "react-bootstrap";
import selfieImage from "./assets/selfie.png";
import handsomeManImage from "./assets/a-handsome-blonde-man-with-a-big-beard-709007991.png";
import projectImage1 from "./assets/Screenshot zany.png";
import projectImage2 from "./assets/java2.png";
import projectImage3 from "./assets/exam2.png";

const App: React.FC = () => {
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
      title: "JavaScript Frameworks CA",
      description:
        "An eCommerce website built using React. It features multiple pages such as a homepage, product pages, a cart, and a checkout page.",
      link: "https://guileless-puppy-75e10b.netlify.app",
      repo: "https://github.com/Teitrheim/Front-end-Frameworks",
    },
    {
      image: projectImage3,
      title: "Project Exam 2",
      description:
        "A project involving complex data fetching and state management, showcasing advanced React skills.",
      link: "https://project-exam-2.netlify.app",
      repo: "https://github.com/Teitrheim/Project-Exam-2",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Container>
        <section id="home" className="text-center my-5 section-home">
          <h1 className="gold-text">Building the Future</h1>
          <img src={selfieImage} alt="My Photo" className="profile-image" />
          <p>
            I&apos;m Thomas Eitrheim, a front-end developer with expertise in
            creating engaging web experiences.
          </p>
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
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React & TypeScript</li>
            <li>HTML & CSS</li>
            <li>Bootstrap, Responsive Design</li>
            <li>Git & Version Control</li>
            <li>WordPress</li>
            <li>Figma</li>
          </ul>
        </section>

        <section id="about" className="my-5 section-about">
          <h2 className="gold-text">About Me</h2>
          <p>
            Welcome to my portfolio! My name is Thomas Eitrheim. I find immense
            joy in everything about front-end development and am dedicated to
            creating engaging and responsive web experiences. This website
            showcases my projects and skills developed during my two years of
            studying at Noroff.
          </p>
          <img
            src={handsomeManImage}
            alt="My Photo"
            className="profile-image"
          />
          <p>
            I believe in clean and efficient code to bring all my ideas to life.
            Feel free to explore my work and get in touch if you have any
            questions or collaboration opportunities.
          </p>
        </section>

        <section id="contact" className="my-5 section-contact">
          <h2 className="gold-text">Contact Me</h2>
          <p>Email: teitrheim@gmail.com</p>
        </section>

        <HelpfulLinks />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
