import React, { CSSProperties, useState, useRef, useEffect } from "react";
import Messages from "../Messages";
import MessageInput from "./MessageInput";

const MessagesUI = (props: any) => {
  let style: CSSProperties = {
    height: "200px",
    overflow: "auto",
    scrollbarWidth: "none"
  };

  return (
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
  );
};

export default MessagesUI;
