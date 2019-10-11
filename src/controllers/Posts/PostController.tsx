import React from "react";
import PostsUI from "../../components/Posts/PostsUI/PostsUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import Axios from "axios";

/**
 * Handles everything associated with posts
 */

const uri_submit_post = `${Endpoints.route}/${Endpoints.posts}`;

//Submit a new post
const submitPost = (postInfo: any) => {
  Axios.post(uri_submit_post, postInfo, {
    data: {
      Authentication: `${localStorage.getItem("token")}`
    }
  })
    .then(function(response) {
      // const res = JSON.parse(JSON.stringify(response.data));
      // localStorage.setItem("token", res.tokenData.token);
      //refresh page after post?
      console.log(response);
    })
    .catch(function(error) {
      console.log("error: " + error);
    });
};

export default function Posts() {
  return <PostsUI submitPost={submitPost}/>;
}
