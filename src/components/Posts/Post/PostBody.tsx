import React from "react";

interface PostBodyProps {
  Content: string;
  type: string;
}
const PostBody: React.FC<PostBodyProps> = ({ Content, type }) => {
  const post =
    type === "image" ? (
      <img src={Content} alt="" className="w-100" />
    ) : (
      <p className="text-imp m-2 pl-2 pr-2">{Content}</p>
    );

  return <div className="d-flex justify-content-between comment">{post}</div>;
};
export default PostBody;
