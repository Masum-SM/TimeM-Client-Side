import React, { useState } from "react";
import "./Register.css";
import { Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import swal from "sweetalert";
import useFirebase from "../../Hooks/useFirebase";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  const { user, isLoading, authError, registerUser } = useFirebase();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLogin = (e) => {
    if (loginData.password !== loginData.rePassword) {
      swal({
        title: "Greate!",
        text: "Your Password didn't match",
        icon: "warning",
        button: "Try again",
      });
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };
  return (
    <div className="container text-center my-5">
      <Link to="/">
        <img
          className="header-logo"
          src="https://i.ibb.co/YWBTHwJ/makeup.png"
          alt=""
        />
      </Link>
      <h2 className="banner-title">
        Shades <span className="banner-span">Of</span> Love
      </h2>

      <h5 className="banner-qutes">
        If You Are New User Please <span className="banner-span">Register</span>{" "}
      </h5>
      <div className="row">
        <div className="col-12">
          <img
            className="signin-img"
            src="https://i.ibb.co/WW1tnpD/regis.png"
            alt=""
          />
        </div>
        <div className="col-12 login-form-container">
          <div>
            <div className="login-frm">
              {!isLoading && (
                <form onSubmit={handleLogin} className="login-input">
                  <input
                    className="login-input-field mb-4"
                    type="text"
                    name="name"
                    onBlur={handleOnBlur}
                    placeholder="Name"
                  />

                  <input
                    className="login-input-field mb-4"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    placeholder="Email"
                  />

                  <input
                    className="login-input-field mb-4"
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    placeholder="Password"
                  />
                  <input
                    className="login-input-field mb-4"
                    type="password"
                    name="rePassword"
                    onBlur={handleOnBlur}
                    placeholder="Password"
                  />

                  <button
                    className="login-input-field log-registerBtn my-4"
                    type="submit"
                  >
                    Register
                  </button>

                  <p>
                    Alrady Registerd ? Please{" "}
                    <Link className="login-link-btn" to="/login">
                      Login
                    </Link>
                  </p>
                </form>
              )}
              {isLoading && (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
