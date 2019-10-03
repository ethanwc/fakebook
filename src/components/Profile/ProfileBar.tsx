import React from "react";

export default function ProfileBar() {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex m-2">
        <h2 className="mr-3">Posts</h2>
        <h2 className="ml-3">Photos</h2>
      </div>

      <div className="d-flex align-items-center">
        <i className="fas fa-search" aria-hidden="true"></i>
        <input className="form-control" type="text" />
        <i className="material-icons ml-3">view_list</i>
        <i className="material-icons">view_module</i>
      </div>
    </div>
  );
}
