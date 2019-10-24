import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import Axios from "axios";

const Content = (props: any) => {
  const [postContent, setPostContent] = useState("");
  const [showImgSelector, setShowImgSelector] = useState(false);
  /**
   * Handles a new post being submitted if length > 0,
   * Clears post length,
   * adds new post to ui,
   * calls submit post to send it to the api.
   */
  const handleNewPost = () => {
    const postInfo = {
      content: postContent,
      title: `${localStorage.getItem("name")} shared a post`,
      date: new Date().toLocaleString(),
      authorid: props.authorid,
      type: "text"
    };
    if (postInfo.content.length > 0) {
      props.submitPost(postInfo);
      setPostContent("");
    }
  };

  if (props.profileInfo == undefined) return <p>loading</p>;

  const imgButton = !showImgSelector ? (
    <i
      className="m-0 mt-2 p-0 material-icons"
      onClick={() => setShowImgSelector(true)}
    >
      image
    </i>
  ) : null;

  const imgCancel = showImgSelector ? (
    <i
      className="m-0 mt-2 ml-2 p-0 material-icons"
      onClick={() => setShowImgSelector(false)}
    >
      cancel
    </i>
  ) : null;

  const handleNewImage = (pictures: any) => {
    let fd = new FormData();
    fd.append("upload_preset", "ajp1noec");
    fd.append("file", pictures[0]);

    Axios.post(
      "https://api.cloudinary.com/v1_1/dk4gnl6ww/image/upload",
      fd
    ).then(response => {
      //image uploaded, now post it.
      const uri = response.data.url;

      const postInfo = {
        content: uri,
        title: `${localStorage.getItem("name")} shared a photo`,
        date: new Date().toLocaleString(),
        authorid: props.authorid,
        type: "image"
      };
      props.submitPost(postInfo);
      setShowImgSelector(false);
    });
  };

  const imgSelector = showImgSelector ? (
    <ImageUploader
      withIcon={false}
      onChange={handleNewImage}
      buttonText="Choose images"
      imgExtension={[".jpg", ".png"]}
      maxFileSize={500000}
    />
  ) : null;

  //todo: set an img to the thingy, then have a confirm upload
  //todo: delete post

  return (
    <div className="row no-gutter">
      <div className="col-12">
        <div className="new-post m-2 mt-3 rounded pt-3">
          <div className="d-flex align-items-center ml-3 mr-3">
            <textarea
              className="form-control post-input"
              placeholder="What are you thinking about?"
              value={postContent}
              onChange={e => setPostContent(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="d-flex align-items-start ml-3 mr-3 mt-3">
            {imgButton}

            {imgSelector}
            {imgCancel}

            <button
              className="btn ml-auto share-btn mb-3"
              onClick={() => handleNewPost()}
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
