import React, { useState } from "react";
import { Card, Button, Nav, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import for navigation

const Assessments = () => {
  const [activeTab, setActiveTab] = useState("assessments");
  const navigate = useNavigate(); // Hook for navigation

  const tests = [
    {
      title: "Aptitude Test",
      createdBy: "Vaishnavi",
      startTime: new Date("Thu, Feb 11 2025 13:00:00"),
      duration: "00:10:00",
      Questions: "8",
    },
    {
      title: "Reasoning Test",
      createdBy: "Vaishnavi",
      startTime: new Date("Thu, Feb 11 2025 14:00:00"),
      duration: "00:20:00",
      Questions: "10",
    },
  ];

  const currentTime = new Date();

  return (
    <Container>
      {/* Navigation Tabs */}
      <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedTab) => setActiveTab(selectedTab)}>
        <Nav.Item>
          <Nav.Link eventKey="assessments">Assessments</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="team">Team Members</Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="mt-3">
        {activeTab === "assessments" ? (
          <Row>
            {tests.length > 0 ? (
              tests.map((test, index) => {
                let status = currentTime < test.startTime ? "Upcoming" : "Ongoing";

                return (
                  <Col md={6} key={index}>
                    <Card className="mb-3 shadow-sm">
                      <Card.Body>
                        <Card.Title className="fw-bold">{test.title}</Card.Title>
                        <Card.Text>
                          <strong>Created by:</strong> {test.createdBy} <br />
                          <strong>Start:</strong> {test.startTime ? test.startTime.toLocaleString() : "Invalid Date"} <br />
                          <strong>Duration:</strong> {test.duration} <br />
                          <strong>Questions:</strong> {test.Questions} <br />
                          <strong>Status:</strong> <span className={status === "Ongoing" ? "text-success" : "text-danger"}>{status}</span>
                        </Card.Text>
                        <Button
                          variant="warning"
                          disabled={status !== "Ongoing"}
                          onClick={() => navigate("/aptitudetest", { replace: true })} // Ensures proper navigation
                        >
                          {status === "Ongoing" ? "Take Test" : "Not Available"}
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <p>No upcoming tests</p>
            )}
          </Row>
        ) : (
          <p>Team Members</p>
        )}
      </div>
    </Container>
  );
};

export default Assessments;
