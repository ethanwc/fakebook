import * as React from "react";
import "./MessageSent.css";

interface MessageSentProps {
  Name: string;
  Image: string;
  Message: string;
}

const MessageSent: React.FC<MessageSentProps> = ({ Name, Image, Message }) => (
  <div className="col-md-8 offset-md-4 p-2 mt-1 mb-1">
    <div className="message sent rounded-bottom rounded-left">
      <p className="text-unimp m-2">12:32PM</p>
      <p className="text-imp m-2">
        There is a big message right here for you test test test There is a big
        message right here for you test test test test
      </p>
    </div>
  </div>
);

export default MessageSent;
