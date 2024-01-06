import React, { useEffect, useState } from "react";
import "./Navbar.css"; // Assuming you have a corresponding CSS file
import "../../styles/animate.css";
import "../../styles/bootstrap.css";
import "../../styles/styles.css";
import logo from "../../images/logo-2024.png"; // Adjust the path to your image
import { Link } from "react-router-dom";
import SmoothScrollLink from "../SmoothScrollLink/SmoothScrollLink";
const Navbar = () => {
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarCollapsed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="header" data-spy="scroll">
      <nav
        className={`navbar  navbar-collapse ${
          navbarCollapsed ? "top-nav-collapse" : ""
        } navbar-default navbar-fixed-top`}
        style={{ paddingTop: "10px" }}
      >
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="" href="#home">
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "9vh",
                  width: "auto",
                  marginTop: "-3vh",
                }}
              />
            </a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <SmoothScrollLink className="page-scroll" to="/#home">
                  <span> Home</span>
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink className="page-scroll" to="/#about">
                  <span> About</span>
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink className="page-scroll" to="/#services">
                  <span> Passion</span>
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink className="page-scroll" to="/#contact">
                  <span>Contact Me</span>
                </SmoothScrollLink>
              </li>
              <li className="dropdown">
                <Link
                  to=""
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Work <span className="caret"></span>
                </Link>
                <ul
                  className="dropdown-menu"
                  style={{ backgroundColor: "#490D40" }}
                >
                  <li>
                    <a href="#blogs">Blogs</a>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <a href="#videos">Videos</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
