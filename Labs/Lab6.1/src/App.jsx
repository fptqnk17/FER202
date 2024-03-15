import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/HomePage";
import About from "./Components/AboutPage";
import News from "./Components/NewsPage";
import Contact from "./Components/ContactPage";
import { Provider } from "react-redux";
import store from "./Components/Quiz-Redux/Store";
import QuizPage from "./Components/Quiz-Redux/QuizPage";
import ReviewQuiz from "./Components/Quiz-Redux/ReviewQuiz";
import QuizHome from "./Components/Quiz-Redux/QuizHome";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/news" component={News} exact />
          <Route path="/quiz-home" component={QuizHome} exact />
          <Route path="/quiz" component={QuizPage} exact />
          <Route path="/quiz/review" component={ReviewQuiz} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;