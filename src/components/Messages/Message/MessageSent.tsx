import * as React from "react";

interface MessageSentProps {
  date: string;
  content: string;
}

const MessageSent: React.FC<MessageSentProps> = ({ date, content }) => (
  <div className="col-md-8 offset-md-4 p-2 mt-1 mb-1">
    <div className="message sent rounded-bottom rounded-left">
      <p className="text-unimp m-2">{date}</p>
      <p className="text-imp m-2">{content}</p>
    </div>
  </div>
);

export default MessageSent;
