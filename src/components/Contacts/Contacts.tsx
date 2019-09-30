import React from "react";
import Contact from "./Contact/Contact";
import useAxios from "axios-hooks";

export default function Contacts() {
  const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
    "https://uinames.com/api/?amount=25"
  );

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

  function updateContacts() {
    executePut({
      data: {
        ...getData,
        updatedAt: new Date().toISOString()
      }
    });
  }

  if (getLoading || putLoading) return <p>Loading...</p>;
  if (getError || putError) return <p>Error!</p>;

  let contacts = JSON.stringify(getData);
  
  // let name = contacts[0]["name"]


  // let contacts = JSON.parse(getData);

  // let contacts = getData;
  
  
  // contacts.map((item, i) => (
  //   <Contact Name={item} Image={""} Message={""} />
  // ));

  return (
    <div>
      <p>{JSON.stringify(getData)}</p>
      {/* {contacts} */}
    </div>
  );
}
