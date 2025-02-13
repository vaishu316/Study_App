import React, { useState, useEffect } from "react";
import "./AptitudeTest.css"; // Ensure this file exists
import { useNavigate } from "react-router-dom"; // React Router for navigation

const MAX_QUESTIONS = 10;
const TIME_LIMIT = 30; // 30 seconds per question

const AptitudeTest = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [timer, setTimer] = useState(TIME_LIMIT);
    
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/questions.json") 
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched Data:", data);
                if (!Array.isArray(data)) {
                    throw new Error("Invalid JSON format: Expected an array");
                }
                setQuestions(data.slice(0, MAX_QUESTIONS));
            })
            .catch(error => console.error("Error fetching questions:", error));
    }, []);

    useEffect(() => {
        if (timer === 0) {
            handleNext(); // Auto move to the next question
        }
        const interval = setInterval(() => {
            setTimer(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [timer, currentQuestionIndex]);

    const handleNext = () => {
        if (selectedAnswer === questions[currentQuestionIndex]?.correctAnswer) {
            setCorrectAnswers(prev => prev + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedAnswer(null);
            setTimer(TIME_LIMIT);
        } else {
            alert(`Quiz completed! Your score: ${correctAnswers + 1}/${questions.length}`);
            navigate("/dashboard/leaderboard"); // Redirect to the leaderboard
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prevIndex => prevIndex - 1);
            setSelectedAnswer(null);
            setTimer(TIME_LIMIT);
        }
    };

    const handleAnswerClick = (option) => {
        if (selectedAnswer === null) {
            setSelectedAnswer(option);
        }
    };

    return (
        <div className="quiz-container">
            {questions.length > 0 ? (
                <>
                    <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
                    <p className="timer">⏳ Time Left: {timer} sec</p>
                    <div className="question-box">
                        <p>{questions[currentQuestionIndex]?.question || "Loading..."}</p>
                    </div>
                    <div className="options-grid">
                        {questions[currentQuestionIndex]?.options?.map((option, index) => (
                            <button 
                                key={index} 
                                className={`option-button ${selectedAnswer === option 
                                    ? option === questions[currentQuestionIndex].correctAnswer 
                                        ? "correct" 
                                        : "wrong" 
                                    : ""}`}
                                onClick={() => handleAnswerClick(option)}
                                disabled={selectedAnswer !== null}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className="navigation-buttons">
                        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>← Previous</button>
                        <button onClick={handleNext} disabled={selectedAnswer === null}>Next →</button>
                    </div>
                </>
            ) : (
                <p>Loading Questions...</p>
            )}
        </div>
    );
};

export default AptitudeTest;
