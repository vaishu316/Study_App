import React from "react";
import { Card, Form } from "react-bootstrap";

const ActivityWall = () => {
  return (
    <>
      <h4>Activity Wall</h4>
      <Card className="mb-4">
        <Card.Body>
          <Form.Control type="text" placeholder="Search using Name" />
        </Card.Body>
      </Card>
    </>
  );
};

export default ActivityWall;
