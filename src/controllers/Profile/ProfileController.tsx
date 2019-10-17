import React, { useState, useEffect } from "react";
import ProfileUI from "../../components/Profile/ProfileUI/ProfileUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import Axios from "axios";

/**
 * Profile Controller
 */
const Profile = (props: any) => {
  const id = localStorage.getItem("view_profile");

  //hooks for profile info
  const [profileInfo, setProfileInfo] = useState();
  //hooks for posts info
  const [posts, setPosts] = useState();

  //uri to follow a profile
  const uri_profile_follow = `${Endpoints.route}/${Endpoints.users}/${Endpoints.follow}`;
  //uri to get profile info
  const uri_profile_info = `${Endpoints.route}/${Endpoints.users}/${id}/${Endpoints.info}`;
  //uri to get user's own posts
  const uri_get_user_posts = `${Endpoints.route}/${Endpoints.users}/${id}/${Endpoints.posts}`;
  //get info for the users profile

  useEffect(() => {
    const fetchData = async () => {
      const profile = await Axios.get(uri_profile_info, {});
      setProfileInfo(profile.data);
      console.log("a");
      console.log(profile.data);
      const posts = await Axios(uri_get_user_posts);
      setPosts(posts.data);
    };
    fetchData();
  }, []);

  const followProfile = (followInfo: any) => {
    Axios.post(uri_profile_follow, followInfo, {
      data: {
        Authentication: `${localStorage.getItem("token")}`
      }
    })
      .then(function(resposne) {
        setProfileInfo([resposne.data]);
        //add or remove... or just use server logic and display?
        console.log("b");
        console.log(resposne.data);
      })
      .catch(function(error) {
        //handle error
      });
  };

  // console.log(profileInfo);
  // console.log(posts);

  return (
    <ProfileUI
      profileInfo={profileInfo}
      posts={posts}
      followProfile={followProfile}
    />
  );
};

export default Profile;
