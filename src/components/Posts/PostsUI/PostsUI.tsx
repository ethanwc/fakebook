import React from "react";
import Content from "../Content/Content";
import PostHeader from "../Post/PostHeader";
import PostBody from "../Post/PostBody";
import PostComment from "../Post/PostComment";
import PostNewComment from "../Post/PostNewComment";
import Navbar from "../../Navbar/Navbar";
import Post from "../Post/Post";
import Posts from "../Posts";
import "../../../assets/styles/Post/posts.css";
export default function PostsUI() {
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
                <Content />
              </div>
              <Posts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
