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
  authorid: string;
  comments: [];
  submitComment: Function;
  favoritePost: Function;
  likePost: Function;
  liked: Function;
  favorited: Function;
  likeComment: Function;
  likedComment: Function;
  updateInfo: Function;
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
  comments,
  authorid,
  updateInfo
}) => {
  return (
    <div className="row flex-grow-1 no-gutter">
      <div className="col-12">
        <div className="h-100 d-flex flex-column">
          <div className="post m-2 mt-3 rounded">
            <PostHeader
              Title={Title}
              favoritePost={favoritePost}
              likePost={likePost}
              postid={_id}
              liked={liked}
              favorited={favorited}
              authorid={authorid}
              updateInfo={updateInfo}
            />
            <PostBody Content={Content} />
            {/* map through comments to display them. */}
            {comments.map(
              (item: {
                id: string;
                comment: string;
                author: string;
                authorid: string;
              }) => (
                <PostComment
                  comment={item.comment}
                  author={item.author}
                  likeComment={likeComment}
                  likedComment={likedComment}
                  postid={_id}
                  id={item.id}
                  authorid={item.authorid}
                  updateInfo={updateInfo}
                />
              )
            )}
            <PostNewComment
              submitComment={submitComment}
              _id={_id}
              authorid={authorid}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
