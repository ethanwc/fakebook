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

  //uri to get profile info
  const uri_profile_info = `${Endpoints.route}/${Endpoints.users}/${id}/${Endpoints.info}`;
  //uri to get user's own posts
  const uri_get_user_posts = `${Endpoints.route}/${Endpoints.users}/${id}/${Endpoints.posts}`;
  //get info for the users profile

  useEffect(() => {
    const fetchData = async () => {
      const profile = await Axios.get(uri_profile_info, {});
      setProfileInfo(profile.data);
      const posts = await Axios(uri_get_user_posts);
      setPosts(posts.data);
    };
    fetchData();
  }, []);

  //todo: logic to always view your own posts... can't follow yourself or maybe dont render
  //check if current profile id is your profile id to determine to render follow button

  //todo: logic for viewing each profile.
  //store person to view as props? clicking on their icon anywhere => sets profile ui.
  //only view your own via your own button or view profile?
  //just do a profiletoview in localstorage

  const followProfile = () => {};

  // console.log(profileInfo);
  // console.log(posts);

  return <ProfileUI profileInfo={profileInfo} posts={posts} />;
};

export default Profile;
