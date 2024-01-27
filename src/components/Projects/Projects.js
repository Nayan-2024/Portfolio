import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

import chess from '../../Assets/Projects/chess.png'
import music from '../../Assets/Projects/music.avif'
import amazon from '../../Assets/Projects/amazon.jpeg'



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess Moves Recommendation"
              description="A project for chess move generation/validation piece placement/movement and check/checkmate/draw detection. Chess.com API integration to analyse the user's openings. Chess.com 
              API integration to analyse the user's openings. This is a headless library and does not include user 
              interface elements"
              ghLink="https://github.com/athulya-ajayakumar/Chess-move"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="MoodMusic"
              description="This project is about building a music recommendation system for users who want to listen 
              to songs according to their mood. In this project we propose a new approach to song recommendation
              using 10,000-song subset."
              ghLink="https://github.com/athulya-ajayakumar/MoodMusic"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Sentiment-Analysis"
              description="This project created a representation to forecast the response of a remark given the observation 
              declaration using a dataset of over 40,000 Amazon Alexa reviews. Our use case here is to review the 
              classification of Amazon Alexa customer feedback into positive and negative"
              ghLink="https://github.com/athulya-ajayakumar/Sentiment-Analysis"
                      
            />
          </Col>
 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
