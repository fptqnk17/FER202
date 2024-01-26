/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import { QuestionData, data } from "./QuestionData";
import "./Quiz.scss";

const Quiz: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [question, setQuestion] = useState<QuestionData>(data[index]);
  const [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<boolean>(false);

  const optionRefs = Array.from({ length: question.answers.length }, () =>
    useRef<HTMLLIElement>(null)
  );

  const checkAns = (e: React.MouseEvent<HTMLLIElement>, ansIndex: number) => {
    if (question.correctAnswer === ansIndex) {
      e.currentTarget.classList.add("correct");
      setScore((prev) => prev + 1);
    } else {
      e.currentTarget.classList.add("wrong");
      optionRefs[question.correctAnswer].current!.classList.add("correct");
    }
    next();
  };

  const next = () => {
    if (index === data.length - 1) {
      setResult(true);
      return 0;
    }
    setIndex((prev) => prev + 1);
    setQuestion(data[index + 1]);
    optionRefs.forEach((option) => {
      option.current!.classList.remove("correct");
      option.current!.classList.remove("wrong");
    });
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setResult(false);
  };

  return (
    <div className="container">
      <h1>FER303 - Lab 3- Quiz App</h1>
      <hr></hr>
      {result ? (
        <></>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            {question.answers.map((answer, ansIndex) => (
              <li
                key={ansIndex}
                ref={optionRefs[ansIndex]}
                onClick={(e) => {
                  checkAns(e, ansIndex);
                }}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="index">
            {index + 1} of {data.length} questions
          </div>
        </>
      )}
      {result ? (
        <>
          <h2>
            Your Scored {score} out of {data.length}
          </h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Quiz;
