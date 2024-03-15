import { createSlice } from "@reduxjs/toolkit";
import { jsQuizz, resultInitalState } from "./QuizData";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions: jsQuizz.questions,
    currentQuestionIndex: 0,
    score: resultInitalState.score,
    correctAnswers: resultInitalState.correctAnswers,
    wrongAnswers: resultInitalState.wrongAnswers,
    userAnswers: [],
    selectedAnswer: null,
    history: JSON.parse(localStorage.getItem('quizHistory')) || [],
  },
  reducers: {
    answerQuestion: (state, action) => {
      const userAnswer = action.payload;
      state.userAnswers[state.currentQuestionIndex] = userAnswer;
      state.selectedAnswer = userAnswer;

      const correctAnswer =
        state.questions[state.currentQuestionIndex].correctAnswer;
      if (userAnswer === correctAnswer) {
        state.correctAnswers += 1;
      } else {
        state.wrongAnswers += 1;
      }
      state.score = (state.correctAnswers / state.questions.length) * 100;
    },
    clearSelectedAnswer: (state) => {
      state.selectedAnswer = null;
    },
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    goToPrevQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    goToFirstQuestion: (state) => {
      state.currentQuestionIndex = 0;
    },
    goToLastQuestion: (state) => {
      state.currentQuestionIndex = state.questions.length - 1;
    },
    goToSpecificQuestion: (state, action) => {
      state.currentQuestionIndex = action.payload;
      state.selectedAnswer = state.userAnswers[action.payload];
    },
    saveQuizResult: (state, action) => {
      state.history.push(action.payload);
    },
    clearHistory: (state) => {
      state.history = [];
    },
    quitQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.score = resultInitalState.score;
      state.correctAnswers = resultInitalState.correctAnswers;
      state.wrongAnswers = resultInitalState.wrongAnswers;
      state.userAnswers = [];
      state.selectedAnswer = null;
    },
  },
});

export const {
  answerQuestion,
  goToNextQuestion,
  goToPrevQuestion,
  goToFirstQuestion,
  goToLastQuestion,
  goToSpecificQuestion,
  clearSelectedAnswer,
  saveQuizResult,
  clearHistory,
  quitQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
