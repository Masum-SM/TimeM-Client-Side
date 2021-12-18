import React, { useEffect, useState } from "react";
import useFirebase from "../../../Hooks/useFirebase";
import Order from "./Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useFirebase();

  useEffect(() => {
    const url = `https://protected-waters-51496.herokuapp.com/orders?email=${user.email}`;
    fetch(url)
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
  return (
    <div>
      <h2 className="web-name">
        Time<span className="m">M</span>
      </h2>

      <h5 className="banner-qutes">
        FALL <span className="banner-span">IN</span> LOVE{" "}
      </h5>
      <h6 className="meaning">Redefining The Meaning Of Time</h6>
      <div className="row row-cols-1 my-5 g-4">
        {orders.map((myOrder) => (
          <Order
            key={myOrder._id}
            myOrder={myOrder}
            handleOrderDeletion={handleOrderDeletion}
          ></Order>
        ))}
      </div>
    </div>
  );
};

export default Orders;
