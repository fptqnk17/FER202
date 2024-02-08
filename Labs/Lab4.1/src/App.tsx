import Quiz from "./components/Quiz/Quiz";
import { tsQuiz } from "./data/Data";

const App = () => {
  return <Quiz questions={tsQuiz.questions} />;
};

export default App;
