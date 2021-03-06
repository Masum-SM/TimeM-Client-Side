import React, { useEffect, useState } from "react";
import ManageOrder from "./ManageOrder";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://protected-waters-51496.herokuapp.com/allorders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleOrderDeletion = (id) => {
    const url = `https://protected-waters-51496.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Do you want to delete?");
          const remaining = orders.filter((order) => order?._id !== id);
          setOrders(remaining);
        }
      });
  };

  const handleUpdateStatus = (id) => {
    const updateSataus = { status: "Approved" };

    fetch(`https://protected-waters-51496.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateSataus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Status updated.");
          // window.location.reload();
        }
      });
  };

  return (
    <div>
      <h2 className="web-name">
        Time<span className="m">M</span>
      </h2>

      <h5 className="banner-qutes">
        FALL <span className="banner-span">IN</span> LOVE{" "}
      </h5>
      <h6 className="meaning">Redefining The Meaning Of Time</h6>
      <div className="row row-cols-1 g-4">
        {orders.map((allOrder) => (
          <ManageOrder
            key={allOrder._id}
            allOrder={allOrder}
            handleOrderDeletion={handleOrderDeletion}
            handleUpdateStatus={handleUpdateStatus}
          ></ManageOrder>
        ))}
      </div>
    </div>
  );
};

export default ManageOrders;
