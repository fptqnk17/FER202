export interface QuestionData {
  question: string;
  answers: string[];
  correctAnswer: number;
}

export const data: QuestionData[] = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 0,
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Jupiter", "Saturn", "Mars", "Earth"],
    correctAnswer: 0,
  },
  {
    question: "Which continent has the highest number of countries?",
    answers: ["Africa", "Asia", "Europe", "South America"],
    correctAnswer: 3,
  },
  {
    question: "Which of the following are types of computer hardware?",
    answers: ["RAM", "FireFox", "Microsoft Windows", "Excel"],
    correctAnswer: 0,
  },
  {
    question: "What is Wi-Fi?",
    answers: [
      "A type of wireless network",
      "A type of computer virus",
      "A type of computer processor",
      "A type of computer memory",
    ],
    correctAnswer: 1,
  },
];

export default QuestionData;
