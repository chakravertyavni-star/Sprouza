import "../styles/Navbar.css";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <h1 className="logo">
          CSE<span>.Visualized</span>
        </h1>

        {/* Links */}
        <ul className="nav-links">

          <li>Home</li>
          <li>Subjects</li>
          <li>Visualizer</li>
          <li>Roadmap</li>
          <li>About</li>

        </ul>

        {/* Button */}
        <button className="nav-btn">
          Start Learning
        </button>

        {/* Mobile Icon */}
        <div className="menu-icon">
          <Menu size={30} />
        </div>

      </div>

    </nav>
  );
}

export default Navbar;