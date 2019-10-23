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
  if (props.chats === undefined || props.activeChat === undefined)
    return <p> loading chatui</p>;

  const filteredChat = props.chats.find(
    (x: { _id: any }) => x._id === props.activeChat
  );

  const contactBar = (
    <ContactBar
      setHideChat={props.setHideChat}
      chatSearch={props.chatSearch}
      setChatSearch={props.setChatSearch}
    />
  );

  const messageBar = (
    <MessageBar
      hideChat={props.hideChat}
      setHideChat={props.setHideChat}
      messageSearch={props.messageSearch}
      setMessageSearch={props.setMessageSearch}
      profileInfo={props.profileInfo}
    />
  );

  const contactsUI = (
    <ContactsUI
      updateProfile={props.updateProfile}
      chatSearch={props.chatSearch}
      chats={props.chats}
      setActiveChat={props.setActiveChat}
    />
  );

  const messagesUI = (
    <MessagesUI
      updateProfile={props.updateProfile}
      messageSearch={props.messageSearch}
      messages={filteredChat.messages}
      sendMessage={props.sendMessage}
      activeChat={props.activeChat}
    />
  );

  const bars = props.hideChat ? (
    <div className="row no-gutter">
      <div className="col-12">{messageBar}</div>
    </div>
  ) : (
    <div className="row no-gutter">
      <div className="col-4">{contactBar}</div>
      <div className="col-8">{messageBar}</div>
    </div>
  );

  const uis = props.hideChat ? (
    <div className="row flex-grow-1 no-gutter">
      <div className="col-12 chat-box">{messagesUI}</div>
    </div>
  ) : (
    <div className="row flex-grow-1 no-gutter">
      {contactsUI}
      <div className="col-8 chat-box">{messagesUI}</div>
    </div>
  );

  return (
    <div className="container-fluid min-100 d-flex flex-column">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <script
        type="text/javascript"
        src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"
      ></script>
      {bars}
      {uis}
    </div>
  );
};

export default ChatUI;
