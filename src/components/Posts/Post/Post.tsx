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
  favoritePost: Function;
  likePost: Function;
  liked: Function;
  favorited: Function;
  likeComment: Function;
  likedComment: Function;
}

const Post: React.FC<PostProps> = ({
  Name,
  Title,
  Content,
  submitComment,
  favoritePost,
  likePost,
  liked,
  favorited,
  likeComment,
  likedComment,
  _id,
  comments
}) => (
  <div className="row flex-grow-1 no-gutter">
    <div className="col-8 offset-2">
      <div className="h-100 d-flex flex-column">
        <div className="post m-2 mt-3 rounded">
          <PostHeader
            Title={Title}
            favoritePost={favoritePost}
            likePost={likePost}
            _id={_id}
            liked={liked}
            favorited={favorited}
          />
          <PostBody Content={Content} />
          {/* map through comments to display them. */}
          {comments.map(
            (item: { id: string; comment: string; author: string }) => (
              <PostComment
                comment={item.comment}
                author={item.author}
                likeComment={likeComment}
                likedComment={likedComment}
                postid={_id}
                id={item.id}
              />
            )
          )}
          <PostNewComment submitComment={submitComment} _id={_id} />{" "}
        </div>
      </div>
    </div>
  </div>
);

export default Post;
