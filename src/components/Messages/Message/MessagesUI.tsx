import React, { CSSProperties } from "react";
import Messages from "../Messages";

const MessagesUI = (props: any) => {
  let style: CSSProperties = {
    height: "200px",
    overflow: "auto",
    scrollbarWidth: "none"
  };

  //todo; use hooks for input
  const handleSendMessage = () => {
    const messageInfo = {
      author: localStorage.getItem("_id"),
      date: new Date().toLocaleString(),
      content: "fake message test 1234",
      type: "msg"
    };

    props.sendMessage(messageInfo, props.activeChat);
  };
  return (
    <div className="col-8 chat-box">
      <div className="h-100 d-flex flex-column">
        <div className="flex-grow-1" style={style}>
          <Messages />
        </div>
        <div className="row justify-content-center align-content-center">
          <div className="input-group">
            <input
              type="text"
              className="form-control chat-input input-lg"
              placeholder="Enter a message"
            />
            <div className="input-group-append">
              <button className="btn" type="button" onClick={handleSendMessage}>
                <i className="material-icons">send</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesUI;
