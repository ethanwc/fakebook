import React, { CSSProperties } from "react";
import ProfileBar from "../ProfileBar";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import "../../../assets/styles/Profile/profile.css";
import PostsController from "../../../controllers/Posts/PostController";

const scrollStyle: CSSProperties = {
  height: "400px",
  overflow: "auto",
  scrollbarWidth: "none"
};

const ProfileUI = (props: any) => {
  return (
    <div className="container-fluid min-100 d-flex flex-column">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <div className="row flex-grow-1 no-gutter">
        <div className="col-3">
          <ProfileInfo
            setViewProfileInfo={props.setViewProfileInfo}
            profileInfo={props.profileInfo}
            setProfileInfo={props.setProfileInfo}
            posts={props.posts}
            followProfile={props.followProfile}
            editProfile={props.editProfile}
            setStatus={props.setStatus}
          />
        </div>

        <div className="col-9 contact-box">
          <div className="h-100 d-flex flex-column">
            <ProfileBar />

            <div className="flex-grow-1" style={scrollStyle}>
              <PostsController
                updateProfile={props.updateProfile}
                setViewProfileInfo={props.setViewProfileInfo}
                componentVal={false}
                profileInfo={props.profileInfo}
                setProfileInfo={props.setProfileInfo}
                posts={props.posts}
                setPosts={props.setPosts}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUI;
