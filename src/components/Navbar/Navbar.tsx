import React from "react";
import { Link } from "react-router-dom";
import Status from "../Status/Status";
const Navbar = (props: any) => {
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
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand">
        <img src={require("./logo.png")} alt="" className="logo" />
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ">
          <Status
            ownProfile={true}
            profileInfo={props.profileInfo}
            setProfileInfo={props.setProfileInfo}
          />
          <li>
            <Link to={"/chat"} className="nav-link">
              Chat
            </Link>
          </li>
          <Link to={"/profile"} className="nav-link" onClick={handleRoute}>
            Profile
          </Link>

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
