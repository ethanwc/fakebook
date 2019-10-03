import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import "../../../assets/styles/Profile/profile.css";
import PostHeader from "../../Posts/Post/PostHeader";
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

        <div className="col-9 posts">
          <div className="h-100 d-flex flex-column">
            <div className="row">
              <div className="col-10">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex m-2">
                    <a href="posts.html">
                      <h2 className="mr-3">Posts</h2>
                    </a>
                    <h2 className="ml-3">Photos</h2>
                  </div>

                  <div className="d-flex align-items-center">
                    <i className="fas fa-search" aria-hidden="true"></i>
                    <input className="form-control" type="text" />
                    <i className="material-icons ml-3">view_list</i>
                    <i className="material-icons">view_module</i>
                  </div>
                </div>
                <PostHeader/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
