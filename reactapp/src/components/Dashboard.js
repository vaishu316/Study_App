import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ProgressBar, Card, Button, Container, Row, Col
} from "react-bootstrap";
import {
  FaHome, FaUsers, FaClipboardList, FaChartBar, FaSignOutAlt, FaArrowLeft, FaRobot
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./ChatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showChatbot, setShowChatbot] = useState(false);

  const categories = [
    { name: "Quantitative Aptitude", progress: 60, color: "#FFB6C1" },
    { name: "Logical Reasoning", progress: 80, color: "#87CEFA" },
    { name: "Verbal Ability", progress: 70, color: "#FFD700" },
    { name: "Technical Questions", progress: 50, color: "#98FB98" }
  ];

  return (
    <div className="dashboard d-flex" style={{ background: "linear-gradient(135deg, #f3c4fb, #e0bbff, #d0a2f7, #b891f7, #e9d5ff)" }}>
      {/* Sidebar */}
      <div className="sidebar p-3 text-white" style={{ backgroundColor: "#dbcdf0", minHeight: "100vh" }}>
        <h2 className="text-center">SkillSync</h2>
        <ul className="nav flex-column">
          <li className="nav-item" onClick={() => navigate("/")}><FaHome /> Home</li>
          <li className="nav-item"><FaUsers /> Study Groups</li>
          <li className="nav-item"><FaClipboardList /> Assessments</li>
          <li className="nav-item"><FaChartBar /> Progress</li>
          <li className="nav-item" onClick={() => setShowChatbot(!showChatbot)}>
            <FaRobot /> AI Chatbot
          </li>
          <li className="nav-item logout"><FaSignOutAlt /> Logout</li>
        </ul>
      </div>
      
      {/* Main Content */}
      <Container fluid className="main-content p-4">
        <Button variant="light" className="mb-3" onClick={() => navigate("/")}><FaArrowLeft /> Back to SkillSync</Button>
        <h3 className="mb-4 text-white text-center">Welcome!</h3>
        
        {/* Progress Section */}
        <Card className="p-3 mb-4 shadow-lg border-0" style={{ background: "linear-gradient(135deg, #ffe4e9, #ffd1dc)", borderRadius: "15px" }}>
          <h5 className="text-center text-dark">Your Progress</h5>
          {categories.map((cat, idx) => (
            <div key={idx} className="mb-3">
              <p className="text-dark font-weight-bold">{cat.name}</p>
              <ProgressBar now={cat.progress} variant="info" style={{ height: "12px", borderRadius: "10px" }} />
            </div>
          ))}
        </Card>

        {/* Activity Wall */}
        <Row>
          <Col md={6}>
            <Card className="p-4 mb-3 shadow-lg border-0" style={{ background: "#FFF8DC", borderRadius: "15px" }}>
              <h5 className="text-dark">Test-1</h5>
              <p className="text-muted">Exam Duration: 29 min</p>
              <Button variant="primary">View Results</Button>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-4 mb-3 shadow-lg border-0" style={{ background: "#FFF8DC", borderRadius: "15px" }}>
              <h5 className="text-dark">Test-2</h5>
              <p className="text-muted">Exam Duration: 15 min</p>
              <Button variant="primary">View Results</Button>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Chatbot Popup */}
      {showChatbot && (
        <div className="chatbot-container">
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
