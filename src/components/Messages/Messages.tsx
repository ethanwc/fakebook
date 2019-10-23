import React from "react";
import MessageSent from "./Message/MessageSent";
import MessageReceived from "./Message/MessageReceived";
import { string } from "prop-types";

const Messages = (props: any) => {
  if (props.messages === undefined) return <p> loading</p>;
  const generateMessage = (authorid: string, date: string, content: string) => {
    const msg =
      authorid === localStorage.getItem("_id") ? (
        <MessageSent
          messageSearch={props.messageSearch}
          date={date}
          content={content}
        />
      ) : (
        <MessageReceived
          messageSearch={props.messageSearch}
          authorid={authorid}
          date={date}
          content={content}
          updateProfile={props.updateProfile}
        />
      );
    return msg;
  };

  return (
    <div>
      {props.messages.map(
        (message: { author: string; date: string; content: string }) =>
          generateMessage(message.author, message.date, message.content)
      )}
    </div>
  );
};

export default Messages;
