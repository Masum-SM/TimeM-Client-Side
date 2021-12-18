import React, { useEffect, useState } from "react";
import "./WatchesHome.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WatchHome from "./WatchHome";

const WatchesHome = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("https://protected-waters-51496.herokuapp.com/Watches")
      .then((res) => res.json())
      .then((data) => setWatches(data.slice(0, 6)));
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="watchesHeader">
        <div className="container w-75">
          <h2 className="watestitle">Latest Collection !!!</h2>
          <p className="watchHeadText">
            Time is home to the greatest collection of pre-owned luxury watches,
            all certified as authentic and Collector Quality.
          </p>
          <div>
            <Slider {...settings}>
              <div>
                <h4 className="brand-div abot-slider">
                  360° QUALITY INSPECTION
                </h4>
              </div>
              <div>
                <h4 className="brand-div abot-slider">
                  EXPERT INTERIOR SERVICE
                </h4>
              </div>
              <div>
                <h4 className="brand-div abot-slider">
                  AUTHENTICITY GUARANTEE
                </h4>
              </div>
              <div>
                <h4 className="brand-div abot-slider">WORRY-FREE WEAR</h4>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div id="cars" className="container my-3">
        <div className="row row-cols-1 row-cols-md-3 g-4 cars-container">
          {watches.map((watch) => (
            <WatchHome key={watch._id} watch={watch}></WatchHome>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchesHome;
