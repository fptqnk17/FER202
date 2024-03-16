import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CalculatorSquareArea from "./components/CalculatorSquareArea";
import TodoList from "./components/TodoList";

const router = createBrowserRouter([
  { path: "/", element: <TodoList /> },
  { path: "/square", element: <CalculatorSquareArea /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
