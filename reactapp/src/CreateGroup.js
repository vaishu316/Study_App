import React, { useState } from "react";
import "./CreateGroup.css";

const CreateGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [link, setLink] = useState("");

  const handleCreateLink = () => {
    if (groupName.trim() !== "" && adminName.trim() !== "") {
      const uniqueId = Math.random().toString(36).substring(2, 10);
      const newLink = `https://skillsync.com/invite/${uniqueId}`;
      setLink(newLink);
      console.log("Generated Link:", newLink); // Debugging
    }
  };

  const copyToClipboard = () => {
    if (link) {
      navigator.clipboard.writeText(link);
      alert("Link copied to clipboard!");
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

        {/* Check if link exists before showing */}
        {link && (
          <div className="invite-link-box">
            <p>Invite Link: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
            <button className="copy-btn" onClick={copyToClipboard}>Copy Link</button>
          </div>
        )}

        <div className="modal-footer">
          <button className="cancel-btn">Cancel</button>
          <button className="confirm-btn">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
