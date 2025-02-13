import { createContext, useContext, useState } from "react";

const AssessmentContext = createContext();

export const AssessmentProvider = ({ children }) => {
  const [assessments, setAssessments] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const addAssessment = (newAssessment) => {
    setAssessments([...assessments, newAssessment]);
  };

  return (
    <AssessmentContext.Provider value={{ assessments, addAssessment, successMessage, setSuccessMessage }}>
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = () => useContext(AssessmentContext);
