import React, { useState } from "react";
import Endpoints from "../../../assets/endpoints/endpoints.json";
import Axios from "axios";

const PostNewComment = (props: any) => {
  //author info hook
  const [authorInfo, setAuthorInfo] = React.useState();
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (comment.length > 0) {
      props.submitComment(comment, props._id);
      setComment("");
    }
  };

  const id: string = localStorage.getItem("_id") || "null";

  const redirectToProfile = () => {
    localStorage.setItem("view_profile", id);
    props.updateProfile(id);
  };

  //load author info
  const uri_profile_info = `${Endpoints.route}/${
    Endpoints.users
  }/${localStorage.getItem("_id")}`;
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
    <div className="d-flex align-items-center">
      {contactImage}

      <div className="input-group m-2">
        <input
          type="text"
          className="form-control post-input"
          placeholder="Enter a comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
          pattern=".{1,}"
          required
        />
      </div>
      <button className="btn ml-auto share-btn mr-2" onClick={handleSubmit}>
        Post
      </button>
    </div>
  );
};

export default PostNewComment;
