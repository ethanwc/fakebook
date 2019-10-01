import React from 'react'
import Messages from "../Messages"
export default function MessagesUI() {
      let style = {
        height: "200px",
        overflow: "auto",
        "scrollbar-width": "none"
      };
    return (
        <div className="col-8 chat-box">
          <div className="h-100 d-flex flex-column">
            <div className="h-100 d-flex flex-column">
              <div className="flex-grow-1" style={style}>
                <Messages />
              </div>
              <div className="row justify-content-center">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control chat-input"
                    placeholder="Enter a message"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                      <i className="material-icons">send</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
