import React, { useState, useEffect } from "react";
import ProfileUI from "../../components/Profile/ProfileUI/ProfileUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import Axios from "axios";

/**
 * Profile Controller
 */
const Profile = (props: any) => {
  console.error("ppp", props.posts);

  const id = localStorage.getItem("view_profile");

  //uri to set status
  const uri_profile_status = `${Endpoints.route}/${Endpoints.users}/${Endpoints.status}`;
  //uri to update profile
  const uri_profile_update = `${Endpoints.route}/${Endpoints.users}/${Endpoints.profile}`;
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
      props.setProfileInfo(profile.data);
      console.log("a");
      console.log(profile.data);
      const posts = await Axios(uri_get_user_posts);
      props.setPosts(posts.data);
    };
    fetchData();
  }, []);

  //send http req to follow someone's profile
  const followProfile = (followInfo: any) => {
    Axios.post(uri_profile_follow, followInfo, {
      data: {
        Authentication: `${localStorage.getItem("token")}`
      }
    })
      .then(function(response) {
        props.setProfileInfo([response.data]);
        //add or remove... or just use server logic and display?
        console.log("b");
        console.log(response.data);
      })
      .catch(function(error) {
        //handle error
      });
  };

  //edit your profile
  const editProfile = (updateInfo: any) => {
    //takes location, about, id, authentication,
    Axios.post(uri_profile_update, updateInfo, {
      data: {
        Authentication: `${localStorage.getItem("token")}`
      }
    })
      .then(function(response) {
        props.setProfileInfo([response.data]);
        //add or remove... or just use server logic and display?
      })
      .catch(function(error) {
        //handle error
      });
  };

  //setstatus
  const setStatus = (statusInfo: any) => {
    //takes location, about, id, authentication,
    console.log(localStorage.getItem("token"));
    console.log(`${localStorage.getItem("_id")}`);
    Axios.post(uri_profile_status, statusInfo, {})
      .then(function(response) {
        props.setProfileInfo([response.data]);
        //add or remove... or just use server logic and display?
      })
      .catch(function(error) {
        //handle error
      });
  };

  return (
    <ProfileUI
      profileInfo={props.profileInfo}
      posts={props.posts}
      setPosts={props.setPosts}
      followProfile={followProfile}
      editProfile={editProfile}
      setStatus={setStatus}
      setProfileInfo={props.setProfileInfo}
    />
  );
};

export default Profile;
