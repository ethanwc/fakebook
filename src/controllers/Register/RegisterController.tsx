import React from "react";
import Axios from "axios";
import RegisterUI from "../../components/Register/RegisterUI/RegisterUI";
import Endpoints from "../../assets/endpoints/endpoints.json";

/**
 * Handles logic and functional views for registering.
 */
export default function RegisterController() {
  const uri = `${Endpoints.route}/${Endpoints.auth}/register`;

  //Register logic, request to api
  const handleRegister = (userInfo: any) => {
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

  return <RegisterUI handleRegister={handleRegister} />;
}
