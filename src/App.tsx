import React from "react";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import Messages from "./components/Messages/Messages";
import Chat from "./controllers/Chat/Chat";
import Posts from "./components/Posts/PostsUI/PostsUI";
import Post from "./components/Posts/Post/Post";
import Profile from "./controllers/Profile/Profile";
import Login from "./components/Login/LoginUI/LoginUI";
import Register from "./components/Register/RegisterUI/RegisterUI";
import { useRoutes } from "hookrouter";
/**
 * Hookrouter for routing.
 */
const routes = {
  "/": () => <Posts />,
  "/post": () => <Post />,
  "/chat": () => <Chat />,
  "/profile": () => <Profile />,
  "/login": () => <Login />,
  "/register": () => <Register />
};
const App: React.FC = () => {
  const routeResult = useRoutes(routes);
  return routeResult || <Login />;
};

export default App;
