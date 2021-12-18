import React, { useEffect, useState } from "react";
import Review from "./Review";
import "./Reviews.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const [rewiews, setReviews] = useState([]);
  console.log(rewiews);
  useEffect(() => {
    fetch("https://protected-waters-51496.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
    <div className="review-container">
      <div className="container w-75">
        <h2 className="brand-title">REVIEWS</h2>
        <div className="row row-cols-1 g-4 ">
          <Slider {...settings}>
            {rewiews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
