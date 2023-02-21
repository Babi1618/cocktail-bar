import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/john-smilga/react-projects/6574161e31be78f1f4a6171b98f7f002d6fb0130/15-cocktails/final/src/logo.svg"
            alt="my logo"
            className="logo"
          />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
