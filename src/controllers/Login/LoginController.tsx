import React from "react";
import Axios from "axios";
import LoginUI from "../../components/Login/LoginUI/LoginUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import history from "../../utils/history";

/**
 * Handles logic and functional views for logging in, stores session as token.
 */
export default function LoginController(props: any) {
  const uri = `${Endpoints.route}/${Endpoints.auth}/login`;

  //Login logic, request to api
  const handleLogin = (userInfo: any) => {
    Axios.post(uri, userInfo, {})
      //todo: async check??
      .then(function(response) {
        const res = JSON.parse(JSON.stringify(response.data));
        localStorage.setItem("token", res.tokenData.token);
        localStorage.setItem("name", res._doc.name);
        localStorage.setItem("_id", res._doc._id);
        //assuming successful login, redirect to posts ("url/")
        history.push("/");
      })
      .catch(function(error) {
        console.log("error: " + error);
      });
  };

  return <LoginUI handleLogin={handleLogin} />;
}
