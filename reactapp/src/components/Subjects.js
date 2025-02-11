import React from "react";
import { ListGroup } from "react-bootstrap";

const Subjects = () => {
  return (
    <>
      <h4>Your Subjects</h4>
      <ListGroup className="mb-4">
        {[
          "Introduction to Innovation, IP Management, and Entrepreneurship",
          "Marketing Research & Marketing Management",
          "Operating Systems",
          "Design and Analysis of Algorithms",
          "Web Development Frameworks",
          "Operations Research",
          "Aptitude and Coding Skills – II",
        ].map((subject, index) => (
          <ListGroup.Item key={index}>{subject}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Subjects;
