import React from "react";

const MessageBar = (props: any) => {
  const time = new Date().toLocaleTimeString();
  const showChatButton = props.hideChat ? (
    <div className="pt-2">
      <div className="d-flex float-right justify-content-center">
        <i
          className="material-icons mt-2 mr-3"
          onClick={() => props.setHideChat(false)}
        >
          menu
        </i>
      </div>
    </div>
  ) : null;
  return (
    <div className="row chat-box-bar">
      <div className="col-md-4 align-self-center">
        <div className="d-flex">
          {showChatButton}
          <div>
            <p className="m-0 p-0 text-imp">{props.profileInfo[0].name}</p>
            <p className="m-0 mb-1 p-0 text-unimp">
              {props.profileInfo[0].status}
            </p>
          </div>
        </div>
      </div>
      <div className="col-4 align-self-center">
        <div className="d-flex ">
          <i className="material-icons text-unimp my-auto pr-1">access_time</i>
          {/* todo: actual time */}
          <p className="m-0 p-0">{time}</p>
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
                onChange={e => props.setMessageSearch(e.target.value)}
                value={props.messageSearch}
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBar;
