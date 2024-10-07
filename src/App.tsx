import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HelpfulLinks from "./components/HelpfulLinks";
import WorkCards from "./components/WorkCards";
import { Container } from "react-bootstrap";
import selfieImage from "./assets/selfie.png";
import handsomeManImage from "./assets/a-handsome-blonde-man-with-a-big-beard-709007991.png";

const App: React.FC = () => {
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

        <WorkCards />

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
