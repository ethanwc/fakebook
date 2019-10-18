import React, { CSSProperties } from "react";
import { Dropdown } from "react-bootstrap";

const Status = (props: any) => {
  const statusGreen: CSSProperties = {
    color: "green"
  };

  const statusYellow: CSSProperties = {
    color: "yellow"
  };

  const statusRed: CSSProperties = {
    color: "red"
  };

  const dropStyle: CSSProperties = {
    backgroundColor: "white"
  };

  //Online, Away, Offline
  const handleSetStatus = (status: string) => {
    const statusInfo = {
      Authentication: `${localStorage.getItem("token")}`,
      status: status,
      id: localStorage.getItem("_id")
    };
    props.setStatus(statusInfo);
  };

  const currentStatus: CSSProperties = (() => {
    switch (props.status) {
      case "Online":
        return statusGreen;
      case "Away":
        return statusYellow;
      case "Offline":
        return statusRed;
      default:
        return statusGreen;
    }
  })();

  //set status or view status?
  const status = props.ownProfile ? (
    <i className="material-icons m-2" style={currentStatus}>
      radio_button_checked
    </i>
  ) : (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        className="border-0 btn btn-primary-outline btn-link"
        style={dropStyle}
      >
        <i className="material-icons mr-2 mt-2" style={currentStatus}>
          radio_button_checked
        </i>
      </Dropdown.Toggle>

      <Dropdown.Menu style={dropStyle}>
        <Dropdown.Item onClick={() => handleSetStatus("Online")}>
          <div className="d-flex justify-content-between align-items-center">
            <i className="material-icons" style={statusGreen}>
              radio_button_checked
            </i>
            <h4>Online</h4>
          </div>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSetStatus("Away")}>
          <div className="d-flex justify-content-between align-items-center">
            <i className="material-icons" style={statusYellow}>
              radio_button_checked
            </i>
            <h4>Away</h4>
          </div>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSetStatus("Offline")}>
          <div className="d-flex justify-content-between align-items-center">
            <i className="material-icons" style={statusRed}>
              radio_button_checked
            </i>
            <h4>Offline</h4>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
  return <div> {status}</div>;
};

export default Status;
