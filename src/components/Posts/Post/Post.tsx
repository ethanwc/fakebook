import * as React from "react";
import PostHeader from "../Post/PostHeader";
import PostBody from "../Post/PostBody";
import PostComment from "../Post/PostComment";
import PostNewComment from "../Post/PostNewComment";
import "../../../assets/styles/Post/posts.css";

interface PostProps {
  Name: string;
  Title: string;
  Content: string;
}

const Post: React.FC<PostProps> = ({ Name, Title, Content }) => (
  <div className="row flex-grow-1 no-gutter bg-warning">
    <div className="col-8 offset-2">
      <div className="h-100 d-flex flex-column bg-primary">
        <div className="post m-2 mt-3 rounded bg-light">
          <PostHeader Title={Title} />
          <PostBody Content={Content} />
          {/* <PostComment /> */}
          <PostNewComment />{" "}
          {/* todo: new comment should be logged in user's info */}
        </div>
      </div>
    </div>
  </div>
);

export default Post;
