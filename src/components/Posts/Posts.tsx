import React, { Component } from "react";
import Post from "./Post/Post";


const Posts = (props: any) => {
  console.log(props.posts);
  if (props.posts === undefined) return <p>Loading</p>;
  return (
    <div>
      {props.posts
        .reverse()
        .map(
          (item: {
            author: {
              name: string;
            };
            content: string;
            title: string;
          }) => (
            <Post
              Name={item.author.name}
              Title={item.title}
              Content={item.content}
            />
          )
        )}
    </div>
  );
};

export default Posts;
