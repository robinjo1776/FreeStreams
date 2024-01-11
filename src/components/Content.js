import React from "react";
import content from "../assets/photos/ContentSection/content.jpg";
import { Container } from "react-bootstrap";

const Content = () => {
  return (
    <Container>
      <div className="text-center">
        <img
          src={content}
          alt="Content Section"
          className="content-section-img"
        />
      </div>
    </Container>
  );
};

export default Content;
