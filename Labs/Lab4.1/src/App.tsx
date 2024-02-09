import { lazy } from "react";
import { tsQuiz } from "./data/Data";

const Quiz = lazy(() => import("./components/Quiz/Quiz"));

const App = () => {
  return <Quiz questions={tsQuiz.questions} />;
};

export default App;
