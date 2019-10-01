import React from "react";
import Content from "./Content/Content";
import PostHeader from "./Post/PostHeader";
import PostBody from "./Post/PostBody";
import PostComment from "./Post/PostComment";
import PostNewComment from "./Post/PostNewComment";

export default function Posts() {
  return (
    <div className="container-fluid min-100 d-flex flex-column">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="row flex-grow-1 no-gutter">
        <div className="col-8 offset-2">
          <div className="h-100 d-flex flex-column">
            <div className="row no-gutter">
              <div className="col-8 offset-2">
                <Content />
              </div>
            </div>
            <div className="post m-2 mt-3 rounded">
              <PostHeader />

              <PostBody />

              <PostComment />
              <PostNewComment />
            </div>

            <div className="post m-2 mt-3 rounded">
              <PostHeader />

              <PostBody />

              <PostComment />
              <PostNewComment />
            </div>

            <div className="post m-2 mt-3 rounded">
              <PostHeader />

              <PostBody />

              <PostComment />
              <PostNewComment />
            </div>

            <div className="post m-2 mt-3 rounded">
              <PostHeader />

              <PostBody />

              <PostComment />
              <PostNewComment />
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="h-100 d-flex flex-column"></div>
        </div>
      </div>
    </div>
  );
}
