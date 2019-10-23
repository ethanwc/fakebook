import React, { useState } from "react";
import "./App.css";
import Chat from "./controllers/Chat/ChatController";
import Profile from "./controllers/Profile/ProfileController";
import Login from "./controllers/Login/LoginController";
import Register from "./controllers/Register/RegisterController";
import { Router, Route } from "react-router-dom";
import history from "./utils/history";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./controllers/Posts/PostController";
import Axios from "axios";
import Endpoints from "./assets/endpoints/endpoints.json";

//App Driver
const App: React.FC = () => {
  /**
   * Top level information shared between controllers
   */

  //hooks for posts, info, status
  const [posts, setPosts] = useState();
  const [viewProfileInfo, setViewProfileInfo] = useState();
  const [profileInfo, setProfileInfo] = useState();

  /**
   * Route the webpage.
   */

  const routing = (
    <Router history={history}>
      <Route exact path="/">
        <Navbar profileInfo={profileInfo} setProfileInfo={setProfileInfo} />
        <Posts
          setViewProfileInfo={setViewProfileInfo}
          setProfileInfo={setProfileInfo}
          profileInfo={profileInfo}
          posts={posts}
          setPosts={setPosts}
          componentVal={true}
        />
      </Route>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/chat">
        <Chat profileInfo={profileInfo} setProfileInfo={setProfileInfo} />
      </Route>
      <Route exact path="/profile">
        <Profile
          viewProfileInfo={viewProfileInfo}
          setViewProfileInfo={setViewProfileInfo}
          setProfileInfo={setProfileInfo}
          setPosts={setPosts}
          profileInfo={viewProfileInfo}
          posts={posts}
        />
      </Route>
    </Router>
  );

  return routing;
};

export default App;
