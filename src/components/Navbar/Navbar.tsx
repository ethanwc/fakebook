import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const handleLogout = () => {
    localStorage.setItem("token", "null");
    localStorage.setItem("name", "null");
    localStorage.setItem("_id", "null");
    localStorage.setItem("view_profile", "null");
  };
  //makes sure you go to your own profile
  const handleRoute = () => {
    const id: string = localStorage.getItem("_id") || "null";
    localStorage.setItem("view_profile", id);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={require("./logo.png")} alt="" className="logo" />
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link to={"/chat"} className="nav-link">
              Chat
            </Link>
          </li>
          <li>
            <Link to={"/profile"} className="nav-link" onClick={handleRoute}>
              Profile
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Status
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Online
              </a>
              <a className="dropdown-item" href="#">
                Away
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Offline
              </a>
            </div>
          </li>
          <li>
            <Link to={"/login"} className="nav-link" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
