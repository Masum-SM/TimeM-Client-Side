import React from "react";
import "./DashHome.css";
const DashHome = () => {
  return (
    <div className="my-5">
      <img
        className="w-50 mx-auto my-5"
        src="https://i.ibb.co/2vL4tSR/logo0-removebg-preview.png"
        alt=""
      />
      <h2 className="web-name">
        Time<span className="m">M</span>
      </h2>

      <h5 className="banner-qutes">
        FALL <span className="banner-span">IN</span> LOVE{" "}
      </h5>
      <h6 className="meaning">Redefining The Meaning Of Time</h6>
    </div>
  );
};

export default DashHome;
