import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Leaderboard from "./Leaderboard";
import Subjects from "./Subjects";
import CreateAssessment from "./CreateAssessment"; // Import the CreateAssessment component
import QuestionOfTheDay from "./QuestionOfTheDay";
import ActivityWall from "./ActivityWall";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 bg-dark text-white vh-100">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 p-4">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="subjects" element={<Subjects />} />
            <Route path="createassessment" element={<CreateAssessment />} /> 
            <Route path="question" element={<QuestionOfTheDay />} />
            <Route path="activity" element={<ActivityWall />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
