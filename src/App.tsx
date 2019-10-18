import React, { useState } from "react";
import "./App.css";
import Chat from "./controllers/Chat/ChatController";
import Posts from "./controllers/Posts/PostController";
import Profile from "./controllers/Profile/ProfileController";
import Login from "./controllers/Login/LoginController";
import Register from "./controllers/Register/RegisterController";
import { Router, Route } from "react-router-dom";
import history from "./utils/history";
import Navbar from "./components/Navbar/Navbar";
import PostsController from "./controllers/Posts/PostController";

//App Driver
const App: React.FC = () => {
  /**
   * Top level information shared between controllers
   */

   //hooks for posts info
  const [posts, setPosts] = useState();
  const [profileInfo, setProfileInfo] = useState();

  /**
   * Route the webpage.
   */
  const routing = (
    <Router history={history}>
      <Route exact path="/">
        <Navbar />
        <PostsController
          setProfileInfo={setProfileInfo}
          profileInfo={profileInfo}
          posts={posts}
          setPosts={setPosts}
          componentVal={true}
        />
      </Route>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/chat" component={Chat} />
      <Route exact path="/profile">
        <Profile
          setProfileInfo={setProfileInfo}
          setPosts={setPosts}
          profileInfo={profileInfo}
          posts={posts}
        />
      </Route>
    </Router>
  );

  return routing;
};

export default App;
