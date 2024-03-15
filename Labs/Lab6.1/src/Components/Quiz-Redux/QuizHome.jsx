import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearHistory } from "./QuizSlice";
import "./scss/QuizHome.scss";

const QuizHome = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const quizHistory = useSelector((state) => state.quiz?.history);

  const handleStart = () => {
    history.push("/quiz");
  };
  const handleClearHistory = () => {
    dispatch(clearHistory());
    localStorage.removeItem("quizHistory");
  };

  useEffect(() => {
    localStorage.setItem("quizHistory", JSON.stringify(quizHistory));
  }, [quizHistory]);
  return (
    <div className="quiz-home">
      <h2>Welcome to the Quiz Page</h2>
      <div className="quiz-fluid">
        <div className="quiz-intro">
          {" "}
          <p>
            <strong>Name:</strong> JavaScript Quiz
          </p>
          <p>
            <strong>Create by: </strong> Quoc Chuong
          </p>
          <p>
            <strong>Description: </strong>
          </p>
          <p>
            - This is a simple quiz app built using <strong>React</strong> and{" "}
            <strong>Redux</strong>.
          </p>
          <p>
            - JavaScript Quiz have <strong>20</strong> question.
          </p>
          <p>
            - For each correct answer you will receive <strong>5</strong>{" "}
            points.
          </p>
          <p>
            - You can start the quiz by clicking the <strong>Start </strong>
            button below.
          </p>
        </div>
        <button className="quiz-start" onClick={handleStart}>
          Start
        </button>
        <div className="quiz-history">
          <h3>Quiz History</h3>
          <div className="history">
            {quizHistory && quizHistory.length > 0 && (
              <button onClick={handleClearHistory}>Clear History</button>
            )}
            {quizHistory && quizHistory.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Score</th>
                    <th>Status</th>
                    <th>Start Time</th>
                  </tr>
                </thead>
                <tbody>
                  {quizHistory.map((quiz, index) => {
                    const date = new Date(quiz.startTime);
                    const formattedDate = date.toLocaleString("vi-VN", {
                      timeZone: "Asia/Ho_Chi_Minh",
                    });

                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{quiz.score}</td>
                        <td className={quiz.status === 'Passed' ? 'status-passed' : 'status-not-passed'}>{quiz.status}</td>
                        <td>{formattedDate}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <h3>No results</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizHome;
