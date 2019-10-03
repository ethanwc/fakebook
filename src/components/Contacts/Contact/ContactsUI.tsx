import React from "react";
import Contacts from "../Contacts";

export default function ContactsUI() {
  let style = {
    height: "200px",
    overflow: "auto",
    "scrollbar-width": "none"
  };
  return (
    <div className="col-4 contact-box">
      <div className="h-100 d-flex flex-column">
        <div className="flex-grow-1 " style={style}>
          <Contacts />
        </div>
      </div>
    </div>
  );
}
