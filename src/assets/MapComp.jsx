import React from "react";
import "../App.css";
import { scroll } from "./data";
import { useState } from "react";

const MapComp = ({ data }) => {
  const [scrollList, setScrollList] = useState(scroll);
  return (
    <>
      <div className="container pt-4">
        <h3 className=" ">Collections</h3>
        <h5 className="explore">Here are the Results you are Looking</h5>
        <div className="scroll-card">
              {scrollList.map((item, index) => (
                <div key={index} className=" overflow-card">{item}</div>
              ))}
            </div>
      </div>
      <div className="pb-5 pt-3 non-map-card">
        {data.map((item) => (
          <div className="card2" key={item.id} >
            <img src={item.recipe.image} className="card-img" alt="..." />
            <div className="card-b">
              <h6 className="card-title">{item.recipe.label}</h6>
              <p className="card-text">
                Total Amount Of Calories: {Math.round(item.recipe.calories )}
              </p>
              <button className="btn btn-primary">Place Order</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MapComp;
