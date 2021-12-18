import React from "react";

const ManageWatch = ({ watches, handleDeletewatches }) => {
  console.log(watches);
  const { _id, img1, name, des, price } = watches;
  return (
    <div className="col home-lip-col mb-5">
      <div className="card h-100 home-lip ">
        <img src={img1} className="card-img-top p-5" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name} </h5>
          <p>
            <small>{des}</small>
          </p>

          <p className="card-text">Price: ${price}</p>
          <button
            className="remove-order me-3"
            onClick={() => {
              handleDeletewatches(_id);
            }}
          >
            <i className="fas fa-trash-alt"></i> Remove watches
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageWatch;
