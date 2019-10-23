import React, { CSSProperties } from "react";
import Endpoints from "../../../assets/endpoints/endpoints.json";
import Axios from "axios";

interface PostHeaderProps {
  Title: string;
  favoritePost: Function;
  likePost: Function;
  liked: Function;
  favorited: Function;
  postid: string;
  authorid: string;
  setViewProfileInfo: Function;
  updateProfile: Function;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  Title,
  favoritePost,
  likePost,
  liked,
  favorited,
  postid,
  authorid,
  setViewProfileInfo,
  updateProfile
}) => {
  //author info hook
  const [authorInfo, setAuthorInfo] = React.useState();
  const handleLike = () => likePost(postid);
  const handleFavorite = () => favoritePost(postid);

  const blue: CSSProperties = {
    color: "#1f7292"
  };

  const black: CSSProperties = {
    color: "black"
  };

  const likeStyle = liked(postid) ? blue : black;
  const favoriteStyle = favorited(postid) ? blue : black;

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
      />
    );

  return (
    <div className="d-flex align-items-center justify-content-between m-2">
      <div className="d-flex align-self-center">
        {contactImage}

        <div className="m-2 align-self-center">
          <h2>{Title}</h2>
        </div>
      </div>

      <div className="d-flex align-self-center mr-1">
        {" "}
        <i
          className="material-icons m-1 mr-2"
          onClick={handleFavorite}
          style={favoriteStyle}
        >
          favorite{" "}
        </i>
        <i
          style={likeStyle}
          className="material-icons m-1"
          onClick={handleLike}
        >
          thumb_up
        </i>
      </div>
    </div>
  );
};

export default PostHeader;
