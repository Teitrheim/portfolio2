import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HelpfulLinks from "./components/HelpfulLinks";
import WorkCards from "./components/WorkCards";
import { Container } from "react-bootstrap";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Container>
        <section id="home" className="text-center my-5">
          <h1>Welcome to My Portfolio</h1>
          <img
            src="/assets/my_photo.jpg"
            alt="My Photo"
            className="rounded-circle"
            width="150"
          />
          <p>
            Hello! I&apos;m Thomas Eitrheim, a front-end developer with
            expertise in Front End Development!
          </p>
        </section>

        <WorkCards />

        <section id="skills" className="my-5">
          <h2>My Skills</h2>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React & TypeScript</li>
            <li>HTML & CSS</li>
            <li>Bootstrap, Responsive Design</li>
            <li>Git & Version Control</li>
            <li>WordPress</li>
            <li>Figma</li>
          </ul>
        </section>

        <section id="about" className="my-5">
          <h2>About Me</h2>
          <p>
            Welcome to my portfolio! My name is Thomas Eitrheim. I find immense
            joy in everything about front-end development and am dedicated to
            creating engaging and responsive web experiences. This website
            showcases my projects and skills developed during my two years of
            studying at Noroff.
          </p>
          <img
            src="/assets/my_photo.jpg"
            alt="My Photo"
            className="rounded-circle"
            width="150"
          />
          <p>
            I believe in clean and efficient code to bring all my ideas to life.
            Feel free to explore my work and get in touch if you have any
            questions or collaboration opportunities.
          </p>
        </section>

        <section id="contact" className="my-5">
          <h2>Contact Me</h2>
          <p>Email: teitrheim@gmail.com</p>
        </section>

        <HelpfulLinks />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
