import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import swal from "sweetalert";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, authError, isLoading, signInWithGoogle } =
    useFirebase();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLogin = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };

  return (
    <div className="container my-5">
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
        Please <span className="banner-span">Login</span>{" "}
      </h5>
      <div className="row">
        <div className="col-12">
          <img
            className="login-img"
            src="https://i.ibb.co/MZ9kjPy/login.png"
            alt=""
          />
        </div>

        <div className="col-12  login-form-container ">
          <div className="login-frm">
            <form onSubmit={handleLogin} className="login-input">
              <input
                className="login-input-field my-4"
                type="email"
                name="email"
                onBlur={handleOnBlur}
                placeholder="Email"
              />

              <input
                className="login-input-field"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                placeholder="Password"
              />

              <button
                className="login-input-field log-registerBtn my-4"
                type="submit"
              >
                Login
              </button>

              <p>
                New User? Please{" "}
                <Link className="login-link-btn" to="/register">
                  Register
                </Link>
              </p>
            </form>
            <button
              onClick={handleGoogleSignIn}
              type="submit"
              className="btn btn-info m-3 text-white"
            >
              Google Sign In
            </button>

            {isLoading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}

            {/* {user?.email &&
             } */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
