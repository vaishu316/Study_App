import React, { useState } from "react";
import "./CreateGroup.css";

const CreateGroup = () => {
  const [groupName, setGroupName] = useState("");
  const [timer, setTimer] = useState("10");
  const [link, setLink] = useState("");

  const handleCreateLink = () => {
    if (groupName.trim() !== "") {
      setLink(`https://skillsync.com/group/${encodeURIComponent(groupName)}`);
    }
  };

  return (
    <div className="container">
      <h2>Create Your Study Group</h2>
      <div className="form-box">
        <label>Group Name:</label>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Enter group name"
        />
      </div>
      <div className="form-box">
        <label>Set Timer (mins):</label>
        <input
          type="number"
          value={timer}
          onChange={(e) => setTimer(e.target.value)}
        />
      </div>
      <button className="create-btn" onClick={handleCreateLink}>
        Create Link
      </button>
      {link && (
        <div className="link-box">
          <p>Share this link with your group:</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </div>
      )}
      <button className="confirm-btn">Confirm</button>
    </div>
  );
};

export default CreateGroup;
