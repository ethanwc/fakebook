import React from "react";
import "./App.css";
import Chat from "./controllers/Chat/ChatController";
import Posts from "./controllers/Posts/PostController";
import Profile from "./controllers/Profile/ProfileController";
import Login from "./controllers/Login/LoginController";
import Register from "./controllers/Register/RegisterController";
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
    <Route exact path="/chat" component={Chat} />
    <Route exact path="/profile" component={Profile} />
  </Router>
);
const App: React.FC = () => {
  return routing;
};

export default App;
