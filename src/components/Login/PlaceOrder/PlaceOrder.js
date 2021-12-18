import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useFirebase from "../../Hooks/useFirebase";
import "./PlaceOrder.css";
import Header from "../../Shared/Header/Header";

const PlaceOrder = () => {
  const { id } = useParams();
  const [watch, setWatch] = useState([]);
  console.log(watch);

  const { user } = useFirebase();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://protected-waters-51496.herokuapp.com/Watches/${id}`)
      .then((res) => res.json())
      .then((data) => setWatch(data));
  }, []);

  const onSubmit = (data) => {
    const orderdetails = {
      ...data,
      ...watch,
    };
    delete orderdetails._id;

    axios
      .post("https://protected-waters-51496.herokuapp.com/orders", orderdetails)
      .then((res) => {
        alert("Added successfully");
        reset();
      })
      .then((result) => {
        if (result?.insertedId) {
          alert("Order processed successfully");

          reset();
        }
      });
  };

  return (
    <div>
      <Header></Header>

      <div className="conteiner px-5">
        <div className="add-lipstick-container my-5">
          <h2 className="banner-title">
            Shades <span className="banner-span">Of</span> Love
          </h2>

          <h5 className="banner-qutes">
            Purches Your <span className="banner-span">Order</span>{" "}
          </h5>
          <div className="row row-cols-1 my-5 row-cols-md-2 g-4">
            <div className="col">
              <div className="card h-100  add-watch-Imgcard">
                <img
                  src={watch.img1}
                  className="card-img-top w-50 mx-auto"
                  alt="..."
                />
                <div className="card-body">
                  <h4>{watch.name}</h4>
                  <p>Cost : {watch.price}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 add-watch-Imgcard">
                <div className="card-body">
                  <form
                    className="addWatch-form pt-3"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input
                      defaultValue={user.displayName}
                      {...register("userName", { required: true })}
                    />
                    {errors.userName && <span>This field is required</span>}
                    <input
                      defaultValue={user.email}
                      {...register("email", { required: true })}
                    />
                    {errors.email && <span>This field is required</span>}

                    <input
                      defaultValue="Pending"
                      {...register("status", { required: true })}
                    />

                    {errors.status && <span>This field is required</span>}

                    <input placeholder="Address" {...register("address")} />
                    <input placeholder="City" {...register("city")} />
                    <input placeholder="Phone Number" {...register("Phone")} />

                    <input className="add-watch-btn" type="submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
