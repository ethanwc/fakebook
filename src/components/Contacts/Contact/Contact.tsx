import * as React from "react";
import Axios from "axios";
import Endpoints from "../../../assets/endpoints/endpoints.json";
import DefaultIcon from "../../../assets/default_icon.png";
interface ContactProps {
  authorid: string;
  chatid: string;
  chatSearch: string;
  messages: any[];
  setActiveChat: Function;
  updateProfile: Function;
}

const Contact: React.FC<ContactProps> = ({
  authorid,
  chatid,
  messages,
  setActiveChat,
  chatSearch,
  updateProfile
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

  const redirectToProfile = () => {
    localStorage.setItem("view_profile", authorid.toString());
    updateProfile(authorid);
  };

  const contactImage =
    contactInfo[0].imageurl !== undefined &&
    contactInfo[0].imageurl.length > 1 ? (
      <img
        src={contactInfo[0].imageurl}
        alt=""
        className="img-thumbnail-small m-2"
        onClick={redirectToProfile}
      />
    ) : (
      <img
        src={require("../../../assets/logo/updog_logo.png")}
        alt=""
        className="img-thumbnail-small m-2"
        onClick={redirectToProfile}
      />
    );


  const lastMsg =
    messages !== undefined && messages.length > 0
      ? messages[messages.length - 1].content.toString()
      : "No Messages";

  const lastMsgTime =
    messages !== undefined && messages.length > 0
      ? messages[messages.length - 1].date.toString()
      : "";

  return (
    <div className="col-12 p-2 contact" onClick={() => setActiveChat(chatid)}>
      <div className="d-flex justify-content-left rounded mt-2 mb-2">
        <div className="d-flex justify-content-end">
          {contactImage}
          <div>
            <p className="text-imp m-2">{contactInfo[0].name}</p>
            <h5 className="text-unimp ml-2">{lastMsgTime}</h5>
            <h5 className="text-imp ml-2">{lastMsg} </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
