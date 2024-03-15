import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { quitQuiz } from "./QuizSlice";
import "./scss/Review.scss";

const ReviewQuiz = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { questions = [], userAnswers = [] } = useSelector(
    (state) => state.quiz ?? {}
  );
  const handleBackToQuiz = () => {
    dispatch(quitQuiz());
    history.push("/quiz-home");
  };
  return (
    <div className="review-page">
      <h2>Review Quiz</h2>
      <div className="review-container">
        <div className="review-item">
          {questions.map((question, index) => (
            <div
              key={index}
              className={`review-item ${
                userAnswers[index] === question.correctAnswer
                  ? "correct"
                  : "incorrect"
              }`}
            >
              <div className="card">
                <h3>
                  Q{index + 1}. {question.question}
                </h3>
                <ul>
                  {question.choices?.map((choice, choiceIndex) => (
                    <li
                      key={choiceIndex}
                      className={
                        userAnswers[index] === choice ? "user-answer" : ""
                      }
                    >
                      <span>
                        {choice} {userAnswers[index] === choice}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="correct-answer">
                  <strong>Correct answer: {question.correctAnswer} </strong>
                </p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleBackToQuiz}>Finish Review</button>
      </div>
    </div>
  );
};

export default ReviewQuiz;
