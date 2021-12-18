import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
const AddWatch = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://protected-waters-51496.herokuapp.com/Watches", data)
      .then((res) => {
        alert("Added successfully");
        reset();
      });
  };
  return (
    <div className="add-lipstick-container my-5">
      <h2 className="web-name">
        Time<span className="m">M</span>
      </h2>

      <h5 className="banner-qutes">
        FALL <span className="banner-span">IN</span> LOVE{" "}
      </h5>
      <h6 className="meaning">Redefining The Meaning Of Time</h6>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card h-100  add-watch-Imgcard">
            <div className="card-body">
              <img
                src="https://i.ibb.co/RT7wqJT/new.png"
                className="card-img-top w-75"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 add-watch-Imgcard">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className="addWatch-form">
                <input {...register("img1")} placeholder="Image Url" />
                <input {...register("img2")} placeholder="Image Url" />
                <input {...register("img3")} placeholder="Image Url" />
                <input
                  {...register("name", { required: true, maxLength: 200 })}
                  placeholder="Name"
                />
                <textarea
                  className="addLip-text"
                  {...register("des")}
                  placeholder="Description"
                />
                <input
                  type="text"
                  {...register("productDetails1")}
                  placeholder="Product Details"
                />
                <input
                  type="text"
                  {...register("productDetails1")}
                  placeholder="Product Details"
                />
                <input
                  //   type="formattedValue"
                  type="number"
                  {...register("rating")}
                  placeholder="Rating"
                  min="0"
                  max="5"
                />
                <input type="text" {...register("price")} placeholder="Price" />

                <input className="add-Lip-btn" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWatch;
