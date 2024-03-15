import React from "react";
import { jsQuizz } from "../Components/data/Quiz_Data.jsx";
import { useHistory, useLocation } from "react-router-dom";
import "../assets/QuizReview.scss";

const QuizReviewPage = () => {
  const history = useHistory();
  const location = useLocation();
  const userAnswers = location.state ? location.state.userAnswers : [];

  const handleBack = () => {
    history.push("/quiz");
  };

  return (
    <div className="quiz-review">
      <h2>Quiz Review</h2>
      {/* <div className="question-list">
          {jsQuizz.questions.map((_, index) => (
            <a
              href={`#question-${index + 1}`}
              style={{
                backgroundColor:
                  userAnswers[index] === jsQuizz.questions[index].correctAnswer
                    ? "lightgreen"
                    : "lightcoral",
                margin: "5px",
                padding: "5px",
                textDecoration: "none",
                color: "black",
              }}
              key={index}
            >
              {index + 1}
            </a>
          ))}
        </div> */}
      {jsQuizz.questions.map((question, index) => (
        <div
          className={`review ${
            userAnswers[index] === question.correctAnswer
              ? "correct"
              : "incorrect"
          }`}
          key={index}
          id={`question-${index + 1}`}
        >
          <h3>
            Q{index + 1}: {question.question}
          </h3>
          {question.choices.map((choice, choiceIndex) => (
            <p
              key={choiceIndex}
              className={`answer-block ${
                userAnswers[index] === choice ? "selected-answer" : ""
              }`}
            >
              {choice}
            </p>
          ))}
          <p className="answer-block correct-answer">
            Correct answer: {question.correctAnswer}
          </p>
        </div>
      ))}
      <button onClick={handleBack}>Finish Review</button>
    </div>
  );
};

export default QuizReviewPage;
