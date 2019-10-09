import React from "react";
import useAxios from "axios-hooks";
import "../../../assets/styles/Login/login.css";
const logoStyle = {
  width: "80x",
  height: "80px"
};
export default function LoginUI() {
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
                <form className="form-signin">
                  <div className="form-label-group input-style">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      required
                    />
                  </div>

                  <div className="form-label-group mt-4">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
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
}
