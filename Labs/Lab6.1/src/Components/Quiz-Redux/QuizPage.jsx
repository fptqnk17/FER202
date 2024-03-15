import React from "react";
import "./scss/Quiz.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  answerQuestion,
  goToNextQuestion,
  goToPrevQuestion,
  goToFirstQuestion,
  goToLastQuestion,
  goToSpecificQuestion,
  quitQuiz,
  saveQuizResult,
} from "./QuizSlice";

import Swal from "sweetalert2";

const Quiz = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    questions,
    currentQuestionIndex,
    score,
    selectedAnswer,
    userAnswers,
  } = useSelector((state) => state.quiz);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    dispatch(answerQuestion(answer));
  };
  const handleGoToQuestion = (index) => {
    dispatch(goToSpecificQuestion(index));
  };
  const handleSubmit = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to submit!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Submit",
    }).then((result) => {
      if (result.isConfirmed) {
        const status = score >= 40 ? "Passed" : "Not Passed";
        dispatch(
          saveQuizResult({
            score,
            total: questions.length,
            status,
            startTime: new Date().toISOString(),
          })
        );
        Swal.fire({
          title: "Submitted!",
          html: `<p style="font-size: 1.5em; font-weight:bold;">Your score: <span style="color: red;">${score}</span></p>`,
          icon: "success",
          footer:
            '<button id="quit-quiz" class="swal2-cancel swal2-styled">Quit</button><button id="review-quiz" class="swal2-confirm swal2-styled">Review Quiz</button>',
          showConfirmButton: false,
          didOpen: () => {
            document
              .getElementById("review-quiz")
              .addEventListener("click", handleReviewQuiz);
            document
              .getElementById("quit-quiz")
              .addEventListener("click", handleQuitResult);
          },
        });
      }
    });
  };
  const handleReviewQuiz = () => {
    Swal.close();
    history.push("/quiz/review");
  };

  const handleQuitResult = () => {
    dispatch(quitQuiz());
    Swal.close();
    history.push("/quiz-home");
  };
  const handleQuitQuiz = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to quit the quiz!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Quit",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(quitQuiz());
        Swal.close();
        history.push("/quiz-home");
      }
    });
  };
  return (
    <div className="quiz-page">
      <h2>JavaScript Quiz</h2>
      <div className="quiz-container">
        <div className="quiz-item">
          <div className="question">
            {" "}
            <h3>
              Q{currentQuestionIndex + 1}. {currentQuestion.question}
            </h3>
          </div>
          <div className="answers">
            {" "}
            {currentQuestion.choices.map((choice, index) => (
              <button
                className={`quiz-button ${
                  choice === userAnswers[currentQuestionIndex] ? "selected" : ""
                }`}
                key={index}
                onClick={() => handleAnswer(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
        <hr></hr>
        <div className="quiz-action">
          <button
            onClick={() => dispatch(goToFirstQuestion())}
            disabled={currentQuestionIndex === 0}
          >
            First
          </button>
          <button
            onClick={() => dispatch(goToPrevQuestion())}
            disabled={currentQuestionIndex === 0}
          >
            Prev
          </button>
          <button
            onClick={() => dispatch(goToNextQuestion())}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
          </button>
          <button
            onClick={() => dispatch(goToLastQuestion())}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Last
          </button>
        </div>
        <div className="quiz-list">
          {questions.map((_, index) => (
            <button
              className={`quiz-button ${
                index === currentQuestionIndex ? "current" : ""
              } ${userAnswers[index] ? "answered" : ""}`}
              key={index}
              onClick={() => handleGoToQuestion(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <hr></hr>
        <div className="quiz-controller">
          <button className="quit" onClick={handleQuitQuiz}>
            Quit
          </button>
          <button className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
