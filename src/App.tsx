import React from "react";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Messages from "./components/Messages/Messages";
import Chat from "./controllers/Chat/Chat";

const App: React.FC = () => {
  let style = {
    height: "200px",
    overflow: "auto",
    scrollbarwidth: "none"
  };
  return (
    <div className="container-fluid min-100 d-flex flex-column">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <div className="row no-gutter">
        <div className="col-4">
          <div className="row contact-box-bar">
            <div className="col p-0 m-0">
              <div className="d-flex">
                <div className="d-flex flex-grow-1">
                  <div className="p-2">
                    <a href="posts.html">
                      <i className="m-0 mt-2 p-0 ml-3 material-icons">
                        arrow_back
                      </i>
                    </a>
                  </div>

                  <div className="my-auto mr-2 flex-grow-1">
                    <input
                      type="text"
                      className="form-control rounded ml-2"
                      placeholder="Search contacts"
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
        </div>
        <div className="col-8">
          <div className="row chat-box-bar">
            <div className="col-md-4 align-self-center">
              <p className="m-0 p-0 text-imp">James Bond</p>
              <p className="m-0 mb-1 p-0 text-unimp">Online</p>
            </div>
            <div className="col-4 align-self-center">
              <div className="d-flex ">
                <i className="material-icons text-unimp my-auto pr-1">
                  access_time
                </i>
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
                      placeholder="Search conversation"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row flex-grow-1 no-gutter">
        <div className="col-4 contact-box">
          <div className="h-100 d-flex flex-column">
            <div className="flex-grow-1 " style={style}>
              <Contacts />
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default App;
