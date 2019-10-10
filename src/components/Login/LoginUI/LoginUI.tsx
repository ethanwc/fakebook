import React, { useState } from "react";
import useAxios from "axios-hooks";
import "../../../assets/styles/Login/login.css";
import Axios from "axios";
import Endpoints from "../../../assets/endpoints/endpoints.json";

const logoStyle = {
  width: "80x",
  height: "80px"
};

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (event: { preventDefault: () => void }) => {
  event.preventDefault();
  alert(`${email + " " + password}`);
  //check password requirements... else set text to those reqs... only for register
  //api request here
};

const userInfo = {
  name: "billy",
  email: "bill@mail.com",
  password: "password"
};

const uri = `${Endpoints.route}/${Endpoints.auth}/login`;

function handleLogin() {
  Axios.post(uri, userInfo, {})
    .then(function(response) {
      console.log(response.headers);
      console.log(response.data);
      localStorage.setItem("token", "token");
    })
    .catch(function(error) {
      console.log("error" + error.response);
    });
}

const LoginUI: React.FC = () => (
  <body className="bg">
    <div className="container">
      <div className="row no-gutter">
        <div className="col-4 offset-8">
          <div className="card card-signin my-5  border-0 rounded">
            <div className="card-body card-background ">
              <div className="d-flex align-items-center justify-content-center ml-3 mr-3">
                <img
                  src={require("../../../assets/logo/updog_logo.png")}
                  alt=""
                  className="img-thumbnail-small m-2"
                  style={logoStyle}
                />
              </div>

              <h5 className="card-title text-center mb-4">Sign In</h5>
              <form className="form-signin" onSubmit={handleSubmit}>
                <div className="form-label-group input-style">
                  <input
                    type="email"
                    value={email}
                    className="form-control"
                    placeholder="Email address"
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-label-group mt-4">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>

                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                </div>
                <button
                  className="btn btn-md btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Sign in
                </button>
                <div className="d-flex align-items-center justify-content-end">
                  <a href="/register" className="mt-2">
                    New User?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
);

export default LoginUI;
