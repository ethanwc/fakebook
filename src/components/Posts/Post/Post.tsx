import * as React from "react";
import PostHeader from "../Post/PostHeader";
import PostBody from "../Post/PostBody";
import PostComment from "../Post/PostComment";
import PostNewComment from "../Post/PostNewComment";
import "../../../assets/styles/Post/posts.css";

interface PostProps {
  Name: string;
}

const Post: React.FC<PostProps> = ({ Name }) => (
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

export default Post;
