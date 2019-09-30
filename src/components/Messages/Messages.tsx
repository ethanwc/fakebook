import React from "react";
import MessageSent from "./Message/MessageSent";
import MessageReceived from "./Message/MessageSent";

export default function Messages() {
  // todo: parse actual messages
  let messages = ["steve", "jobs", "bill", "gahtes", "eric ocman"].map(
    (item, i) => <MessageReceived Name={item} Image={""} Message={""} />
  );

  return <div>{messages}</div>;
}
