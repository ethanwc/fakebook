import React, { Component } from "react";
import Post from "./Post/Post";

const Posts = (props: any) => {
  if (props.posts === undefined) return <p>Loading</p>;
  console.log(props.posts);
  return (
    <div>
      {props.posts.map(
        (item: {
          _id: string;
          comments: [];
          author: {
            name: string;
            _id: string;
          };
          content: string;
          title: string;
        }) => (
          <Post
            Name={item.author.name}
            Title={item.title}
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
            authorid={item.author._id}
          />
        )
      )}
    </div>
  );
};

export default Posts;
