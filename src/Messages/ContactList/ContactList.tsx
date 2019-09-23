import React, { Component } from "react";
import Contact from "./Contact/Contact";
/**
 * List of contacts for the message view.
 */
export class ContactList extends Component {
  render() {
    let tempdata = {
      name: "Steve Jobs",
      imgsrc:
        "https://improvephotography.com/wp-content/uploads/2017/10/0P8A9738.jpg",
      status: "Online"
    };
// Todo: use axios to return results from a post request to get all contacts that a user has
    return (
      <div>
        <Contact
          Image={tempdata.imgsrc}
          Name={tempdata.name}
          Status={tempdata.status}
        />
        <Contact
          Image={tempdata.imgsrc}
          Name={tempdata.name}
          Status={tempdata.status}
        />
        <Contact
          Image={tempdata.imgsrc}
          Name={tempdata.name}
          Status={tempdata.status}
        />
        <Contact
          Image={tempdata.imgsrc}
          Name={tempdata.name}
          Status={tempdata.status}
        />
      </div>
    );
  }
}

export default ContactList;
