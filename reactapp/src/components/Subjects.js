import React from "react";
import  './Subject.css';

const topics = [
  { name: "Aptitude", icon: "📊" },
  { name: "Data Interpretation", icon: "📈" },
  { name: "Verbal Ability", icon: "🔤" },
  { name: "Logical Reasoning", icon: "🧠" },
  { name: "Verbal Reasoning", icon: "🅰️" },
  { name: "Non Verbal Reasoning", icon: "🔢" },
  { name: "Puzzles", icon: "🧩" },
  { name: "C Programming", icon: "💻" },
  { name: "C++ Programming", icon: "🔷" },
  { name: "C# Programming", icon: "🔹" },
  { name: "Java Programming", icon: "☕" },
];

const Subjects = ({ onTopicClick }) => {
  return (
    <div className="feature-container">
      {topics.map((topic, index) => (
        <div key={index} className="feature-card" onClick={() => onTopicClick(topic.name)}>
          <span className="icon">{topic.icon}</span>
          <h3>{topic.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Subjects;