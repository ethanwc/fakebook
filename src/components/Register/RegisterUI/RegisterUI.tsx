import React, { useState } from "react";
import "../../../assets/styles/Register/register.css";

const logoStyle = {
  width: "80x",
  height: "80px"
};

const RegisterUI = (props: any) => {
  //hooks to get information from forms
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [passMatch, setPassMatch] = useState(true);

  //Submits form, prevents page refresh
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const userInfo = {
      name: name,
      username: username,
      email: email,
      password: password,
      status: "Online"
    };

    if (props.checkPasswords(password, cpassword))
      props.handleRegister(userInfo);
    else setPassMatch(false);
  };

  const passDontMatch = !passMatch ? (
    <div className="alert alert-danger mt-4" role="alert">
      <strong>Passwords don't match! </strong>
    </div>
  ) : null;

  //Register
  return (
    <body className="bg">
      <div className="container">
        <div className="row no-gutter">
          <div className="col-4 offset-8">
            <div className="card card-signin my-5 border-0 rounded">
              <div className="card-body card-background">
                <div className="d-flex align-items-center justify-content-center ml-3 mr-3">
                  <img
                    src={require("../../../assets/logo/updog_logo.png")}
                    alt=""
                    className="img-thumbnail-small m-2"
                    style={logoStyle}
                  />
                </div>

                <h5 className="card-title text-center mb-4">Sign Up</h5>
                {/* todo: error component here that is toggled by request */}
                <form className="form-signin" onSubmit={handleSubmit}>
                  <div className="form-label-group input-style mt-4">
                    <input
                      type="text"
                      id="inputName"
                      className="form-control"
                      placeholder="Name"
                      onChange={e => setName(e.target.value)}
                      value={name}
                      required
                    />
                  </div>
                  <div className="form-label-group input-style mt-4">
                    <input
                      type="text"
                      id="inputUsername"
                      className="form-control"
                      placeholder="Username"
                      pattern=".{4,}"
                      title="Min username length of 4"
                      onChange={e => setUsername(e.target.value)}
                      value={username}
                      required
                    />
                  </div>

                  <div className="form-label-group input-style mt-4">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>

                  <div className="form-label-group mt-4">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      onChange={e => setPassword(e.target.value)}
                      value={password}
                      placeholder="Password"
                      title="Min password length of 8"
                      pattern=".{8,}"
                      required
                    />
                  </div>
                  <div className="form-label-group mt-4">
                    <input
                      type="password"
                      id="confirmPassword"
                      onChange={e => setcPassword(e.target.value)}
                      value={cpassword}
                      pattern=".{8,}"
                      title="Min password length of 8"
                      className="form-control"
                      placeholder="Confirm Password"
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
                    Sign Up
                  </button>
                  {passDontMatch}

                  <div className="d-flex align-items-center justify-content-end">
                    <a href="/login" className="mt-2 register-already">
                      Already Registered?
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

export default RegisterUI;
