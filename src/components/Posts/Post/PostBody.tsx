import React from "react";

interface PostBodyProps {
  Content: String;
}
const PostBody: React.FC<PostBodyProps> = ({ Content }) => {
  return (
    <div className="d-flex justify-content-between comment">
      <p className="text-imp m-2 pl-2 pr-2">{Content}</p>

      {/* <img
        src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&w=1000&q=80"
        alt=""
        className="w-100"
      /> */}
    </div>
  );
};
export default PostBody;
