import React from "react";
import Post from "./Post/Post";
import PostHeader from "./Post/PostHeader";
import PostBody from "./Post/PostBody";
import PostComment from "./Post/PostComment";
import PostNewComment from "./Post/PostNewComment";

import useAxios from "axios-hooks";

export default function Posts() {
  // Get Messages
  const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
    "https://uinames.com/api/?amount=25"
  );

  // Example Post
  const [
    { data: putData, loading: putLoading, error: putError },
    executePut
  ] = useAxios(
    {
      url: "https://api.myjson.com/bins/820fc",
      method: "PUT"
    },
    { manual: true }
  );

  if (getLoading || putLoading) return <p>Loading...</p>;
  if (getError || putError) return <p>Error!</p>;

  return (
    <div>
      {getData.map(
        (item: {
          name: string;
          surname: string;
          gender: string;
          region: string;
        }) => (
          <Post Name={item.name} />
        )
      )}
    </div>
  );
}
