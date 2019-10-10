import React from "react";
import Post from "./Post/Post";
import Endpoints from "../../assets/endpoints/endpoints.json";
import useAxios from "axios-hooks";

export default function Posts() {
  // Get Posts
  const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
    `${Endpoints.route}/${Endpoints.posts}`
  );

  if (getLoading) return <p>Loading...</p>;
  if (getError) return <p>Error!</p>;

  return (
    <div>
      {getData.map(
        (item: {
          _id: string;
          author: {
            name: string;
          };
          content: string;
          title: string;
        }) => (
          <Post
            Name={item.author.name}
            Title={item.title}
            Content={item.content}
          />
        )
      )}
    </div>
  );
}
