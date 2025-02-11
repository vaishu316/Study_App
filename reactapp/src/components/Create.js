import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Create.css";

const Create = () => {
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
      <p onClick={handleCreateLink} className="create-link">
        ➕ Create Link
      </p>
      {link && (
        <div className="link-box">
          <p>Share this link with your group:</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </div>
      )}
      {link && (
        <Link to="/dashboard" className="confirm-link">
          ✅ Confirm & Go to Dashboard
        </Link>
      )}
    </div>
  );
};

export default Create;
