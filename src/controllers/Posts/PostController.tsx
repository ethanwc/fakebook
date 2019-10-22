import React, { useEffect } from "react";
import PostsUI from "../../components/Posts/PostsUI/PostsUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import Axios from "axios";
import history from "../../utils/history";
const uuidv1 = require("uuid/v1");
/**
 * Handles everything associated with posts
 */
const uri_get_posts = `${Endpoints.route}/${Endpoints.posts}`;
const uri_profile_info = `${Endpoints.route}/${
  Endpoints.users
}/${localStorage.getItem("_id")}`;
const PostsController = (props: any) => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(uri_get_posts);
      props.setPosts(result.data.posts);
      const profile = await Axios.get(uri_profile_info, {});
      //todo: check here
      // props.setProfileInfo(profile.data);
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
        props.setPosts([...props.posts, response.data]);
      })
      .catch(function(error) {
        console.log("error: " + error);
        //assuming unauthorized, redirect to login
        history.push("/login");
      });
  };

  const submitComment = (comment: string, _id: string) => {
    //find post that was clicked on
    let postToUpdate = props.posts.find((i: { _id: string }) => i._id === _id);

    //since we are submitting a comment, need to add a new comment to the post.
    const newComment = {
      id: uuidv1(),
      likes: [],
      comment: comment,
      author: localStorage.getItem("name"),
      authorid: localStorage.getItem("_id")
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
          let postsToUpdate = [...props.posts];
          props.setPosts(postsToUpdate);

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
    let postToUpdate = props.posts.find((i: { _id: string }) => i._id === _id);
    return postToUpdate.likes.includes(localStorage.getItem("_id"));
  };

  //add or remove userid from post array of likers, thereby changing number of likes
  const likePost = (_id: string) => {
    //uri for specific post to update
    const uri_update_post = `${Endpoints.route}/${Endpoints.posts}/${_id}`;

    let postToUpdate = props.posts.find((i: { _id: string }) => i._id === _id);

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
          let postsToUpdate = [...props.posts];
          props.setPosts(postsToUpdate);
        }
      })
      .catch(function(error) {
        console.log("error: " + error);
        //assuming unauthorized, redirect to login
        history.push("/login");
      });
  };

  //check if a post is favorited by current user
  const favorited = (_id: string) => {
    let postToUpdate = props.posts.find((i: { _id: string }) => i._id === _id);
    return postToUpdate.favorites.includes(localStorage.getItem("_id"));
  };

  //add or remove userid from post array of favoriters, thereby changing number of favorites
  const favoritePost = (_id: string) => {
    //uri for specific post to update
    const uri_update_post = `${Endpoints.route}/${Endpoints.posts}/${_id}`;

    let postToUpdate = props.posts.find((i: { _id: string }) => i._id === _id);

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
          let postsToUpdate = [...props.posts];
          props.setPosts(postsToUpdate);
        }
      })
      .catch(function(error) {
        console.log("error: " + error);
        //assuming unauthorized, redirect to login
        history.push("/login");
      });
  };

  //check if a comment is liked by current user
  const likedComment = (postid: string, commentid: string) => {
    let post = props.posts.find((i: { _id: string }) => i._id === postid);
    let comment = post.comments.find((i: { id: string }) => i.id === commentid);

    return comment.likes.includes(localStorage.getItem("_id"));
  };

  //like a specific comment
  const likeComment = (postid: string, commentid: string) => {
    //uri for specific post to update
    const uri_update_post = `${Endpoints.route}/${Endpoints.posts}/${postid}`;

    //get specific post
    let postToUpdate = props.posts.find(
      (i: { _id: string }) => i._id === postid
    );

    //get specific comment
    let commentToUpdate = postToUpdate.comments.find(
      (i: { id: string }) => i.id === commentid
    );

    let liked = commentToUpdate.likes.includes(localStorage.getItem("_id"));

    let likes = liked
      ? commentToUpdate.likes.filter(
          (i: string) => i !== localStorage.getItem("_id")
        )
      : [...commentToUpdate.likes, localStorage.getItem("_id")];

    postToUpdate.comments.find(
      (i: { id: string }) => i.id === commentid
    ).likes = likes;

    const updatedPost = postToUpdate;

    Axios.patch(uri_update_post, updatedPost, {
      data: {
        Authentication: `${localStorage.getItem("token")}`
      }
    })
      .then(function(response) {
        if (response.status === 200) {
          let postsToUpdate = [...props.posts];
          props.setPosts(postsToUpdate);
        }
      })
      .catch(function(error) {
        console.log("error: " + error);
        //assuming unauthorized, redirect to login
        history.push("/login");
      });
  };

  //Due to posts being showed next to a profile, it should check if their stats are changing.
  const updateInfo = () => {
    const uri_profile_info = `${Endpoints.route}/${
      Endpoints.users
    }/${localStorage.getItem("view_profile")}`;

    const uri_get_user_posts = `${Endpoints.route}/${
      Endpoints.users
    }/${localStorage.getItem("view_profile")}/${Endpoints.posts}`;

    const fetchData = async () => {
      const profile = await Axios.get(uri_profile_info, {});
      props.setProfileInfo(profile.data);
      //todo: review this code
      // const posts = await Axios(uri_get_user_posts);
      // props.setPosts(posts.data);
    };
    fetchData();
  };

  return (
    <PostsUI
      submitPost={submitPost}
      submitComment={submitComment}
      posts={props.posts}
      likePost={likePost}
      favoritePost={favoritePost}
      liked={liked}
      favorited={favorited}
      likeComment={likeComment}
      likedComment={likedComment}
      component={props.componentVal}
      updateInfo={updateInfo}
    />
  );
};

export default PostsController;
