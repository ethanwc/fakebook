import React, { Component } from "react";
import ContactList from "./ContactList/ContactList";
import Message from "./Message";
/**
 * Show the messages, and chatbox for users.
 * Swap between recent messages and contacts.
 * Search for contacts.
 * List of messages for a conversation.
 */
export class MessageBox extends Component {
  render() {
    let tempStyle = {
      height: "100%",
      overflow: "hidden"
    };

    return (
      <div className="">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />

        <form>
          <div className="form-group" style={tempStyle}>
            <label>Message</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control "
                id="messageInput"
                placeholder="Enter a message"
              />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">
                  Send
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default MessageBox;
