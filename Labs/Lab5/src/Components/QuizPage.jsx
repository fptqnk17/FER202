import { useReducer } from "react";
import { resultInitalState } from "./data/Quiz_Data";
import "../assets/Quiz.scss";

const initialState = {
  currentQuestion: 0,
  answersIdx: null,
  answer: "",
  result: resultInitalState,
  showResult: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ANSWER":
      return { ...state, answersIdx: action.index, answer: action.answer };
    case "SET_RESULT":
      return { ...state, result: action.result, answersIdx: null };
    case "SET_CURRENT_QUESTION":
      return { ...state, currentQuestion: action.currentQuestion };
    case "SHOW_RESULT":
      return { ...state, showResult: action.showResult };
    case "TRY_AGAIN":
      return { ...initialState };
    default:
      throw new Error();
  }
}

const QuizPage = ({ questions }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { question, choices, correctAnswer } = questions[state.currentQuestion];

  const onAnswerClick = (answer, index) => {
    dispatch({
      type: "SET_ANSWER",
      index,
      answer: answer === correctAnswer,
    });
  };

  const onClickNext = () => {
    const newResult = state.answer
      ? {
          ...state.result,
          score: state.result.score + 5,
          correctAnswers: state.result.correctAnswers + 1,
        }
      : {
          ...state.result,
          wrongAnswers: state.result.wrongAnswers + 1,
        };

    dispatch({ type: "SET_RESULT", result: newResult });

    if (state.currentQuestion !== questions.length - 1) {
      dispatch({
        type: "SET_CURRENT_QUESTION",
        currentQuestion: state.currentQuestion + 1,
      });
    } else {
      dispatch({ type: "SET_CURRENT_QUESTION", currentQuestion: 0 });
      dispatch({ type: "SHOW_RESULT", showResult: true });
    }
  };

  const onTryAgain = () => {
    dispatch({ type: "TRY_AGAIN" });
  };

  return (
    <div className="container">
      <h2 className="name">BaKa Quiz</h2>
      <div className="quiz-container">
        {!state.showResult ? (
          <>
            <span className="active-question-no">
              {state.currentQuestion + 1}
            </span>
            <span className="total-question">/{questions.length}</span>
            <h2>{question}</h2>
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerClick(answer, index)}
                  key={answer}
                  className={
                    state.answersIdx === index ? "selected-answer" : null
                  }
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div className="footer">
              <button
                onClick={onClickNext}
                disabled={state.answersIdx === null}
              >
                {state.currentQuestion === questions.length - 1
                  ? "Finish"
                  : "Next"}
              </button>
            </div>
          </>
        ) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total score: <span>{state.result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{state.result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{state.result.wrongAnswers}</span>
            </p>

            <button onClick={onTryAgain}>Try Again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
