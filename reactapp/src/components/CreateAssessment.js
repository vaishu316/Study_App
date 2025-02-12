import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const CreateAssessment = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [numQuestions, setNumQuestions] = useState(5);
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  const categories = [
    { name: "Aptitude", icon: "bi-bar-chart-line" },
    { name: "Data Interpretation", icon: "bi-graph-up" },
    { name: "Verbal Ability", icon: "bi-book" },
    { name: "Logical Reasoning", icon: "bi bi-search" },
    { name: "Verbal Reasoning", icon: "bi-fonts" },
    { name: "Non-verbal Reasoning", icon: "bi-diagram-3" },
    { name: "Puzzles", icon: "bi-puzzle" },
    { name: "C Programming", icon: "bi-laptop" },
    { name: "C++ Programming", icon: "bi-diamond" },
    { name: "C# Programming", icon: "bi-diamond-fill" },
    { name: "Java Programming", icon: "bi-code-slash" },
  ];

  const levels = ["Easy", "Moderate", "Difficult"];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Assessment Created: ${title}, ${time} minutes, ${numQuestions} questions, ${category}, ${level}`);
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center" style={{ background: "#F8F9FA" }}>
      <div className="container p-4 rounded shadow-lg" style={{ background: "#E3F2FD", maxWidth: "700px" }}>
        <h2 className="text-center text-primary mb-4">Create Assessment</h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Title */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                placeholder="Enter assessment title"
                required
              />
            </div>

            {/* Time */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Set Time (Minutes)</label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="form-control"
                min="1"
                required
              />
            </div>

            {/* Number of Questions */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Number of Questions</label>
              <input
                type="number"
                value={numQuestions}
                onChange={(e) => setNumQuestions(e.target.value)}
                className="form-control"
                min="1"
                required
              />
            </div>

            {/* Difficulty Level */}
            <div className="col-md-6">
              <label className="form-label fw-bold">Select Level</label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="form-control"
                required
              >
                <option value="">Select a level</option>
                {levels.map((lvl, index) => (
                  <option key={index} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Selection as Cards */}
          <div className="mt-4">
            <label className="form-label fw-bold">Select Category</label>
            <div className="row row-cols-2 row-cols-md-3 g-3">
              {categories.map((cat, index) => (
                <div key={index} className="col">
                  <div
                    className={`card p-3 text-center shadow-sm border-0 ${
                      category === cat.name ? "bg-primary text-white" : "bg-light"
                    }`}
                    style={{ cursor: "pointer", transition: "0.3s" }}
                    onClick={() => setCategory(cat.name)}
                  >
                    <i className={`${cat.icon} display-6 mb-2`}></i>
                    <h6 className="fw-bold">{cat.name}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary px-4">
              Create Assessment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAssessment;
