import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/HomePage";
import About from "./Components/AboutPage";
import News from "./Components/NewsPage";
import Quiz from "./Components/QuizPage";
import Contact from "./Components/ContactPage";
import { jsQuizz } from "./Components/data/Quiz_Data";

const App = () => {
  return (
    <>
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

          <Route path="/quiz" Component={Quiz} exact>
            <Quiz questions={jsQuizz.questions}/> 
          </Route>

          <Route path="/contact" Component={Contact} exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
