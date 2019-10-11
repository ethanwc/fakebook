import React from "react";
import ProfileBar from "../ProfileBar";
import Posts from "../../Posts/Posts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import "../../../assets/styles/Profile/profile.css";

const scrollStyle = {
  height: "400px",
  overflow: "auto",
  "scrollbar-width": "none"
};

const ProfileUI = () => {
  return (
    <div className="container-fluid min-100 d-flex flex-column">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="row flex-grow-1 no-gutter">
        <div className="col-3">
          <ProfileInfo />
        </div>

        <div className="col-9 contact-box">
          <div className="h-100 d-flex flex-column">
            <ProfileBar />

            <div className="flex-grow-1" style={scrollStyle}>
              <Posts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUI;
