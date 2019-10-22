import React, { useState } from "react";

const MessageInput = (props: any) => {
  //hook for message input
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const messageInfo = {
      author: localStorage.getItem("_id"),
      date: new Date().toLocaleString(),
      content: message,
      type: "msg"
    };
    if (message.length > 0) {
      props.sendMessage(messageInfo, props.activeChat);
      setMessage("");
    }
  };

  return (
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
  );
};
export default MessageInput;
