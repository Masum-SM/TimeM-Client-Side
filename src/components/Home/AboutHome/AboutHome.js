import React from "react";
import "./AboutHome.css";

const AboutHome = () => {
  return (
    <div className="abouthome-container">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div
            class="col"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div class="card h-100 home-aboutCard">
              <img
                src="https://i.ibb.co/2vL4tSR/logo0-removebg-preview.png"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div
            class="col"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div class="card h-100 home-about-text">
              <div class="card-body text-start px-3">
                <h5 class="card-title">
                  Time<span className="m">M</span>
                </h5>
                <h2 className="about-title">
                  Time to be Different - That's our Motto
                </h2>
                <p class="card-text">
                  A watch says a lot about you and it should help you stand out
                  (no Apple watches here). We only carry watch brands that make
                  a statement.
                </p>
                <hr className="text-secondary" />
                <div className="info">
                  <h4 className="about-info">
                    <i class="fas fa-store-alt me-2"></i> Sunfrancico, Golden
                    Town, Road MS56A
                  </h4>
                  <h4 className="about-info">
                    <i class="fas fa-phone-alt me-2"></i> +99 0945893094
                  </h4>
                  <h4 className="about-info">
                    <i class="fas fa-envelope-open  me-2"></i>{" "}
                    Time.M@hotmail.com
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
