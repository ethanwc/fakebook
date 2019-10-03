import React from "react";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Messages from "./components/Messages/Messages";
import Chat from "./controllers/Chat/Chat";
import Posts from "./components/Posts/PostsUI/PostsUI";
import Profile from "./controllers/Profile/Profile";
import { useRoutes } from "hookrouter";
/**
 * Hookrouter for routing.
 */
const routes = {
  "/": () => <Posts />,
  "/chat": () => <Chat />,
  "/profile": () => <Profile />
};
const App: React.FC = () => {
  const routeResult = useRoutes(routes);
  return routeResult || <Chat />;
};

export default App;
