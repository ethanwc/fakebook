import React from "react";
import ProfileBar from "../ProfileBar";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import "../../../assets/styles/Profile/profile.css";

const scrollStyle = {
  height: "400px",
  overflow: "auto",
  "scrollbar-width": "none"
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
          <ProfileInfo profileInfo={props.profileInfo} />
        </div>

        <div className="col-9 contact-box">
          <div className="h-100 d-flex flex-column">
            <ProfileBar />

            <div className="flex-grow-1" style={scrollStyle}>
              {/* <Posts
                getPosts={props.getPosts}
                submitComment={props.submitComment}
                posts={props.posts}
                likePost={props.likePost}
                favoritePost={props.favoritePost}
                liked={props.liked}
                favorited={props.favorited}
                likeComment={props.likeComment}
                likedComment={props.likedComment}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUI;
