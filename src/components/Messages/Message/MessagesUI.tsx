import React, { CSSProperties, useState } from "react";
import Messages from "../Messages";

const MessagesUI = (props: any) => {
  let style: CSSProperties = {
    height: "200px",
    overflow: "auto",
    scrollbarWidth: "none"
  };

  //hook for message input
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const messageInfo = {
      author: localStorage.getItem("_id"),
      date: new Date().toLocaleString(),
      content: message,
      type: "msg"
    };
    props.sendMessage(messageInfo, props.activeChat);
    setMessage("");
  };
  return (
    <div className="col-8 chat-box">
      <div className="h-100 d-flex flex-column">
        <div className="flex-grow-1" style={style}>
          <Messages messages={props.messages} activeChat={props.activeChat} />
        </div>
        <div className="row justify-content-center align-content-center">
          <div className="input-group">
            <input
              type="text"
              className="form-control chat-input input-lg"
              placeholder="Enter a message"
              onChange={e => setMessage(e.target.value)}
              value={message}
              pattern=".{1,}"
              required
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
