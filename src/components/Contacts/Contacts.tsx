import React, { useState, useEffect } from "react";
import Contact from "./Contact/Contact";

const Contacts = (props: any) => {
  const generateContact = (members: string[], chatid: string) => {
    const otherid = members.filter(i => i !== localStorage.getItem("_id"));
    return (
      <Contact
        chatSearch={props.chatSearch}
        authorid={otherid[0]}
        chatid={chatid}
        setActiveChat={props.setActiveChat}
      />
    );
  };

  return (
    <div>
      {props.chats.map((item: { _id: string; members: [] }) =>
        generateContact(item.members, item._id)
      )}
    </div>
  );
};

export default Contacts;
