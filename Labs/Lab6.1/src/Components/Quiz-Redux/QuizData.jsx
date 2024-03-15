export const jsQuizz = {
  questions: [
    {
      question:
        "What is the default local host port that a React development server uses?",
      choices: ["3000", "3500", "5000", "8080"],
      type: "MCQs",
      correctAnswer: "3000",
    },

    {
      question: "Which keyword creates a constant in JavaScript?",
      choices: ["let", "const", "constant", "var"],
      type: "MCQs",
      correctAnswer: "const",
    },

    {
      question:
        "Which operator can be used to conditionally render a React component?",
      choices: ["||", "??", "::", "&&"],
      type: "MCQs",
      correctAnswer: "&&",
    },

    {
      question: "Which of the following is a basic hook in react?",
      choices: ["useReducer()", "useMemo()", "useCallback()", "useContext()"],
      type: "MCQs",
      correctAnswer: "useContext()",
    },

    {
      question:
        "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
      choices: ["key", "data", "id", "index"],
      type: "MCQs",
      correctAnswer: "key",
    },

    {
      question: "JSX expressions are wrapped in ___",
      choices: [
        "Angle brackets",
        "Square brackets",
        "Curly brackets",
        "Round brackets",
      ],
      type: "MCQs",
      correctAnswer: "Curly brackets",
    },

    {
      question:
        "What contains the render() function that renders a react element tree to the DOM?",
      choices: ["ReactDOM", "Render", "DOM", "React"],
      type: "MCQs",
      correctAnswer: "ReactDOM",
    },
    {
      question: "What is the correct way to define a variable in SASS?",
      choices: [
        "#primary-color:#888",
        "$primary-color:#888",
        "%primary-color:#888",
        "@primary-color:#888",
      ],
      type: "MCQs",
      correctAnswer: "$primary-color:#888",
    },
    
    {
      question: "In Redux, What do you use 'Reducers' for?",
      choices: [
        "To create a store",
        "To update the state in the Redux's store",
        "To create an action that will pass to the store",
        "To fire an event",
      ],
      type: "MCQs",
      correctAnswer: "To update the state in the Redux's store",
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
      correctAnswer: "Babel",
    },

    {
      question: "What is the correct command to create a new React project?",
      choices: [
        "npm create-react-app",
        "npm create-react-app myReactApp",
        "npx create-react-app myReactApp",
        "npx create-react-app",
      ],
      type: "MCQs",
      correctAnswer: "npx create-react-app myReactApp",
    },

    {
      question:
        "What command is used to start the React local development server?",
      choices: ["npm start", "npm build", "npm run dev", "npm serve"],
      type: "MCQs",
      correctAnswer: "npm start",
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
