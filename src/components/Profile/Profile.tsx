import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Profile() {
  return (
    <div className="container-fluid min-100 d-flex flex-column">
      <div className="row flex-grow-1 no-gutter">
        <div className="col-3">
          <ProfileInfo />
        </div>
      </div>
    </div>
  );
}
