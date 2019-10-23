import React, { useState, useEffect } from "react";
import ChatUI from "../../components/Chat/ChatUI/ChatUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import Axios from "axios";

const ChatController = (props: any) => {
  //hooks for chat info
  const [chats, setChats] = useState();
  const [activeChat, setActiveChat] = useState();
  //used to search chats by user names
  const [chatSearch, setChatSearch] = useState("");
  //used to search messages by content
  const [messageSearch, setMessageSearch] = useState("");

  //load profile info if not already loaded
  const uri_profile_info = `${Endpoints.route}/${
    Endpoints.users
  }/${localStorage.getItem("_id")}`;
  //load all chats a user is in
  const uri_all_chats = `${Endpoints.route}/${
    Endpoints.chat
  }/${localStorage.getItem("_id")}/${Endpoints.all}`;

  //load profile info and chats
  useEffect(() => {
    const fetchData = async () => {
      await Axios.get(uri_profile_info).then(async profile => {
        // props.setProfileInfo(profile.data);
        Axios.get(uri_all_chats).then(chats => {
          setChats(chats.data);
          if (chats.data.length > 0) setActiveChat(chats.data[0]._id);
        });
      });
    };
    fetchData();
  }, []);

  //todo: loading animation
  if (props.profileInfo === undefined) return <p> loading</p>;

  const updateIndex = () => chats.findIndex((c: any) => c._id === activeChat);

  const uri_send_message = `${Endpoints.route}/${Endpoints.chat}/${Endpoints.message}`;
  const sendMessage = (messageInfo: any, chatId: string) => {
    Axios.post(uri_send_message, messageInfo, {
      data: {
        chatId: chatId,
        Authentication: `${localStorage.getItem("token")}`
      }
    }).then(function(response) {
      let updatedChat = response.data.chat;
      let messages = response.data.messages;
      updatedChat.messages = messages;
      let chatsClone = [...chats];
      chatsClone[updateIndex()] = updatedChat;
      setChats(chatsClone);
    });
  };

  return (
    <ChatUI
      updateProfile={props.updateProfile}
      messageSearch={messageSearch}
      setMessageSearch={setMessageSearch}
      chatSearch={chatSearch}
      setChatSearch={setChatSearch}
      profileInfo={props.profileInfo}
      chats={chats}
      sendMessage={sendMessage}
      activeChat={activeChat}
      setActiveChat={setActiveChat}
    />
  );
};

export default ChatController;
