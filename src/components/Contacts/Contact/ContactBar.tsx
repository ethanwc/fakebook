import React, { useState } from "react";
import { Link } from "react-router-dom";
const ContactBar = (props: any) => {
  return (
    <div className="row contact-box-bar">
      <div className="col p-0 m-0">
        <div className="d-flex">
          <div className="d-flex flex-grow-1">
            <div className="p-2">
              <Link to={"/"} className="">
                <i className="m-0 mt-2 p-0 ml-3 material-icons">arrow_back</i>
              </Link>
            </div>

            <div className="my-auto mr-2 flex-grow-1">
              <input
                type="text"
                className="form-control rounded ml-2"
                placeholder="Search Chats"
                onChange={e => props.setChatSearch(e.target.value)}
                value={props.chatSearch}
                required
              />
            </div>
          </div>

          <div className="p-2">
            <div className="d-flex float-right justify-content-center">
              <i className="material-icons mt-2 ml-2 mr-2">menu</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
