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
            likes: [],
            favorites: [],
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

  //check if a post is liked by current user
  const liked = (_id: string) => {
    let postToUpdate = posts.find((i: { _id: string }) => i._id === _id);
    console.log(postToUpdate);
    return postToUpdate.likes.includes(localStorage.getItem("_id"));
  };

  //add or remove userid from post array of likers, thereby changing number of likes
  const likePost = (_id: string) => {
    //uri for specific post to update
    const uri_update_post = `${Endpoints.route}/${Endpoints.posts}/${_id}`;

    let postToUpdate = posts.find((i: { _id: string }) => i._id === _id);

    let liked = postToUpdate.likes.includes(localStorage.getItem("_id"));

    //toggle user liking a post / add remove from array
    let likes = liked
      ? postToUpdate.likes.filter(
          (i: string) => i !== localStorage.getItem("_id")
        )
      : [...postToUpdate.likes, localStorage.getItem("_id")];
    postToUpdate.likes = likes;

    const updatedPost = postToUpdate;

    Axios.patch(uri_update_post, updatedPost, {
      data: {
        Authentication: `${localStorage.getItem("token")}`
      }
    })
      .then(function(response) {
        if (response.status === 200) {
          var updateIndex = posts.find((i: { _id: string }) => i._id === _id);

          let postsToUpdate = [...posts];
          postsToUpdate.splice(updateIndex, 1, updatedPost);

          setPosts(postsToUpdate);
        }
      })
      .catch(function(error) {
        console.log("error: " + error);
        //assuming unauthorized, redirect to login
        //todo: check here.
        // history.push("/login");
      });
  };

  //check if a post is favorited by current user
  const favorited = (_id: string) => {
    let postToUpdate = posts.find((i: { _id: string }) => i._id === _id);
    return postToUpdate.favorites.includes(localStorage.getItem("_id"));
  };

  //add or remove userid from post array of favoriters, thereby changing number of favorites
  const favoritePost = (_id: string) => {
    //uri for specific post to update
    const uri_update_post = `${Endpoints.route}/${Endpoints.posts}/${_id}`;

    let postToUpdate = posts.find((i: { _id: string }) => i._id === _id);

    let favorited = postToUpdate.favorites.includes(
      localStorage.getItem("_id")
    );

    //toggle user liking a post / add remove from array
    let favorites = favorited
      ? postToUpdate.favorites.filter(
          (i: string) => i !== localStorage.getItem("_id")
        )
      : [...postToUpdate.favorites, localStorage.getItem("_id")];
    postToUpdate.favorites = favorites;

    const updatedPost = postToUpdate;

    Axios.patch(uri_update_post, updatedPost, {
      data: {
        Authentication: `${localStorage.getItem("token")}`
      }
    })
      .then(function(response) {
        if (response.status === 200) {
          var updateIndex = posts.find((i: { _id: string }) => i._id === _id);

          let postsToUpdate = [...posts];
          postsToUpdate.splice(updateIndex, 1, updatedPost);

          setPosts(postsToUpdate);
        }
      })
      .catch(function(error) {
        console.log("error: " + error);
        //assuming unauthorized, redirect to login
        //todo: check here.
        // history.push("/login");
      });
  };

  return (
    <PostsUI
      submitPost={submitPost}
      submitComment={submitComment}
      posts={posts}
      likePost={likePost}
      favoritePost={favoritePost}
      liked={liked}
      favorited={favorited}
    />
  );
};

export default PostsController;
