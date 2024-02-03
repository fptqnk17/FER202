import Quiz from "./Components/Quiz_Redux.jsx";
import { jsQuizz } from "./Components/Data.jsx";

function App() {
  return <Quiz questions={jsQuizz.questions} />;
}

export default App;
