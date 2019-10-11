import React, { useState, useEffect } from "react";
import PostsUI from "../../components/Posts/PostsUI/PostsUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import Axios from "axios";

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
        if (response.status === 200) {
          const newPost = {
            content: postInfo.content,
            title: postInfo.title,
            author: {
              name: "billy"
            }
          };

          setPosts([...posts, newPost]);
        }
      })
      .catch(function(error) {
        console.log("error: " + error);
      });
  };

  return <PostsUI submitPost={submitPost} posts={posts} />;
};

export default PostsController;
