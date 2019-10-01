import React from "react";
import ContactsUI from "../../components/Contacts/Contact/ContactsUI";
import MessagesUI from "../../components/Messages/Message/MessagesUI";
import ContactBar from "../../components/Contacts/Contact/ContactBar";
import MessageBar from "../../components/Messages/Message/MessageBar";

/**
 * Creates the chat ui from various components, composed of contacts and messages.
 */
export default function Chat() {
  let style = {
    height: "200px",
    overflow: "auto",
    "scrollbar-width": "none"
  };

  return (
    <div className="container-fluid min-100 d-flex flex-column">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="row no-gutter">
        <div className="col-4">
          <ContactBar />
        </div>
        <div className="col-8">
          <MessageBar />
        </div>
      </div>

      <div className="row flex-grow-1 no-gutter">
        <ContactsUI />

        <MessagesUI />
      </div>
    </div>
  );
}
