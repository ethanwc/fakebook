import React from "react";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={require("./logo.png")} alt="" className="logo" />
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/chat">
              Chat
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/profile">
              Profile <span className="sr-only">(current)</span>
            </a>
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
          <li className="nav-item">
            <a className="nav-link" href="/logout">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
