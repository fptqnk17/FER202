import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <h1>
      404 - Page Not Found <Link to="/">Home</Link>
    </h1>
  );
};

export default Error404;