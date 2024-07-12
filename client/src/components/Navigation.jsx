import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav justify-content-center nav-underline nav-fill flex-column flex-sm-row">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={
            currentPage === "/projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/about"
          className={currentPage === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
