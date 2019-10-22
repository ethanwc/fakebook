import React, { CSSProperties } from "react";
import Contacts from "../Contacts";

const ContactsUI = (props: any) => {
  let style: CSSProperties = {
    height: "200px",
    overflow: "auto",
    scrollbarWidth: "none"
  };
  return (
    <div className="col-4 contact-box">
      <div className="h-100 d-flex flex-column">
        <div className="flex-grow-1 " style={style}>
          <Contacts chats={props.chats} setActiveChat={props.setActiveChat} />
        </div>
      </div>
    </div>
  );
};

export default ContactsUI;
