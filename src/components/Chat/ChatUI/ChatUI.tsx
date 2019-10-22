import React from "react";
import ContactBar from "../../Contacts/Contact/ContactBar";
import MessageBar from "../../Messages/Message/MessageBar";
import ContactsUI from "../../Contacts/Contact/ContactsUI";
import MessagesUI from "../../Messages/Message/MessagesUI";
import "../../../assets/styles/Scroll/ScrollStyle.css";
import "../../../assets/styles/Chat/Chat.css";

/**
 * Creates the chat ui from various components, composed of contacts and messages.
 */
const ChatUI = (props: any) => {
  if (props.chats !== undefined) {
    console.error(props.chats);
  }
  //how this works: ... lots of different chats, clicking a chat sets the currentChat hook which results in those messages being displaced in the messageui
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
        {/* <ContactsUI /> */}
        {/* todo: rename to ChatsUI  */}

        <MessagesUI
          // todo: array.one() where the chatid is the active chat, then display those messages
          messages={props.messages}
          sendMessage={props.sendMessage}
          activeChat={props.activeChat}
        />
      </div>
    </div>
  );
};

export default ChatUI;
