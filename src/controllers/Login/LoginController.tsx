import React from "react";
import LoginUI from "../../components/Login/LoginUI/LoginUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import Axios from "axios";

/**
 * Handles logic and functional views for logging in, stores session as token.
 */
export default function LoginController() {
  const uri = `${Endpoints.route}/${Endpoints.auth}/login`;

  //Login logic, request to api
  const handleLogin = (userInfo: any) => {
    Axios.post(uri, userInfo, {})
      .then(function(response) {
        const res = JSON.parse(JSON.stringify(response.data));
        localStorage.setItem("token", res.tokenData.token);
      })
      .catch(function(error) {
        console.log("error" + error);
      });
    console.log(localStorage.getItem("token"));
  };

  return <LoginUI handleLogin={handleLogin} />;
}
