import React from "react";
import MessageSent from "../../components/Messages/Message/MessageSent";
import MessageReceived from "../../components/Messages/Message/MessageReceived";
import Contact from "../../components/Contacts/Contact/Contact";
import Contacts from "../../components/Contacts/Contacts";
import Messages from "../../components/Messages/Messages";

export default function ChatBox() {
  const contactStyle = {
    height: "400px",
    overflow: "auto"
  };

  return (
    <div>
      <div className="row flex-grow-1 no-gutter">
        <div className="row no-gutter">
          <div className="col-4 contact-box">
            <div className="h-100 d-flex flex-column">
              <div className="flex-grow-1 " style={contactStyle}>
                <Contacts />
              </div>
            </div>
          </div>
          <div className="h-100 d-flex flex-column bg-info">
            <div className="flex-grow-1" style={contactStyle}>
              <div className="col-md-8 offset-md-4 p-2 mt-1 mb-1 bg-warning">
                {<Messages />}
              </div>
              <div className="row justify-content-center">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control chat-input"
                    placeholder="Enter a message"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                      <i className="material-icons">send</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
