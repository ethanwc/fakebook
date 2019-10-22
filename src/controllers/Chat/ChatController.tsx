import React, { useState, useEffect } from "react";
import ChatUI from "../../components/Chat/ChatUI/ChatUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import Axios from "axios";

const ChatController = (props: any) => {
  //hooks for chat info
  const [contacts, setContacts] = useState("");
  const [chats, setChats] = useState("");

  //load profile info if not already loaded
  const uri_profile_info = `${Endpoints.route}/${
    Endpoints.users
  }/${localStorage.getItem("_id")}`;

  useEffect(() => {
    const fetchData = async () => {
      const profile = await Axios.get(uri_profile_info, {});
      props.setProfileInfo([profile.data]);
    };
    fetchData();
  }, []);

  if (props.profileInfo === undefined) return <p> loading</p>;

  console.log(props.profileInfo);

  return <ChatUI />;
};

export default ChatController;
