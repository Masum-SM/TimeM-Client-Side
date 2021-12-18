import React, { useEffect, useState } from "react";
import ManageWatch from "./ManageWatch";

const ManageWatches = () => {
  const [watches, setwatches] = useState([]);

  useEffect(() => {
    fetch("https://protected-waters-51496.herokuapp.com/Watches")
      .then((res) => res.json())
      .then((data) => setwatches(data));
  }, [watches]);

  const handleDeleteWatches = (id) => {
    const url = `https://protected-waters-51496.herokuapp.com/Watches/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Do you want to delete?");
          const remaining = watches.filter((watches) => watches?._id !== id);
          setwatches(remaining);
        }
      });
  };
  return (
    <div>
      <div id="watches" className="container">
        <h2 className="web-name">
          Time<span className="m">M</span>
        </h2>

        <h5 className="banner-qutes">
          FALL <span className="banner-span">IN</span> LOVE{" "}
        </h5>
        <h6 className="meaning">Redefining The Meaning Of Time</h6>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {watches.map((watches) => (
            <ManageWatch
              key={watches._id}
              watches={watches}
              handleDeletewatches={handleDeleteWatches}
            ></ManageWatch>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageWatches;
