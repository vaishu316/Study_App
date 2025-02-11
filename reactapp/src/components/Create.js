import { db } from "./firebase"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore"; // Firestore functions
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Form, Button } from "react-bootstrap";
import app from "./config"; // Make sure the path is correct

export function JoinGroup({ show, handleClose }) {
  return (
    show && (
      <div className="modal">
        <button onClick={handleClose}>Close</button>
        <h2>Join a Group</h2>
      </div>
    )
  );
}


export function CreateGroup({ show, handleClose }) {
  const [groupName, setGroupName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [inviteLink, setInviteLink] = useState("");
  const navigate = useNavigate();

  const generateLink = () => {
    const newLink = `https://skillsync.com/invite/${Math.random().toString(36).substr(2, 8)}`;
    setInviteLink(newLink);
  };

  const handleConfirm = async () => {
    if (groupName.trim() !== "" && inviteLink !== "") {
      try {
        await addDoc(collection(db, "groups"), {
          groupName,
          adminName,
          inviteLink,
          createdAt: new Date(),
        });
        alert("Group Created Successfully!");
        navigate("/dashboard");
      } catch (error) {
        console.error("Error creating group:", error);
        alert("Failed to create group. Try again!");
      }
    } else {
      alert("Please enter a group name and generate a link before confirming.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>CREATE GROUP</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
              <Button variant="secondary" onClick={() => navigator.clipboard.writeText(inviteLink)}>
                Copy Link
              </Button>
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
