import React from "react";
import { Card, Button } from "react-bootstrap";

const QuestionOfTheDay = () => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Question of the day</Card.Title>
        <Card.Text>
          Is it possible to install water, gas, and electrical lines from
          Utilities W, G, and E to each of the houses A, B, and C without
          any lines crossing each other?
        </Card.Text>
        <Button variant="info">Show options</Button>
      </Card.Body>
    </Card>
  );
};

export default QuestionOfTheDay;
