import React, { useState, useEffect } from "react";
import ProfileUI from "../../components/Profile/ProfileUI/ProfileUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import Axios from "axios";

/**
 * Profile Controller
 */
const Profile = (props: any) => {
  //hooks for profile info
  const [profileInfo, setProfileInfo] = useState();
  //hooks for posts info
  const [posts, setPosts] = useState();
  //uri to get profile info
  const uri_profile_info = `${Endpoints.route}/${
    Endpoints.users
  }/${localStorage.getItem("_id")}/${Endpoints.info}`;
  //uri to get user's own posts
  const uri_get_user_posts = `${Endpoints.route}/${
    Endpoints.users
  }/${localStorage.getItem("_id")}/${Endpoints.posts}`;
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
  const followProfile = () => {
    
  }



  return <ProfileUI profileInfo={profileInfo} posts={posts} />;
};

export default Profile;
