import React, { useState } from "react";

const CreateAssessment = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [numQuestions, setNumQuestions] = useState(5);
  const [category, setCategory] = useState("");

  const categories = [
    "Aptitude",
    "Data Interpretation",
    "Verbal Ability",
    "Logical Reasoning",
    "Verbal Reasoning",
    "Non-verbal Reasoning",
    "Puzzles",
    "C Programming",
    "C++ Programming",
    "C# Programming",
    "Java Programming",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Assessment Created: ${title}, ${time} minutes, ${numQuestions} questions, ${category}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Create Assessment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter assessment title"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Set Time (Minutes)</label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-2 border rounded"
              min="1"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Number of Questions</label>
            <input
              type="number"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              className="w-full p-2 border rounded"
              min="1"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Select Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Create Assessment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAssessment;
