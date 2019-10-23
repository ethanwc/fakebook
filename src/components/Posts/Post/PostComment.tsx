import React, { CSSProperties } from "react";
import Endpoints from "../../../assets/endpoints/endpoints.json";
import Axios from "axios";

interface PostCommentProps {
  likeComment: Function;
  likedComment: Function;
  postid: string;
  id: string;
  authorid: string;
  author: string;
  comment: string;
  setViewProfileInfo: Function;
  updateProfile: Function;
}

const PostComment: React.FC<PostCommentProps> = ({
  likeComment,
  likedComment,
  id,
  postid,
  author,
  comment,
  authorid,
  setViewProfileInfo,
  updateProfile
}) => {
  //author info hook
  const [authorInfo, setAuthorInfo] = React.useState();

  const handleLike = () => likeComment(postid, id);
  const blue: CSSProperties = {
    color: "#1f7292"
  };

  const black: CSSProperties = {
    color: "black"
  };

  const likeStyle = likedComment(postid, id) ? blue : black;

  const redirectToProfile = () => {
    localStorage.setItem("view_profile", authorid.toString());
    updateProfile(authorid);
  };

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

  if (authorInfo === undefined) return <p>Loading</p>;

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
    <div>
      <div className="d-flex justify-content-between align-items-center comment">
        <div className="d-flex align-self-center justify-content-between mr-1">
          {contactImage}
          <div>
            <p className="text-imp m-2 comment-name">{author}</p>
            <p className="text-imp m-2">{comment}</p>
          </div>
        </div>

        <div className="d-flex align-self-start mr-1">
          <i
            className="material-icons m-1"
            onClick={handleLike}
            style={likeStyle}
          >
            thumb_up
          </i>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
