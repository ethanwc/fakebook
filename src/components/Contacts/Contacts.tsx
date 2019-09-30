import React from "react";
import Contact from "./Contact/Contact";

export default function Contacts() {
  let contacts = ["steve", "jobs", "bill", "gahtes", "eric ocman"].map(
    (item, i) => <Contact Name={item} Image={""} Message={""} />
  );

  return <div>{contacts}</div>;
}
