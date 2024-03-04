import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/HomePage";
import About from "./Components/AboutPage";
import News from "./Components/NewsPage";
import QuizPage from "./Components/QuizPage";
import Contact from "./Components/ContactPage";
import Quiz from "./Components/Quiz";
import QuizReviewPage from "./Components/QuizReviewPage";
import { HistoryProvider } from './Components/data/Context';

const App = () => {
  return (
    <HistoryProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" Component={Home} exact>
            <Home />
          </Route>

          <Route path="/about" Component={About} exact>
            <About />
          </Route>

          <Route path="/news" Component={News} exact>
            <News />
          </Route>

          <Route path="/quiz" Component={QuizPage} exact>
            <QuizPage />
          </Route>

          <Route path="/quiz/start" component={Quiz} />
          <Route path="/quiz/review" component={QuizReviewPage} />

          <Route path="/contact" Component={Contact} exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </HistoryProvider>
  );
};

export default App;