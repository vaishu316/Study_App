import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  return (
    <nav className="d-flex flex-column p-3">
      <h2 className="text-white">Dashboard</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">🏠 Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/leaderboard">🏆 Leaderboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/subjects">📚 Subject</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/assessments">📝  create Assessments</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/question">❓ Question of the Day</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/activity">🤵‍♀️Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
