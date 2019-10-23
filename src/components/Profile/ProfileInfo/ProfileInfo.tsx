import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Status from "../../Status/Status";
import ImageUploader from "react-images-upload";
import Endpoints from "../../../assets/endpoints/endpoints.json";
import Axios from "axios";

const ProfileInfo = (props: any) => {
  const [editing, setEditing] = useState(false);
  const [aboutInfo, setAboutInfo] = useState("");
  const [locationInfo, setLocationInfo] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  //return loading until loaded.
  //todo: loading animation
  if (props.profileInfo === undefined || props.posts === undefined) {
    return <p>Loading</p>;
  }

  //setup:
  const info = props.profileInfo[0];

  let likes = 0,
    favorites = 0;
  for (const i of props.posts) {
    for (const c of i.comments) likes += c.likes.length;
    likes += i.likes.length;
    favorites += i.favorites.length;
  }

  //call controller to follow/unfollow someone
  const handleFollow = () => {
    const followInfo = {
      followe: localStorage.getItem("_id"),
      follower: localStorage.getItem("view_profile")
    };
    props.followProfile(followInfo);
  };

  // const updateProfileImage = () => {
  //   cloudinary.openUploadWidget(
  //     { cloud_name: "cloud_name", upload_preset: "preset", tags: ["xmas"] },
  //     function(error: any, result: any) {
  //       console.log(result);
  //     }
  //   );
  // };

  //hepler call for edit profile logic
  const handleEditProfile = () => {
    const updatedProfile = {
      id: localStorage.getItem("_id"),
      location: locationInfo,
      about: aboutInfo,
      imageurl: imageUrl
    };

    props.editProfile(updatedProfile);
    setEditing(false);
  };

  //are you following or unfollowing?
  const followText = info.following.includes(localStorage.getItem("_id"))
    ? "Unfollow"
    : "Follow";

  //determine if it's the users own profile
  const ownProfile =
    localStorage.getItem("view_profile") === localStorage.getItem("_id");
  const followButton = !ownProfile ? (
    <Button className="mr-1" onClick={handleFollow}>
      {followText}
    </Button>
  ) : null;

  //conditional save component
  const save = editing ? (
    <div>
      <i
        className="m-0 mt-2 p-0 material-icons"
        onClick={() => setEditing(false)}
      >
        cancel
      </i>
      <i className="m-0 mt-2 p-0 material-icons" onClick={handleEditProfile}>
        save
      </i>
    </div>
  ) : null;

  //conditional edit component
  const edit =
    ownProfile && !editing ? (
      <i
        className="m-0 mt-2 p-0 material-icons"
        onClick={() => setEditing(true)}
      >
        edit
      </i>
    ) : null;

  //conditional dispaly or input based on edit for about
  const about = !editing ? (
    <p className="text-center text-unimp">{info.about}</p>
  ) : (
    <textarea
      value={aboutInfo}
      placeholder={info.about}
      onChange={e => setAboutInfo(e.target.value)}
      className="form-control post-input rounded"
      required
    />
  );

  //conditional dispaly or input based on edit for location
  const location = !editing ? (
    <p className="text-center text-unimp">{info.location}</p>
  ) : (
    <input
      type="text"
      value={locationInfo}
      placeholder={info.location}
      onChange={e => setLocationInfo(e.target.value)}
      className="input rounded"
      required
    />
  );

  const setProfileImage = (pictures: any) => {
    let fd = new FormData();
    fd.append("upload_preset", "ajp1noec");
    fd.append("file", pictures[0]);

    Axios.post(
      "https://api.cloudinary.com/v1_1/dk4gnl6ww/image/upload",
      fd
    ).then(response => {
      //set imageurl for user.
      const uri_set_picture = `${Endpoints.route}/${Endpoints.users}/${Endpoints.image}`;
      Axios.post(uri_set_picture, {
        url: response.data.url,
        id: localStorage.getItem("_id")
      }).then(response => {
        console.log(props.profileInfo);
        console.log(response.data);
        // props.setProfileInfo([response.data]);
      });
    });
  };

  const profileImage = editing ? (
    <ImageUploader
      withIcon={true}
      buttonText="Choose images"
      onChange={setProfileImage}
      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
      maxFileSize={5242880}
    />
  ) : info.imageurl === undefined ? (
    <img
      src="data:image/png;base64,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"
      alt=""
      className="w-100 rounded"
    />
  ) : (
    <img src={info.imageurl} alt="" className="w-100 rounded" />
  );

  return (
    <div className="h-100 d-flex flex-column">
      <div className="profile m-2">
        <div className="d-flex justify-content-between">
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <Link to={"/"} className="">
            <i className="m-0 mt-2 p-0 ml-3 material-icons">arrow_back</i>
          </Link>
          {save}
          {edit}
        </div>

        {profileImage}

        <div></div>
        <div className="d-flex justify-content-center align-items-center">
          <h2 className="text-center">{info.name}</h2>

          <Status
            ownProfile={ownProfile}
            profileInfo={props.profileInfo}
            setProfileInfo={props.setProfileInfo}
          />
        </div>

        <h5 className="text-center text-imp">{info.username}</h5>
        <div className="d-flex justify-content-center m-2">{followButton}</div>

        <div className="row">
          <div className="col-5 offset-1">
            <h5 className="text-center text-imp">{info.following.length}</h5>
          </div>
          <div className="col-5">
            <h5 className="text-center text-imp">{info.followers.length}</h5>
          </div>
          <div className="col-5 offset-1">
            <h5 className="text-center text-unimp">Followers</h5>
          </div>
          <div className="col-5">
            <h5 className="text-center text-unimp">Following</h5>
          </div>
          <div className="col-5 offset-1">
            <h5 className="text-center text-imp">{likes}</h5>
          </div>
          <div className="col-5">
            <h5 className="text-center text-imp">{favorites}</h5>
          </div>
          <div className="col-5 offset-1">
            <h5 className="text-center text-unimp">Likes</h5>
          </div>
          <div className="col-5">
            <h5 className="text-center text-unimp">Favorites</h5>
          </div>
        </div>

        <h2 className="text-center m-2">About</h2>
        <div className="d-flex justify-content-center">{about}</div>

        <h5 className="text-center text-unimp">Location</h5>
        <div className="d-flex justify-content-center">{location}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
