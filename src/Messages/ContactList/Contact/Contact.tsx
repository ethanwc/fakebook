import * as React from "react";
/**
 * Represents a contact for the contact list.
 */
interface ContactProps {
  Image: string;
  Name: string;
  Status: string;
}

let contactStyle = {

};

let imageStyle = {
  height: "3rem",
  width: "3rem"
};

//Takes in information for a contact and returns a card view.
//Todo: Change Status to an Image based on backend
const Contact: React.FC<ContactProps> = ({ Image, Name, Status }) => (
  <div className="mr-3" style={contactStyle}>
    <div className="p-2 bg-info border border-secondary">
      <img className="rounded-circle mr-2" style={imageStyle} src={Image} />
      {Name} {Status}
    </div>
  </div>
);

export default Contact;
