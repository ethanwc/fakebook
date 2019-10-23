import React, { useState } from "react";

const Content = (props: any) => {
  const [postContent, setPostContent] = useState("");
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
      authorid: props.authorid
    };
    if (postInfo.content.length > 0) {
      props.submitPost(postInfo);
      setPostContent("");
    }
  };

  if (props.profileInfo == undefined) return <p>loading</p>;

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

          <div className="d-flex align-items-center justify-content-between ml-3 mr-3 mt-3">
            <h4 className="mr-3">Status</h4>
            <h4 className="mr-3">Photos</h4>
            <h4 className="mr-3">People</h4>
            <h4 className="mr-3">Mood</h4>

            <button
              className="btn ml-auto share-btn mb-3"
              onClick={handleNewPost}
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
