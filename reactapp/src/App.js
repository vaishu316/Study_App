import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  SkillSync  from "./components/SkillSync";
import Dashboard from "./components/Dashboard";
import AptitudeTest from "./components/AptitudeTest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SkillSync show={true} handleClose={() => {}} />} />
        <Route path="/Dashboard/*" element={<Dashboard />} />
        <Route path="/AptitudeTest/*" element={<AptitudeTest />} />

      </Routes>
    </Router>
  );
}

export default App;