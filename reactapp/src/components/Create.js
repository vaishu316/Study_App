import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Form, Button } from "react-bootstrap";
import { createGroup } from "../utils/createGroup"; // Firestore function

export function Create({ show, handleClose }) {
  const [groupName, setGroupName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [description, setDescription] = useState("");
  const [inviteLink, setInviteLink] = useState("");
  const navigate = useNavigate();

  // Generate a random invite link
  const generateLink = () => {
    const newLink = `https://skillsync.com/invite/${Math.random().toString(36).substr(2, 8)}`;
    setInviteLink(newLink);
  };

  // Handle form submission
  const handleConfirm = async () => {
    if (!groupName.trim() || !adminName.trim() || !inviteLink) {
      alert("Please fill in all required fields and generate an invite link.");
      return;
    }

    console.log("📤 Sending Data to Firestore...");
    
    const response = await createGroup(groupName, adminName, description, inviteLink);

    if (response.success) {
      alert(`✅ Group Created Successfully! ID: ${response.id}`);
      console.log("🔥 Navigate to Dashboard...");
      navigate("/dashboard");
    } else {
      alert(`❌ Failed to create group: ${response.error}`);
      console.error("🔥 Firestore Error:", response.error);
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
            <Form.Control type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Admin Name</Form.Label>
            <Form.Control type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Group Description (Optional)</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>
          <Button variant="primary" className="w-100 mb-3" onClick={generateLink}>
            Generate Invite Link
          </Button>
          {inviteLink && (
            <div className="text-center">
              <p>Invite Link: <a href={inviteLink} target="_blank" rel="noopener noreferrer">{inviteLink}</a></p>
              <Button variant="secondary" onClick={() => navigator.clipboard.writeText(inviteLink)}>Copy Link</Button>
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
