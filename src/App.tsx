import React from "react";
import "./App.css";
import Chat from "./controllers/Chat/ChatController";
import Posts from "./components/Posts/PostsUI/PostsUI";
import Profile from "./controllers/Profile/Profile";
import Login from "./controllers/Login/LoginController";
import Register from "./controllers/Register/RegisterController";
import Contact from "./components/Contacts/Contact/Contact";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";

/**
 * Route the webpage.
 */
const routing = (
  <Router history={history}>
    <Route exact path="/" component={Posts} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </Router>
);
const App: React.FC = () => {
  return routing;
};

export default App;
