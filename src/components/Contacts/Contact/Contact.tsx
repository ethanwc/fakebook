import * as React from "react";
import Axios from "axios";
import Endpoints from "../../../assets/endpoints/endpoints.json";
import DefaultIcon from "../../../assets/default_icon.png";
interface ContactProps {
  authorid: string;
  chatid: string;
  chatSearch: string;
  setActiveChat: Function;
}

const Contact: React.FC<ContactProps> = ({
  authorid,
  chatid,
  setActiveChat,
  chatSearch
}) => {
  //contact info hook
  const [contactInfo, setContactInfo] = React.useState();

  //load profile info if not already loaded
  const uri_profile_info = `${Endpoints.route}/${Endpoints.users}/${authorid}`;
  //load profile info and chats
  React.useEffect(() => {
    const fetchData = async () => {
      const cinfo = await Axios.get(uri_profile_info);
      setContactInfo(cinfo.data);
    };
    fetchData();
  }, []);

  if (contactInfo === undefined) return <p>Loading</p>;

  if (!contactInfo[0].name.includes(chatSearch)) return null;

  console.log(contactInfo[0]);

  const contactImage =
    contactInfo[0].imageurl !== undefined &&
    contactInfo[0].imageurl.length > 1 ? (
      <img
        src={contactInfo[0].imageurl}
        alt=""
        className="img-thumbnail-small m-2"
      />
    ) : (
      <img
        src={require("../../../assets/logo/updog_logo.png")}
        alt=""
        className="img-thumbnail-small m-2"
      />
    );

  //todo: loading animation
  return (
    <div className="col-12 p-2" onClick={() => setActiveChat(chatid)}>
      <div className="d-flex justify-content-left">
        <div className="contact rounded mt-2 mb-2">
          <div className="d-flex justify-content-between">
            {contactImage}
            <div>
              <p className="text-imp m-2">{contactInfo[0].name}</p>
              <h5 className="text-unimp ml-2">5 min ago</h5>
              <p className="text-imp ml-2">
                This will be the most recent message recent you have receive...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
