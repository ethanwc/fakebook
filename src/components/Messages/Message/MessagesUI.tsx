import React, { CSSProperties, useState } from "react";
import Messages from "../Messages";
import MessageInput from "./MessageInput";

const MessagesUI = (props: any) => {
  let style: CSSProperties = {
    height: "200px",
    overflow: "auto",
    scrollbarWidth: "none"
  };

  return (
    <div className="col-8 chat-box">
      <div className="h-100 d-flex flex-column">
        <div className="flex-grow-1" style={style}>
          <Messages messages={props.messages} activeChat={props.activeChat} />
        </div>
        <div className="row justify-content-center align-content-center">
          <MessageInput
            activeChat={props.activeChat}
            sendMessage={props.sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default MessagesUI;
