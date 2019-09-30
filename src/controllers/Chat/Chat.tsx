import React from "react";
import MessageSent from "../../components/Messages/Message/MessageSent";
import MessageReceived from "../../components/Messages/Message/MessageReceived";
import Contact from "../../components/Contacts/Contact/Contact";

export default function Messages() {
  // todo: parse actual messages

  let contacts = ["steve", "jobs", "bill", "gahtes", "eric ocman"].map(
    (item, i) => <Contact Name={item} Image={""} Message={""} />
  );

  let messages = ["steve", "jobs", "bill", "gahtes", "eric ocman"].map(
    (item, i) => <MessageReceived Name={item} Image={""} Message={""} />
  );

  return (
    <div>
      <div className="row no-gutter">
        <div className="col-4">{contacts}</div>

        <div className="col-6">{messages}</div>
      </div>
    </div>
  );
}
