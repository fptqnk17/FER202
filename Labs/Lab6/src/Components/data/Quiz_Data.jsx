export const jsQuizz = {
  questions: [
    {
      question: "Which of the following is a basic hook in react?",
      choices: ["useReducer()", "useMemo()", "useCallback()", "useContext()"],
      type: "MCQs",
      correctAnswer: "useContext()",
    },

    {
      question: "What is ReactJS?",
      choices: [
        "Server-side framework",
        "User Interface framework",
        "both a and b",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "User Interface framework",
    },

    {
      question:
        "Identify the one which is used to pass data to components from outside.",
      choices: ["Render with arguments", "setState", "PropTypes", "props"],
      type: "MCQs",
      correctAnswer: "props",
    },

    {
      question: "In which language is React.js written?",
      choices: ["Python", "Java", "C#", "JavaScript"],
      type: "MCQs",
      correctAnswer: "JavaScript",
    },

    {
      question: "What is Babel?",
      choices: [
        "JavaScript interpreter",
        "JavaScript transpiler",
        "JavaScript compiler",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "JavaScript compiler",
    },

    {
      question: "React is a ___.",
      choices: [
        "Frontend Framework",
        "Backend Framework",
        "JavaScript Library",
        "JavaScript Module",
      ],
      type: "MCQs",
      correctAnswer: "JavaScript Library",
    },

    {
      question: "JSX allows us to write____.",
      choices: [
        "BootStrap in React",
        "Jquery in React",
        "HTML in React",
        "MongoDB in React",
      ],
      type: "MCQs",
      correctAnswer: "HTML in React",
    },

    {
      question:
        "Which of the following statement must be written in a class component heading?",
      choices: [
        "extends React.Component",
        "extends React",
        "extends ReactDOM",
        "extends ReactRouter",
      ],
      type: "MCQs",
      correctAnswer: "extends React.Component",
    },

    {
      question: "What tool does React use to compile JSX?",
      choices: ["React Router", "Babel", "JSX compiler", "ReactDOM"],
      type: "MCQs",
      correctAnswer:
        "Babel",
    },
    
    {
      question: "What is the correct syntax for  arrow function?",
      choices: ["()", "=>", "() =>", ">=()"],
      type: "MCQs",
      correctAnswer: "() =>",
    },
  ],
};

export const resultInitalState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};
