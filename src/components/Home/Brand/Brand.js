import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Brand.css";

const Brand = () => {
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
          slidesToShow: 2,
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
    <div className="brand-container">
      <div className="container w-75">
        <div className="row">
          <div className="col-md-3 col-12">
            <h2 className="brand-title">TimeM's Top Brands</h2>
          </div>
          <div className="col-md-9 col-12">
            <Slider {...settings}>
              <div>
                <h3 className="brand-div">Patek Philippe</h3>
              </div>
              <div>
                <h3 className="brand-div">Omega</h3>
              </div>
              <div>
                <h3 className="brand-div">Rolex</h3>
              </div>
              <div>
                <h3 className="brand-div">Jaquet Droz</h3>
              </div>
              <div>
                <h3 className="brand-div">Breguet</h3>
              </div>
              <div>
                <h3 className="brand-div">TAG Heuer</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
