import React from "react";
import "./Order.css";
const Order = (props) => {
  const { _id, status, name, img1, price } = props.myOrder;
  return (
    <div>
      <div className="col">
        <div className="card h-100 order-card">
          <div className="row order-body">
            <div className="col-12 col-md-5 order-img">
              <img src={img1} className="card-img-top" alt="..." />
            </div>

            <div className="col-12 col-md-5 card-body">
              <h5 className="card-title">{name.slice(0, 15)}</h5>
              <p className="card-text">Status : {status} </p>
              <div className="">
                <p>Price : ${price}</p>

                <button
                  className="remove-order"
                  onClick={() => {
                    props.handleOrderDeletion(_id);
                  }}
                >
                  <i className="fas fa-trash-alt"></i> Remove Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
