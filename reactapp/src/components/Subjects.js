import React, { useState } from "react";
import "./Subject.css"; 

const topics = [
  { name: "Aptitude", icon: "📊", subtopics: ["Time & Work", "Probability", "Ratio & Proportion"] },
  { name: "Data Interpretation", icon: "📈", subtopics: ["Tables", "Pie Charts", "Bar Graphs"] },
  { name: "Verbal Ability", icon: "🔤", subtopics: ["Reading Comprehension", "Sentence Correction", "Synonyms & Antonyms"] },
  { name: "Logical Reasoning", icon: "🧠", subtopics: ["Blood Relations", "Coding-Decoding", "Seating Arrangement"] },
  { name: "Verbal Reasoning", icon: "🅰", subtopics: ["Statement & Assumptions", "Syllogisms", "Cause & Effect"] },
  { name: "Non Verbal Reasoning", icon: "🔢", subtopics: ["Pattern Recognition", "Mirror Images", "Figure Completion"] },
  { name: "Puzzles", icon: "🧩", subtopics: ["Sudoku", "Crossword", "Brain Teasers"] },
  { name: "C Programming", icon: "💻", subtopics: ["Pointers", "Structures", "File Handling"] },
  { name: "Java Programming", icon: "☕", subtopics: ["OOP Concepts", "Exception Handling", "Collections"] }
];

const Subjects = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(selectedTopic === topic ? null : topic);
  };

  return (
    <div className="dashboard-container">
      <div className="subjects-grid">
        {topics.map((topic, index) => (
          <div
            key={index}
            className={`subject-card ${selectedTopic === topic ? "active" : ""}`}
            onClick={() => handleTopicClick(topic)}
          >
            <span className="subject-icon">{topic.icon}</span>
            <h3>{topic.name}</h3>

            {selectedTopic === topic && (
              <div className="subtopics-list">
                {topic.subtopics.map((subtopic, i) => (
                  <div key={i} className="subtopic-item">{subtopic}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;
