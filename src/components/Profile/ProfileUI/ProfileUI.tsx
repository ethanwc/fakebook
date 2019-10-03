import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import "../../../assets/styles/Profile/profile.css";
export default function ProfileUI() {
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
      </div>
    </div>
  );
}
