import React, { useState, useEffect } from "react";
import ChatUI from "../../components/Chat/ChatUI/ChatUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import history from "../../utils/history";
import Axios from "axios";
import { delay } from "q";

const ChatController = (props: any) => {
  const logged = localStorage.getItem("loggedin");
  if (logged === null || logged === "false") history.push("/login");
  //hooks for chat info
  //used to search chats by user names
  const [chatSearch, setChatSearch] = useState("");
  //used to search messages by content
  const [messageSearch, setMessageSearch] = useState("");
  //hook to show/hide contact section in the chat
  const [hideChat, setHideChat] = useState(false);

  //load profile info if not already loaded
  const uri_profile_info = `${Endpoints.route}/${
    Endpoints.users
  }/${localStorage.getItem("_id")}`;
  //load all chats a user is in
  const uri_all_chats = `${Endpoints.route}/${
    Endpoints.chat
  }/${localStorage.getItem("_id")}/${Endpoints.all}`;

  const scrollToBottom = () => {
    var objDiv = document.getElementById("chat-box");
    if (objDiv !== null) objDiv.scrollTop = objDiv.scrollHeight;
  };
  //load profile info and chats
  useEffect(() => {
    const fetchData = async () => {
      await Axios.get(uri_profile_info).then(async profile => {
        props.setProfileInfo(profile.data);
        Axios.get(uri_all_chats).then(async chats => {
          props.setChats(chats.data);
          if (chats.data !== undefined && chats.data.length > 0)
            if (props.activeChat === undefined)
              props.setActiveChat(chats.data[0]._id);
          await delay(300);

          scrollToBottom();
        });
      });
    };
    fetchData();
  }, []);

  //todo: loading animation
  if (props.profileInfo === undefined) return <p> loading chat controller</p>;

  const updateIndex = () =>
    props.chats.findIndex((c: any) => c._id === props.activeChat);

  const uri_send_message = `${Endpoints.route}/${Endpoints.chat}/${Endpoints.message}`;
  const sendMessage = (messageInfo: any, chatId: string) => {
    Axios.post(uri_send_message, messageInfo, {
      data: {
        chatId: chatId,
        Authentication: `${localStorage.getItem("token")}`
      }
    }).then(async function(response) {
      let updatedChat = response.data.chat;
      let messages = response.data.messages;
      updatedChat.messages = messages;
      let chatsClone = [...props.chats];
      chatsClone[updateIndex()] = updatedChat;
      props.setChats(chatsClone);
      scrollToBottom();
    });
  };

  return (
    <ChatUI
      hideChat={hideChat}
      setHideChat={setHideChat}
      updateProfile={props.updateProfile}
      messageSearch={messageSearch}
      setMessageSearch={setMessageSearch}
      chatSearch={chatSearch}
      setChatSearch={setChatSearch}
      profileInfo={props.profileInfo}
      chats={props.chats}
      sendMessage={sendMessage}
      activeChat={props.activeChat}
      setActiveChat={props.setActiveChat}
    />
  );
};

export default ChatController;
