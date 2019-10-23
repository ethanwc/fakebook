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
  const [chats, setChats] = useState();
  const [activeChat, setActiveChat] = useState();

  let imgurls = new Map<string, string>();

  /**
   * Route the webpage.
   */

  const updateProfile = async (id: string) => {
    const uri_profile_info = `${Endpoints.route}/${
      Endpoints.users
    }/${localStorage.getItem("view_profile")}`;
    const profile = await Axios.get(uri_profile_info, {});
    history.push("/profile");

    //todo : set view profile info to person?
    setViewProfileInfo(profile.data);
    console.log("profile info updated");
  };

  const routing = (
    <Router history={history}>
      <Route exact path="/">
        <Navbar
          profileInfo={profileInfo}
          setProfileInfo={setProfileInfo}
          updateProfile={updateProfile}
        />
        <Posts
          imgurls={imgurls}
          setViewProfileInfo={setViewProfileInfo}
          setProfileInfo={setProfileInfo}
          profileInfo={profileInfo}
          posts={posts}
          setPosts={setPosts}
          componentVal={true}
          updateProfile={updateProfile}
        />
      </Route>
      <Route exact path="/login">
        <Login setProfileInfo={setProfileInfo} updateProfile={updateProfile} />
      </Route>
      <Route exact path="/register" component={Register} />
      <Route exact path="/chat">
        <Chat
          chats={chats}
          setChats={setChats}
          activeChat={activeChat}
          setActiveChat={setActiveChat}
          profileInfo={profileInfo}
          setProfileInfo={setProfileInfo}
          updateProfile={updateProfile}
        />
      </Route>
      <Route exact path="/profile">
        <Profile
          setChats={setChats}
          setActiveChat={setActiveChat}
          viewProfileInfo={viewProfileInfo}
          setViewProfileInfo={setViewProfileInfo}
          setProfileInfo={setProfileInfo}
          profileInfo={profileInfo}
          setPosts={setPosts}
          posts={posts}
          updateProfile={updateProfile}
        />
      </Route>
    </Router>
  );

  return routing;
};

export default App;
