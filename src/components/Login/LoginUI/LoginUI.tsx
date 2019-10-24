import React, { useState } from "react";
import "../../../assets/styles/Login/login.css";

const logoStyle = {
  width: "80x",
  height: "80px"
};

//UI for logging in.
const LoginUI = (props: {
  handleLogin: (arg0: {
    name: string;
    email: string;
    password: string;
  }) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Submits form, prevents page refresh
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const userInfo = {
      name: "steve",
      email: email,
      password: password
    };
    props.handleLogin(userInfo);
  };

  //Login
  return (
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
                    <a href="/register" className="mt-2 new-user">
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
};

export default LoginUI;
