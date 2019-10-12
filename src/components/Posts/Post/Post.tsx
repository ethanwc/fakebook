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
  _id: string;
  comments: [];
  submitComment: Function;
}

const Post: React.FC<PostProps> = ({
  Name,
  Title,
  Content,
  submitComment,
  _id,
  comments
}) => (
  <div className="row flex-grow-1 no-gutter">
    <div className="col-8 offset-2">
      <div className="h-100 d-flex flex-column">
        <div className="post m-2 mt-3 rounded">
          <PostHeader Title={Title} />
          <PostBody Content={Content} />
          {/* map through comments to display them. */}
          {comments.map((item: { id: string; comment: string }) => (
            <PostComment comment={item.comment} />
          ))}
          <PostNewComment submitComment={submitComment} _id={_id} />{" "}
          {/* Send patch request to /posts/:id */}
          {/* must provide the comment and user id */}
        </div>
      </div>
    </div>
  </div>
);

export default Post;
