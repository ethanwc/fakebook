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
    console.log("starting");
    Axios.post(uri, userInfo, {})
      .then(function(response) {
        const res = JSON.parse(JSON.stringify(response.data));
        localStorage.setItem("token", res.tokenData.token);
        localStorage.setItem("name", res._doc.name);
        localStorage.setItem("_id", res._doc._id);
        localStorage.setItem("loggedin", "true");

        //load user info upon login
        const uri_profile_info = `${Endpoints.route}/${
          Endpoints.users
        }/${localStorage.getItem("_id")}`;

        const fetchData = async () => {
          await Axios.get(uri_profile_info).then(async profile => {
            props.setProfileInfo(profile.data);
            console.log(profile.data);

            history.push("/");
          });
        };

        fetchData();
      })
      .catch(function(error) {
        console.log("error: " + error);
      });
  };

  return <LoginUI handleLogin={handleLogin} />;
}
