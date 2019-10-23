import React from "react";
import Content from "../Content/Content";
import Navbar from "../../Navbar/Navbar";
import Posts from "../Posts";
import "../../../assets/styles/Post/posts.css";

const PostsUI = (props: any) => {
  const component = props.component ? (
    <Content
      updateProfile={props.updateProfile}
      profileInfo={props.profileInfo}
      submitPost={props.submitPost}
      content={props.content}
      authorid={localStorage.getItem("_id")}
    />
  ) : null;

  return (
    <div className="container-fluid min-100 d-flex flex-column">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <div className="row flex-grow-1 no-gutter">
        <div className="col-8 offset-2">
          <div className="h-100 d-flex flex-column">
            {component}
            <Posts
              updateProfile={props.updateProfile}
              setViewProfileInfo={props.setViewProfileInfo}
              profileInfo={props.profileInfo}
              getPosts={props.getPosts}
              submitComment={props.submitComment}
              posts={props.posts}
              likePost={props.likePost}
              favoritePost={props.favoritePost}
              liked={props.liked}
              favorited={props.favorited}
              likeComment={props.likeComment}
              likedComment={props.likedComment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsUI;
