import React from "react";
import Post from "./Post/Post";
import history from "../../utils/history";

const Posts = (props: any) => {
  if (props.posts === undefined) return <p>Loading</p>;

  //only show the posts of the profile being viewed hence we are already in profile view.
  let filteredPosts =
    history.location.pathname === "/profile"
      ? props.posts.filter(
          (i: any) => i.authorid === localStorage.getItem("view_profile")
        )
      : props.posts;

  return (
    <div>
      {filteredPosts.map(
        (item: {
          _id: string;
          comments: [];
          authorid: string;
          content: string;
          title: string;
          type: string;
        }) => (
          <Post
            imgurls={props.imgurls}
            updateProfile={props.updateProfile}
            setViewProfileInfo={props.setViewProfileInfo}
            Title={item.title}
            type={item.type}
            authorid={item.authorid}
            Content={item.content}
            submitComment={props.submitComment}
            _id={item._id}
            comments={item.comments}
            likePost={props.likePost}
            favoritePost={props.favoritePost}
            liked={props.liked}
            favorited={props.favorited}
            likeComment={props.likeComment}
            likedComment={props.likedComment}
          />
        )
      )}
    </div>
  );
};

export default Posts;
