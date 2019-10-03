import React from "react";
import Content from "../Content/Content";
import PostHeader from "../Post/PostHeader";
import PostBody from "../Post/PostBody";
import PostComment from "../Post/PostComment";
import PostNewComment from "../Post/PostNewComment";
import Navbar from "../../Navbar/Navbar";
import "../../../assets/styles/Post/posts.css";
export default function Post() {
  return (
    <div className="row flex-grow-1 no-gutter">
      <div className="col-8 offset-2">
        <div className="h-100 d-flex flex-column">
          <div className="post m-2 mt-3 rounded">
            <PostHeader />
            <PostBody />
            <PostComment />
            <PostNewComment />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
