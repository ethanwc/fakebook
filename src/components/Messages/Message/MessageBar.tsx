import React from "react";

const MessageBar = () => {
  return (
    <div className="row chat-box-bar">
      <div className="col-md-4 align-self-center">
        <p className="m-0 p-0 text-imp">James Bond</p>
        <p className="m-0 mb-1 p-0 text-unimp">Online</p>
      </div>
      <div className="col-4 align-self-center">
        <div className="d-flex ">
          <i className="material-icons text-unimp my-auto pr-1">access_time</i>
          <p className="m-0 p-0">12:32PM</p>
        </div>
      </div>
      <div className="col-4 my-auto">
        <div className="float-right align-self-center">
          <div className="d-flex flex-grow-1">
            <div className="p-2 flex-grow-1">
              <input
                type="text"
                className="form-control rounded"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageBar;