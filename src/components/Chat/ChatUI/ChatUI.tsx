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
    return <p> loading</p>;

  const filteredChat = props.chats.find(
    (x: { _id: any }) => x._id === props.activeChat
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

      <div className="row no-gutter">
        <div className="col-4">
          <ContactBar
            chatSearch={props.chatSearch}
            setChatSearch={props.setChatSearch}
          />
        </div>
        <div className="col-8">
          <MessageBar
            messageSearch={props.messageSearch}
            setMessageSearch={props.setMessageSearch}
            profileInfo={props.profileInfo}
          />
        </div>
      </div>

      <div className="row flex-grow-1 no-gutter">
        <ContactsUI
          updateProfile={props.updateProfile}
          chatSearch={props.chatSearch}
          chats={props.chats}
          setActiveChat={props.setActiveChat}
        />
        {/* todo: rename to ChatsUI  */}

        <MessagesUI
          updateProfile={props.updateProfile}
          messageSearch={props.messageSearch}
          messages={filteredChat.messages}
          sendMessage={props.sendMessage}
          activeChat={props.activeChat}
        />
      </div>
    </div>
  );
};

export default ChatUI;
