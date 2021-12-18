import React, { useState } from "react";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    const inputText = e.target.value;
    setEmail(inputText);
  };
  const handleAdmin = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://protected-waters-51496.herokuapp.com/users/admin", {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Admin added succesfully");
          e.target.reset();
        }
      });
  };
  return (
    <div className="container">
      <h2 className="web-name">
        Time<span className="m">M</span>
      </h2>

      <h5 className="banner-qutes">
        FALL <span className="banner-span">IN</span> LOVE{" "}
      </h5>
      <h6 className="meaning">Redefining The Meaning Of Time</h6>

      <div className="row">
        <div className="col-12">
          <img
            className="w-25"
            src="https://i.ibb.co/JCR8M6z/admin.png"
            alt=""
          />
        </div>
        <div className="col-12  add-admin my-5">
          <form className="admin-form" onSubmit={handleAdmin}>
            <input
              type="email"
              className="admin-input"
              onBlur={handleOnBlur}
              placeholder="Email"
            />
            <br />
            <button className="admin-btn mt-3 mb-5" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
