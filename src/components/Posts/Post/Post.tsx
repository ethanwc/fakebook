import * as React from "react";
import PostHeader from "../Post/PostHeader";
import PostBody from "../Post/PostBody";
import PostComment from "../Post/PostComment";
import PostNewComment from "../Post/PostNewComment";
import "../../../assets/styles/Post/posts.css";

interface PostProps {
  Title: string;
  Content: string;
  _id: string;
  authorid: string;
  type: string;
  comments: [];
  submitComment: Function;
  favoritePost: Function;
  likePost: Function;
  liked: Function;
  favorited: Function;
  likeComment: Function;
  likedComment: Function;
  setViewProfileInfo: Function;
  updateProfile: Function;
  imgurls: Map<string, string>;
}

const Post: React.FC<PostProps> = ({
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
  setViewProfileInfo,
  updateProfile,
  imgurls,
  type
}) => {
  return (
    <div className="row flex-grow-1 no-gutter">
      <div className="col-12">
        <div className="h-100 d-flex flex-column">
          <div className="post m-2 mt-3 rounded">
            <PostHeader
              updateProfile={updateProfile}
              Title={Title}
              favoritePost={favoritePost}
              likePost={likePost}
              postid={_id}
              liked={liked}
              favorited={favorited}
              authorid={authorid}
              setViewProfileInfo={setViewProfileInfo}
            />
            <PostBody Content={Content} type={type} />
            {/* map through comments to display them. */}
            {comments.map(
              (item: {
                id: string;
                comment: string;
                author: string;
                authorid: string;
              }) => (
                <PostComment
                  updateProfile={updateProfile}
                  comment={item.comment}
                  author={item.author}
                  likeComment={likeComment}
                  likedComment={likedComment}
                  postid={_id}
                  id={item.id}
                  authorid={item.authorid}
                  setViewProfileInfo={setViewProfileInfo}
                />
              )
            )}
            <PostNewComment
              imgurls={imgurls}
              updateProfile={updateProfile}
              submitComment={submitComment}
              _id={_id}
              authorid={authorid}
              setViewProfile={setViewProfileInfo}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
