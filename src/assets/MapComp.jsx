import React from "react";
import "../App.css";

const MapComp = ({ data }) => {
  return (
    <>
      <div className="container pt-4">
        <h3 className=" ">Collections</h3>
        <h5 className="explore">Here are the Results you are Looking</h5>
      </div>
      <div className="pb-5 pt-3 non-map-card">
        {data.map((item) => (
          <div className="card1" key={item.id} style={{ width: "18rem" }}>
            <img src={item.recipe.image} className="card-img" alt="..." />
            <div className="card-b">
              <h5 className="card-title">{item.recipe.label}</h5>
              <p className="card-text">
                Total Amount Of Calories: {Math.round(item.recipe.calories)}
              </p>
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MapComp;
