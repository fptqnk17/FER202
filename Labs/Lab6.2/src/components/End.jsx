import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetQuiz } from "../redux/action/quizAction";
import { formatTime } from "../utils";
import quizData from "../data/quiz.json";
import Modal from "./Modal";
import Trophy from "../assets/images/trophy.png";

const End = () => {
  const dispatch = useDispatch();
  const { answers,time } = useSelector((state) => state.quizReducer);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    let correct = 0;
    answers.forEach((result, index) => {
      if (result.a === quizData?.data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
  }, []);
  const handleReset = () => {
    dispatch(resetQuiz());
  };
  return (
    <div className="endBox">
      <img src={Trophy} className="trophy" alt="" srcset="" />
      <h3>Your results</h3>
      <p>
        {correctAnswers} of {quizData?.data.length}
      </p>
      <p>
        <strong>
          {Math.floor((correctAnswers / quizData?.data.length) * 100)}%
        </strong>
      </p>
      <p>
        <strong>Your time:</strong> {time}sec
      </p>
      <section>
        <button className="button" onClick={() => setModal(true)}>
          Check your answers
        </button>
        <button
          className="button"
          style={{ marginLeft: "20px" }}
          onClick={handleReset}
        >
          Try again
        </button>
      </section>
      <Modal show={modal}>
        <section className="modalBody">
          <header>
            <p className="">Your Answers</p>
            <p  style={{
              cursor: "pointer"
            }} onClick={() => setModal(false)}>X</p>
          </header>
          <section className="content">
            <ul>
              {answers.map((result, i) => (
                <li key={i} className="mb-6">
                  <p>
                    <strong>{result.q}</strong>
                  </p>
                  <p
                    className={
                      result.a === quizData?.data[i].answer
                        ? "bg-success"
                        : "bg-danger"
                    }
                  >
                    Your answer: {result.a}
                  </p>
                  {result.a !== quizData?.data[i].answer && (
                    <p className="bg-warning">
                      Correct answer: {quizData?.data[i].answer}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </Modal>
    </div>
  );
};

export default End;
