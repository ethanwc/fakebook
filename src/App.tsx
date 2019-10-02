import React from "react";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Messages from "./components/Messages/Messages";
import Chat from "./controllers/Chat/Chat";
import Posts from "./components/Posts/Posts";
import Profile from "./components/Profile/Profile";

const App: React.FC = () => {
  return <Chat />;
};

export default App;
