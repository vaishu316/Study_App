import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

const Leaderboard = () => {
  return (
    <div className="p-4">
      <h4>Leaderboard</h4>
      <div className="d-flex gap-2">
        <Button variant="primary">Last 7 days</Button>
        <Button variant="secondary">Last 30 days</Button>
      </div>
      <Card className="mt-3">
        <Card.Body>
          <ListGroup>
            {[2, 1, 3, 4, 5, 6].map((rank, index) => (
              <ListGroup.Item key={index}>{rank}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Leaderboard;
