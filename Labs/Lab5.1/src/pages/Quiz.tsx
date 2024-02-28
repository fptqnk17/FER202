import NavbarComponent from "../components/NavbarComponent";
import { tsQuiz } from "../data/Data";
import { Container } from "react-bootstrap";
import QuizComponent from "../components/Quiz/QuizComponent";

const Quiz = () => {
  return (
    <>
      <NavbarComponent />
      <Container>
        <QuizComponent questions={tsQuiz.questions} />
      </Container>
    </>
  );
};

export default Quiz;
