import React, { CSSProperties, useState, useRef, useEffect } from "react";
import Messages from "../Messages";
import MessageInput from "./MessageInput";

const MessagesUI = (props: any) => {
  let style: CSSProperties = {
    height: "200px",
    overflow: "auto",
    scrollbarWidth: "none"
  };

  //todo: scroll to bottom
  const scrollMessagesRef = useRef(null);

  // const scrollToBottom = () => {
  //   let chatbox = document.getElementById("chat-box");
  //   if (chatbox !== null) {
  //     chatbox.scrollTop = chatbox.scrollHeight;
  //     console.log(chatbox.scrollHeight);
  //     chatbox.scrollTo(0, chatbox.scrollHeight);
  //   }
  // };

  // useEffect(scrollToBottom);

  return (
    <div className="col-8 chat-box">
      <div className="h-100 d-flex flex-column">
        <div className="flex-grow-1" id="chat-box" style={style}>
          <Messages
            messageSearch={props.messageSearch}
            updateProfile={props.updateProfile}
            messages={props.messages}
            activeChat={props.activeChat}
          />
        </div>
        <div className="row justify-content-center align-content-center">
          <MessageInput
            activeChat={props.activeChat}
            sendMessage={props.sendMessage}
          />
        </div>
      </div>
      {/* <div ref={scrollMessagesRef} /> */}
    </div>
  );
};

export default MessagesUI;
