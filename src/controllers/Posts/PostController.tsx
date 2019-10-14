import React, { useState, useEffect } from "react";
import PostsUI from "../../components/Posts/PostsUI/PostsUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import Axios from "axios";
import history from "../../utils/history";

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

          setPosts([...posts, newPost]);
        }
      })
      .catch(function(error) {
        console.log("error: " + error);
        //assuming unauthorized, redirect to login
        history.push("/login");
      });
  };

  const submitComment = (comment: string, _id: string) => {
    //find post that was clicked on
    let postToUpdate = posts.find((i: { _id: string }) => i._id === _id);

    //since we are submitting a comment, need to add a new comment to the post.
    const newComment = {
      id: _id,
      comment: comment,
      author: localStorage.getItem("name")
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
        //assuming unauthorized, redirect to login
        history.push("/login");
      });
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
