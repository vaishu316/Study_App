import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  SkillSync  from "./components/SkillSync";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SkillSync show={true} handleClose={() => {}} />} />
        <Route path="/Dashboard/*" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;