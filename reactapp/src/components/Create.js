import React, { useState } from "react";
import { db } from "../firebase/config"; // Import Firestore config
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./Create.css";


const Create = () => {
  const [groupName, setGroupName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [link, setLink] = useState("");

  // Function to generate invite link
  const handleCreateLink = () => {
    if (groupName.trim() !== "" && adminName.trim() !== "") {
      const uniqueId = Math.random().toString(36).substring(2, 10);
      const newLink = `https://skillsync.com/invite/${uniqueId}`;
      setLink(newLink);
      console.log("Generated Link:", newLink);
    }
  };

  // Function to copy link to clipboard
  const copyToClipboard = () => {
    if (link) {
      navigator.clipboard.writeText(link);
      alert("Link copied to clipboard!");
    }
  };

  // Function to save data in Firestore
  const handleConfirm = async () => {
    if (groupName.trim() !== "" && adminName.trim() !== "" && link !== "") {
      try {
        await addDoc(collection(db, "group_invites"), {
          groupName,
          adminName,
          inviteLink: link,
          createdAt: serverTimestamp(), // Store creation time
        });
        alert("Group created successfully!");
        // Reset fields after storing
        setGroupName("");
        setAdminName("");
        setLink("");
      } catch (error) {
        console.error("Error adding document: ", error);
        alert("Failed to create group. Try again.");
      }
    } else {
      alert("Please generate an invite link before confirming.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create Group</h2>

        <label>Enter Group Name</label>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Enter group name"
        />

        <label>Enter Admin Name</label>
        <input
          type="text"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
          placeholder="Enter admin name"
        />

        <button className="create-btn" onClick={handleCreateLink}>
          Generate Invite Link
        </button>

        {/* Show link only if generated */}
        {link && (
          <div className="invite-link-box">
            <p>
              Invite Link:{" "}
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </p>
            <button className="copy-btn" onClick={copyToClipboard}>
              Copy Link
            </button>
          </div>
        )}

        <div className="modal-footer">
          <button className="cancel-btn">Cancel</button>
          <button className="confirm-btn" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
