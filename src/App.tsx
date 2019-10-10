import React from "react";
import "./App.css";
import Chat from "./controllers/Chat/ChatController";
import Posts from "./components/Posts/PostsUI/PostsUI";
import Profile from "./controllers/Profile/Profile";
import Login from "./controllers/Login/LoginController";
import Register from "./controllers/Register/RegisterController";
import { useRoutes } from "hookrouter";
/**
 * Hookrouter for routing.
 */
const routes = {
  "/": () => <Posts />,
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
