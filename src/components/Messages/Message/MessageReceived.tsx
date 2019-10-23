import * as React from "react";
import Endpoints from "../../../assets/endpoints/endpoints.json";
import Axios from "axios";
interface MessageReceivedProps {
  authorid: string;
  date: string;
  content: string;
  messageSearch: string;
  updateProfile: Function;
}

const MessageReceived: React.FC<MessageReceivedProps> = ({
  authorid,
  date,
  content,
  messageSearch,
  updateProfile
}) => {
  //author info hook
  const [authorInfo, setAuthorInfo] = React.useState();

  //load author info
  const uri_profile_info = `${Endpoints.route}/${Endpoints.users}/${authorid}`;
  //load profile info and chats
  React.useEffect(() => {
    const fetchData = async () => {
      const cinfo = await Axios.get(uri_profile_info);
      setAuthorInfo(cinfo.data);
    };
    fetchData();
  }, []);

  if (!content.includes(messageSearch)) return null;

  const redirectToProfile = () => {
    localStorage.setItem("view_profile", authorid.toString());
    updateProfile(authorid);
  };

  if (authorInfo === undefined) return <p>Loading messages</p>;

  const contactImage =
    authorInfo[0].imageurl !== undefined &&
    authorInfo[0].imageurl.length > 1 ? (
      <img
        src={authorInfo[0].imageurl}
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

  return (
    <div className="col-8 p-2 mt-1 mb-1">
      <div className="d-flex">
        <div className="">{contactImage}</div>
        <div className="flex-grow-1">
          <div className="message received rounded-bottom rounded-right">
            <div className="d-flex-column justify-content-left">
              <div className="d-flex justify-content-between">
                {/* todo author name */}
                <p className="text-unimp m-2 message-name">{""}</p>
                <p className="text-unimp m-2 time">{date}</p>
              </div>
              <p className="text-imp m-2">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageReceived;
