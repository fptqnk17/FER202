import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./Components/TodoList";
import SquareAreaCalculator from "./Components/AreaSquare";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/square-area-calculator" element={<SquareAreaCalculator />} />
        <Route path="/" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;