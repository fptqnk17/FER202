import { Link } from "react-router-dom";
import "../assets/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        BAKA Web
      </a>

      <ul className="nav-link">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/news">
          <li>News</li>
        </Link>
        <Link to="/quiz-home">
          <li>Quiz</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
