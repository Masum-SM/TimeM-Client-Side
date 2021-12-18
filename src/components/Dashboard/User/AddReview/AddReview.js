import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import useFirebase from "../../../Hooks/useFirebase";
const AddReview = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useFirebase();
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post("https://protected-waters-51496.herokuapp.com/reviews", data)
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
      <div className="row row-cols-1 row-cols-md-2 my-4 g-4">
        <div className="col">
          <div className="card h-100  add-watch-Imgcard">
            <div className="card-body">
              <img
                src="https://i.ibb.co/606HFXK/review-icon-12.png"
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
                <input
                  defaultValue={user.displayName}
                  {...register("name", { required: true })}
                />
                {errors.userName && <span>This field is required</span>}
                <input
                  defaultValue={user.email}
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}

                <textarea {...register("des")} placeholder="Description" />
                <input
                  //   type="formattedValue"
                  type="number"
                  {...register("rating")}
                  placeholder="Rating"
                  min="0"
                  max="5"
                />

                <input className="add-Lip-btn" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
