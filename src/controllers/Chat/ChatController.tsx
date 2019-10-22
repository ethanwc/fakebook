import React, { useState, useEffect } from "react";
import ChatUI from "../../components/Chat/ChatUI/ChatUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import Axios from "axios";

const ChatController = (props: any) => {
  //hooks for chat info
  const [chats, setChats] = useState();
  const [activeChat, setActiveChat] = useState();

  //load profile info if not already loaded
  const uri_profile_info = `${Endpoints.route}/${
    Endpoints.users
  }/${localStorage.getItem("_id")}`;

  useEffect(() => {
    const fetchData = async () => {
      const profile = await Axios.get(uri_profile_info, {});
      props.setProfileInfo(profile.data);
      console.error(profile.data);
    };
    fetchData();
  }, []);

  if (props.profileInfo === undefined) return <p> loading</p>;

  const loadMessages = async () => {
    let tempChats = [];
    console.error(props.profileInfo[0].chats.length);
    for (let cid of props.profileInfo[0].chats) {
      const uri_get_messages = `${Endpoints.route}/${Endpoints.chat}/${cid}`;
      const messages = await Axios.get(uri_get_messages);
      tempChats.push(messages);
      console.log(messages);
    }
    setChats(tempChats);
    //todo: wont work if user has 0 chats.
    setActiveChat(props.profileInfo[0].chats[0]);
  };

  // loadMessages();

  const uri_send_message = `${Endpoints.route}/${Endpoints.chat}/${Endpoints.message}`;
  const sendMessage = (messageInfo: any, chatId: string) => {
    console.log(uri_send_message);
    console.log("trying to send msg");
    Axios.post(uri_send_message, messageInfo, {
      data: {
        chatid: chatId,
        Authentication: `${localStorage.getItem("token")}`
      }
    }).then(function(response) {
      console.log(response.data);
    });
  };

  return (
    <ChatUI chats={chats} sendMessage={sendMessage} activeChat={activeChat} />
  );
};

export default ChatController;
