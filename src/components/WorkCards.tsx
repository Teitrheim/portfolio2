import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const workItems = [
  {
    title: "Semester Project 2",
    description: "An auction website...",
    link: "https://thezanytradehouse.netlify.app",
    image: "auction_image.jpg", // Place in src/assets/
  },
  {
    title: "JavaScript Frameworks CA",
    description: "An e-commerce store...",
    link: "https://guileless-puppy-75e10b.netlify.app",
    image: "ecom_image.jpg", // Place in src/assets/
  },
  {
    title: "Project Exam 2",
    description: "A dynamic web application...",
    link: "https://projectexam2.netlify.app",
    image: "project_image.jpg", // Place in src/assets/
  },
];

const WorkCards: React.FC = () => {
  return (
    <Row className="my-5" id="work">
      {workItems.map((item, index) => (
        <Col key={index} sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={`/assets/${item.image}`} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary" href={item.link} target="_blank">
                View Project
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default WorkCards;
