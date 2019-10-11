import React from "react";
import Content from "../Content/Content";
import Navbar from "../../Navbar/Navbar";
import Posts from "../Posts";
import "../../../assets/styles/Post/posts.css";

const PostsUI = (props: any) => {
  console.log("token from posts", localStorage.getItem("token"));
  return (
    <div className="container-fluid min-100 d-flex flex-column">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <Navbar />

      <div className="row flex-grow-1 no-gutter">
        <div className="col-8 offset-2">
          <div className="h-100 d-flex flex-column">
            <div className="row no-gutter">
              <div className="col-8 offset-2">
                <Content submitPost={props.submitPost} />
              </div>
            </div>
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsUI;
