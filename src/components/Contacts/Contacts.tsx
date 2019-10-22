import React from "react";
import Contact from "./Contact/Contact";
import useAxios from "axios-hooks";

const Contacts = () => {
  // Get Contacts
  const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
    "https://uinames.com/api/?amount=25"
  );

  return (
    <p>asdf</p>
    // <div>
    //   {getData.map(
    //     (item: {
    //       name: string;
    //       surname: string;
    //       gender: string;
    //       region: string;
    //     }) => (
    //       <Contact Name={item.name} Image={""} Message={""} />
    //     )
    //   )}
    // </div>
  );
};

export default Contacts;
