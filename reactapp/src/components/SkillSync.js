import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Modal, Button, Form } from "react-bootstrap";
import "./SkillSync.css";

export function CreateGroup({ show, handleClose }) {
  const [groupName, setGroupName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [inviteLink, setInviteLink] = useState("");

  const generateLink = () => {
    setInviteLink(`https://skillsync.com/invite/${Math.random().toString(36).substr(2, 8)}`);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={{ backgroundColor: "#FFD1DC" }}>
        <Modal.Title>CREATE GROUP</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#FFE4E9" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Enter Group Name</Form.Label>
            <Form.Control type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} style={{ backgroundColor: "#FFEBEF" }} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Admin Name</Form.Label>
            <Form.Control type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} style={{ backgroundColor: "#FFEBEF" }} />
          </Form.Group>
          <Button variant="primary" className="w-100 mb-3" onClick={generateLink}>Generate Invite Link</Button>
          {inviteLink && <p className="text-center">Invite Link: <a href={inviteLink} target="_blank" rel="noopener noreferrer">{inviteLink}</a></p>}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function JoinGroup({ show, handleClose }) {
  const [userName, setUserName] = useState("");
  const [groupUrl, setGroupUrl] = useState("");

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={{ backgroundColor: "#FFD1DC" }}>
        <Modal.Title>JOIN GROUP</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "none" }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Enter Your Name</Form.Label>
            <Form.Control type="text" value={userName} onChange={(e) => setUserName(e.target.value)} style={{ backgroundColor: "#FFEBEF" }} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Paste URL</Form.Label>
            <Form.Control type="text" value={groupUrl} onChange={(e) => setGroupUrl(e.target.value)} style={{ backgroundColor: "#FFEBEF" }} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary">Join</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function SkillSync() {
  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);

  const features = [
    { id: 1, title: "CREATE GROUP", description: "Start a new study group for focused learning.", icon: "📁", action: () => setShowCreate(true) },
    { id: 2, title: "JOIN GROUP", description: "Connect with peers and learn together.", icon: "🤝", action: () => setShowJoin(true) },
    { id: 3, title: "TEST YOURSELF", description: "Assess your knowledge with practice tests.", icon: "📝" },
  ];

  return (
    <div className="main-container">
      <h1 className="title">Welcome to SkillSync 🎯</h1>
      <p className="subtitle">Your ultimate study partner for consistent placement preparation.</p>
      <button className="start-btn">Get Started</button>

      <div className="container mt-5">
        <div className="row g-4">
          {features.map((feature) => (
            <div key={feature.id} className="col-md-4">
              <motion.div
                className="feature-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9, rotate: 2 }}
                onClick={feature.action}
              >
                <span className="feature-icon">{feature.icon}</span>
                <h2 className="feature-title">{feature.title}</h2>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <CreateGroup show={showCreate} handleClose={() => setShowCreate(false)} />
      <JoinGroup show={showJoin} handleClose={() => setShowJoin(false)} />

      <footer className="footer">© 2025 SkillSync | All rights reserved.</footer>
    </div>
  );
}