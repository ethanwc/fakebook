import React, { useState, useEffect } from "react";
import ProfileUI from "../../components/Profile/ProfileUI/ProfileUI";
import Endpoints from "../../assets/endpoints/endpoints.json";
import Axios from "axios";

/**
 * Profile Controller
 */
const Profile = (props: any) => {
  //hooks for profile info
  const [profileInfo, setProfileInfo] = useState();
  //uri to get profile info
  const uri_profile_info = `${Endpoints.route}/${
    Endpoints.users
  }/${localStorage.getItem("_id")}/${Endpoints.info}`;
  //get info for the users profile

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios.get(uri_profile_info, {});
      setProfileInfo(result.data);
    };
    fetchData();
  }, []);


  return <ProfileUI profileInfo={profileInfo} />;
};

export default Profile;
