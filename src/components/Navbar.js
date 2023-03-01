import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const [navbar, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <div className={click ? "main-container" : ""} onClick={() => Close()}>
      <nav
        className={navbar ? "sticky" : "navbar"}
        fixed="top"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="nav-container">
          <NavLink className="logo">
            <h2>
              <span>P</span>ortfolio
            </h2>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/resume"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blogs"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
