import React, { Component } from "react";
import Messages, { MessageBox } from "../MessageBox";
import ContactList from "../ContactList/ContactList";
import { Row, Column } from "simple-flexbox";

export class MessageWindow extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-4">
            <ContactList />
          </div>
          <div className="col-8">
            <MessageBox />
          </div>
        </div>
      </div>
    );
  }
}

export default MessageWindow;
