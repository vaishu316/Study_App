import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "./SkillSync.css"; // Import CSS file

export default function SkillSync() {
  const [clicked, setClicked] = useState(null);

  const features = [
    { id: 1, title: "Create Group", description: "Start a new study group for focused learning.", icon: "📁" },
    { id: 2, title: "Join Group", description: "Connect with peers and learn together.", icon: "🤝" },
    { id: 3, title: "Test Yourself", description: "Assess your knowledge with practice tests.", icon: "📝" },
  ];

  return (
    <div className="main-container">
      <h1 className="title">Welcome to SkillSync 🎯</h1>
      <p className="subtitle">Your ultimate study partner for consistent placement preparation.</p>
      <button className="start-btn">Get Started</button>

      <div className="container mt-5">
        <div className="row g-4">
          {features.map((feature) => (
            <div key={feature.id} className="col-md-4">
              <motion.div
                className="feature-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9, rotate: 2 }}
                animate={clicked === feature.id ? { scale: 1.1, rotate: -2 } : {}}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setClicked(feature.id)}
              >
                <span className="feature-icon">{feature.icon}</span>
                <h2 className="feature-title">{feature.title}</h2>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">© 2025 SkillSync | All rights reserved.</footer>
    </div>
  );
}
