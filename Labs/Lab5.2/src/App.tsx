import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import News from "./pages/News";
import Quiz from "./pages/Quiz";

import Error404 from "./pages/Error404";

import "./App.scss";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error404 /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/news", element: <News /> },
  { path: "/quiz", element: <Quiz /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;