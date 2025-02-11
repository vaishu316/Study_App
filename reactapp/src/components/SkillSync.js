import React, { useState } from "react"; // Import React and useState
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion"; // Import motion for animations
import { CreateGroup, JoinGroup } from "./Create"; // Import CreateGroup and JoinGroup correctly

export default function SkillSync() {
  const navigate = useNavigate();
  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);

  const features = [
    { id: 1, title: "CREATE GROUP", description: "Start a new study group.", icon: "📁", action: () => setShowCreate(true) },
    { id: 2, title: "JOIN GROUP", description: "Connect with peers.", icon: "🤝", action: () => setShowJoin(true) },
  ];

  return (
    <div className="main-container">
      <h1 className="title">Welcome to SkillSync 🎯</h1>
      <div className="container mt-5">
        <div className="row g-4">
          {features.map((feature) => (
            <div key={feature.id} className="col-md-4">
              <motion.div className="feature-card" whileHover={{ scale: 1.05 }} onClick={feature.action}>
                <span className="feature-icon">{feature.icon}</span>
                <h2 className="feature-title">{feature.title}</h2>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal components for creating and joining groups */}
      <CreateGroup show={showCreate} handleClose={() => setShowCreate(false)} />
      <JoinGroup show={showJoin} handleClose={() => setShowJoin(false)} />

      <footer className="footer">© 2025 SkillSync | All rights reserved.</footer>
    </div>
  );
}
