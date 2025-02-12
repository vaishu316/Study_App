import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Modal, Form, Button } from "react-bootstrap";
import "./SkillSync.css";
import logo from "../categories/logo.png";
import { db } from "./firebase";
import { collection, addDoc, getDocs, query, where, updateDoc, arrayUnion } from "firebase/firestore";

export function CreateGroup({ show, handleClose }) {
  const [groupName, setGroupName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const navigate = useNavigate();

  // Generate a random 6-character invite code
  const generateCode = () => {
    const newCode = Math.random().toString(36).substr(2, 6).toUpperCase();
    setInviteCode(newCode);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteCode);
    alert("Invite code copied!");
  };

  const handleConfirm = async () => {
    if (groupName.trim() !== "" && inviteCode) {
      try {
        await addDoc(collection(db, "groups"), {
          groupName,
          adminName,
          inviteCode, // Store the invite code
          members: [],
          createdAt: new Date(),
        });

        alert("Group Created Successfully!");
        navigate("/dashboard");
      } catch (error) {
        console.error("Firestore Error:", error.message);
        alert(`Failed to create group: ${error.message}`);
      }
    } else {
      alert("Please enter a group name and generate an invite code.");
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
            <Form.Control type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Admin Name</Form.Label>
            <Form.Control type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} />
          </Form.Group>
          <Button variant="primary" className="w-100 mb-3" onClick={generateCode}>
            Generate Invite Code
          </Button>
          {inviteCode && (
            <div className="text-center">
              <p>
                Invite Code: <strong>{inviteCode}</strong>
              </p>
              <Button variant="secondary" onClick={copyToClipboard}>Copy Code</Button>
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
  const [inviteCode, setInviteCode] = useState("");
  const navigate = useNavigate();

  const handleJoin = async () => {
    if (!userName || !inviteCode) {
      alert("Please enter your name and a valid invite code.");
      return;
    }

    try {
      const q = query(collection(db, "groups"), where("inviteCode", "==", inviteCode));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("Group not found. Please check the invite code.");
        return;
      }

      const groupDoc = querySnapshot.docs[0];
      const groupRef = groupDoc.ref;

      await updateDoc(groupRef, {
        members: arrayUnion(userName),
      });

      alert(`Welcome ${userName}, you've joined the group!`);
      navigate("/dashboard");
      handleClose();
    } catch (error) {
      console.error("Error joining group:", error);
      alert("Failed to join the group. Please try again.");
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
            <Form.Control type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Invite Code</Form.Label>
            <Form.Control type="text" value={inviteCode} onChange={(e) => setInviteCode(e.target.value)} />
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
  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);

  const features = [
    { id: 1, title: "CREATE GROUP", description: "Start a new study group.", icon: "📁", action: () => setShowCreate(true) },
    { id: 2, title: "JOIN GROUP", description: "Connect with peers.", icon: "🤝", action: () => setShowJoin(true) },
    { id: 3, title: "Test Yourself", description: "Assess your knowledge with practice tests.", icon: "📝", action: () => setShowJoin(true) },
  ];

  return (
    <div className="main-container">
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
      <CreateGroup show={showCreate} handleClose={() => setShowCreate(false)} />
      <JoinGroup show={showJoin} handleClose={() => setShowJoin(false)} />
    </div>
  );
}
