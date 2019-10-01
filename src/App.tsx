import React from "react";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Messages from "./components/Messages/Messages";
import Chat from "./controllers/Chat/Chat";

const App: React.FC = () => {

  return (
   <Chat/>
  );
};

export default App;
