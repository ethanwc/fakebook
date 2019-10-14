import React, { useState, useEffect } from "react";
import PostsUI from "../../components/Posts/PostsUI/PostsUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import Axios from "axios";
import { array } from "prop-types";

/**
 * Handles everything associated with posts
 */
const uri_get_posts = `${Endpoints.route}/${Endpoints.posts}`;

const PostsController = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(uri_get_posts);
      setPosts(result.data);
    };
    fetchData();
  }, []);

  const uri_submit_post = `${Endpoints.route}/${Endpoints.posts}`;

  //Submit a new post
  const submitPost = (postInfo: any) => {
    Axios.post(uri_submit_post, postInfo, {
      data: {
        Authentication: `${localStorage.getItem("token")}`
      }
    })
      .then(function(response) {
        console.log(response);
        if (response.status === 200) {
          let res = response.data;
          const newPost = {
            comments: [],
            _id: res._id,
            content: res.content,
            title: res.title,
            author: res.author
          };

          /**
           * {comments: Array(0), _id: "5da4cdb94f89104f30d6143e", content: "awdawdwda", title: "billy shared a post", author: {…}, …}
author: {friends: Array(0), _id: "5d9e587eb670520fd4d65fa8", name: "billy", email: "bill@mail.com", __v: 0}
comments: []
content: "awdawdwda"
title: "billy shared a post"
__v: 0
_id: "5da4cdb94f89104f30d6143e"
           */

          // console.log("**********************");
          // console.log(posts);
          // console.log(posts[0]);
          // console.log(newPost);
          setPosts([...posts, newPost]);
        }
      })
      .catch(function(error) {
        console.log("error: " + error);
      });
  };

  const submitComment = (comment: string, _id: string) => {
    //find post that was clicked on
    let postToUpdate = posts.find((i: { _id: string }) => i._id === _id);

    //since we are submitting a comment, need to add a new comment to the post.
    const newComment = {
      id: _id,
      comment: comment
    };

    let updatedComments = [...postToUpdate.comments, newComment];

    postToUpdate.comments = updatedComments;
    const updatedPost = postToUpdate;

    //uri for specific post to update
    const uri_update_post = `${Endpoints.route}/${Endpoints.posts}/${_id}`;

    Axios.patch(uri_update_post, updatedPost, {
      data: {
        Authentication: `${localStorage.getItem("token")}`
      }
    })
      .then(function(response) {
        if (response.status === 200) {
          console.log("worked");
          var updateIndex = posts.find((i: { _id: string }) => i._id === _id);

          let postsToUpdate = [...posts];
          postsToUpdate.splice(updateIndex, 1, updatedPost);

          setPosts(postsToUpdate);

          //todo: update posts by replacing current post with new post because comments are sub components
        }
      })
      .catch(function(error) {
        console.log("error: " + error);
      });

    // console.log(postToUpdate);

    // for (let comment of postToUpdate.comments)
    // console.log(comment.comment, comment.id);

    // console.log(postToUpdate.comments[0].comment);
    // console.log(postToUpdate);

    // console.log(comment, _id);
    //need userid, comment, postid... just need postid now
    // Axios.post(uri_submit_post, postInfo, {
    //   data: {
    //     Authentication: `${localStorage.getItem("token")}`
    //   }
    // })
    //   .then(function(response) {
    //     if (response.status === 200) {
    //       const newPost = {
    //         content: postInfo.content,
    //         title: postInfo.title,
    //         author: {
    //           name: "billy"
    //         }
    //       };

    //       setPosts([...posts, newPost]);
    //     }
    //   })
    //   .catch(function(error) {
    //     console.log("error: " + error);
    //   });
  };

  return (
    <PostsUI
      submitPost={submitPost}
      submitComment={submitComment}
      posts={posts}
    />
  );
};

export default PostsController;
