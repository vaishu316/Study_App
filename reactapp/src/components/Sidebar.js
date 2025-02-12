import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  return (
    <nav className="d-flex flex-column p-3">
      <h2 className="text-white">Dashboard</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/dashboard">🏠 Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/dashboard/leaderboard">🏆 Leaderboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/dashboard/subjects">📚 Subject</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/dashboard/createassessment">📝 Create Assessment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/dashboard/question">❓ Question of the Day</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/dashboard/EditProfile">🤵‍♀️Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;