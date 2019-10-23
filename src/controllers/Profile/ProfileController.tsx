import React, { useEffect } from "react";
import ProfileUI from "../../components/Profile/ProfileUI/ProfileUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import history from "../../utils/history";
import Axios from "axios";

/**
 * Profile Controller
 */
const Profile = (props: any) => {
  //uri to update profile
  const uri_profile_update = `${Endpoints.route}/${Endpoints.users}/${Endpoints.profile}`;
  //uri to follow a profile
  const uri_profile_follow = `${Endpoints.route}/${Endpoints.users}/${Endpoints.follow}`;
  //uri to get profile info
  const uri_profile_info = `${Endpoints.route}/${
    Endpoints.users
  }/${localStorage.getItem("view_profile")}`;
  //uri to get user's own posts
  const uri_chat_create = `${Endpoints.route}/${Endpoints.chat}/${Endpoints.create}`;

  useEffect(() => {
    const fetchData = async () => {
      //profile data is being overidden, update id to profile data
      const profile = await Axios.get(uri_profile_info, {});
      props.setViewProfileInfo(profile.data);
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
        props.setViewProfileInfo([response.data]);
        //add or remove... or just use server logic and display?
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
        props.setViewProfileInfo([response.data]);
        //add or remove... or just use server logic and display?
      })
      .catch(function(error) {
        //handle error
      });
  };

  //create a chat between someone, and also just route them to that chat via activechat
  //todo: move active chat to app from chat controller
  const createChat = (members: string[]) => {
    Axios.post(uri_chat_create, members, {
      data: {
        members: members,
        Authentication: `${localStorage.getItem("token")}`
      }
    })
      .then(function(response) {
        console.log(response.data[0]);

        props.setActiveChat(response.data[0]);

        //load all chats a user is in
        const uri_all_chats = `${Endpoints.route}/${
          Endpoints.chat
        }/${localStorage.getItem("_id")}/${Endpoints.all}`;

        //load profile info and chats
        const fetchData = async () => {
          Axios.get(uri_all_chats).then(async chats => {
            // props.setChats(chats.data);
            history.push("/chat");
          });
        };
        fetchData();
      })
      .catch(function(error) {
        console.log(error);
        //handle error
      });
  };

  return (
    <ProfileUI
      createChat={createChat}
      imgurls={props.imgurls}
      setViewProfileInfo={props.setViewProfileInfo}
      viewProfileInfo={props.viewProfileInfo}
      profileInfo={props.profileInfo}
      setProfileInfo={props.setProfileInfo}
      posts={props.posts}
      setPosts={props.setPosts}
      followProfile={followProfile}
      editProfile={editProfile}
      setStatus={props.setStatus}
      updateProfile={props.updateProfile}
    />
  );
};

export default Profile;
