import React from "react";
import Rating from "react-rating";
import "./Review.css";
const Review = (props) => {
  const { name, email, des, rating } = props.review;
  return (
    <div className="col review-container mb-5">
      <div className="card h-100 review-card ">
        <div className="card-body">
          <h5 className="card-title review-name">{name} </h5>
          <p>
            <small>{email}</small>
          </p>
          <p className="card-text"> {des}</p>
          <div className="mb-4 bg-transparent">
            <small>Rating : </small>
            <Rating
              initialRating={rating}
              readonly
              placeholderRating={3.5}
              emptySymbol={<i className="far fa-star review-rating"></i>}
              placeholderSymbol={
                <i className="fas fa-star-half-alt  review-rating"></i>
              }
              fullSymbol={<i className="fas fa-star  review-rating"></i>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
