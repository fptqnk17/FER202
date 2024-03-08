import { useState } from "react";
import { Question, ResultState, resultInitalState } from "../../data/Data";
import "./QuizComponent.scss";
import AnswerTimer from "../AnswerTimer/AnswerTimer";

const QuizComponent = (props: { questions: Question[] }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState<number | null>(null);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const [result, setResult] = useState<ResultState>(resultInitalState);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [showAnswerTimer, setShowAnswerTimer] = useState<boolean>(true);

  const { question, choices, correctAnswer } = props.questions[currentQuestion];

  const onAnswerClick = (answer: string, index: number) => {
    setAnswerIdx(index);

    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = (isFinalAnwser: boolean) => {
    setAnswerIdx(null);
    setShowAnswerTimer(false);

    setResult((prev): ResultState => {
      return isFinalAnwser
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          };
    });

    if (currentQuestion !== props.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }

    setTimeout(() => setShowAnswerTimer(true));
  };

  const onTryAgain = () => {
    setShowResult(false);
    setResult(resultInitalState);
  };

  const hanldeTimeUp = () => {
    setAnswer(false);
    onClickNext(false);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          {showAnswerTimer && (
            <AnswerTimer duration={8} onTimeUp={hanldeTimeUp} />
          )}
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">/{props.questions.length}</span>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerClick(answer, index)}
                key={answer}
                className={answerIdx == index ? "selected-answer" : ""}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="footer">
            <button
              onClick={() => onClickNext(answer !== null)}
              disabled={answerIdx == null}
            >
              {currentQuestion === props.questions.length - 1
                ? "Finish"
                : "Next"}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="result">
            <h3>Result</h3>
            <p>
              Total questions: <span>{props.questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Total correct answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Total wrong answers: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={onTryAgain}>Try Again</button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizComponent;