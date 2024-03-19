import {
  QUIZ_START,
  QUIZ_NEXT,
  QUIZ_SUBMIT,
  QUIZ_RESET,
  QUIZ_PREV,
  QUIZ_TIMEOUT,
} from "../constant/quizConstant";

export const startQuiz = (time) => (dispatch) => {
  dispatch({
    type: QUIZ_START,
    payload: time,
  });
};

export const nextQuiz =
  ({ answers }) =>
  (dispatch) => {
    dispatch({
      type: QUIZ_NEXT,
      payload: answers,
    });
  };

export const prevQuiz = () => (dispatch) => {
  dispatch({
    type: QUIZ_PREV,
    payload: null,
  });
};

export const submitQuiz =
  ({ answers, time }) =>
  (dispatch) => {
    dispatch({
      type: QUIZ_SUBMIT,
      payload: {
        answers: answers,
        time: time,
      },
    });
  };

export const resetQuiz = () => (dispatch) => {
  dispatch({
    type: QUIZ_RESET,
    payload: null,
  });
};

export const timeOut = () => (dispatch) => {
  dispatch({
    type: QUIZ_TIMEOUT,
    payload: null,
  });
};
