import React from "react";
import Axios from "axios";
import RegisterUI from "../../components/Register/RegisterUI/RegisterUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import history from "../../utils/history";

/**
 * Handles logic and functional views for registering.
 */
export default function RegisterController() {
  const uri = `${Endpoints.route}/${Endpoints.auth}/register`;

  //Check if confirm password matches
  const checkPasswords = (p1: string, p2: string) => p1 === p2;

  //Register logic, request to api
  const handleRegister = (userInfo: any) => {
    //todo: verify info before registering user... check password match and reqs, also check username length,
    Axios.post(uri, userInfo, {})
      .then(function(response) {
        console.log("registerd?", response);
        const res = JSON.parse(JSON.stringify(response.data));
        localStorage.setItem("token", res.tokenData.token);
        if (response.status === 201) history.push("/login");
      })
      .catch(function(error) {
        console.log("error" + error);
      });
  };

  return (
    <RegisterUI
      handleRegister={handleRegister}
      checkPasswords={checkPasswords}
    />
  );
}
