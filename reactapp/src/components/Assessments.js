import React, { useState } from "react";
import { Card, Button, Nav, Container, Row, Col } from "react-bootstrap";

const Assessments = () => {
  const [activeTab, setActiveTab] = useState("assessments");

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

  const teamMembers = [
    { name: "Alice Johnson", role: "Admin" },
    { name: "Bob Smith", role: "Member" },
    { name: "Charlie Brown", role: "Moderator" },
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

      {/* Content Section */}
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
                          <strong>Start:</strong> {test.startTime.toLocaleString()} <br />
                          <strong>Duration:</strong> {test.duration} <br />
                          <strong>Questions:</strong> {test.Questions}
                        </Card.Text>
                        <Button variant="warning" disabled={status !== "Ongoing"}>
                          Take Test
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
          <Row>
            {teamMembers.length > 0 ? (
              teamMembers.map((member, index) => (
                <Col md={4} key={index}>
                  <Card className="mb-3 shadow-sm">
                    <Card.Body>
                      <Card.Title>{member.name}</Card.Title>
                      <Card.Text>
                        <strong>Role:</strong> {member.role}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>No team members available</p>
            )}
          </Row>
        )}
      </div>
    </Container>
  );
};

export default Assessments;
