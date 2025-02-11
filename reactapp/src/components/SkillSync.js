import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Modal, Form, Button } from "react-bootstrap";
import "./SkillSync.css";

export function CreateGroup({ show, handleClose }) {
  const [groupName, setGroupName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [inviteLink, setInviteLink] = useState("");
  const navigate = useNavigate();

  const generateLink = () => {
    const newLink = `https://skillsync.com/invite/${Math.random().toString(36).substr(2, 8)}`;
    setInviteLink(newLink);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    alert("Invite link copied!");
  };

  const handleConfirm = () => {
    if (groupName.trim() !== "" && inviteLink !== "") {
      alert("Group Created Successfully!");
      navigate("/dashboard");
    } else {
      alert("Please enter a group name and generate a link before confirming.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>CREATE GROUP</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Enter Group Name</Form.Label>
            <Form.Control
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Admin Name</Form.Label>
            <Form.Control
              type="text"
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" className="w-100 mb-3" onClick={generateLink}>
            Generate Invite Link
          </Button>
          {inviteLink && (
            <div className="text-center">
              <p>Invite Link: <a href={inviteLink} target="_blank" rel="noopener noreferrer">{inviteLink}</a></p>
              <Button variant="secondary" onClick={copyToClipboard}>Copy Link</Button>
            </div>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function JoinGroup({ show, handleClose }) {
  const [userName, setUserName] = useState("");
  const [groupUrl, setGroupUrl] = useState("");

  const handleJoin = () => {
    if (userName.trim() !== "" && groupUrl.trim() !== "") {
      alert("Successfully joined the group!");
      handleClose();
    } else {
      alert("Please enter your name and a valid URL.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="modal-header">
        <Modal.Title>JOIN GROUP</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Enter Your Name</Form.Label>
            <Form.Control
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Paste URL</Form.Label>
            <Form.Control
              type="text"
              value={groupUrl}
              onChange={(e) => setGroupUrl(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
        <Button variant="primary" onClick={handleJoin}>Join</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function SkillSync() {
  const navigate = useNavigate();
  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);

  const features = [
    { id: 1, title: "CREATE GROUP", description: "Start a new study group.", icon: "📁", action: () => setShowCreate(true) },
    { id: 2, title: "JOIN GROUP", description: "Connect with peers.", icon: "🤝", action: () => setShowJoin(true) },
  ];

  return (
    <div className="main-container">
      {/* Added the logo above the title */}
      <img src={logo} alt="SkillSync Logo" className="logo" />

      <h1 className="title">Welcome to SkillSync 🎯</h1>
      <div className="container mt-5">
        <div className="row g-4">
          {features.map((feature) => (
            <div key={feature.id} className="col-md-4">
              <motion.div className="feature-card" whileHover={{ scale: 1.05 }} onClick={feature.action}>
                <span className="feature-icon">{feature.icon}</span>
                <h2 className="feature-title">{feature.title}</h2>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal components for creating and joining groups */}
      <CreateGroup show={showCreate} handleClose={() => setShowCreate(false)} />
      <JoinGroup show={showJoin} handleClose={() => setShowJoin(false)} />

      <footer className="footer">© 2025 SkillSync | All rights reserved.</footer>
    </div>
  );
}
