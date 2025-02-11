import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SkillSync from "./components/SkillSync";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SkillSync />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
