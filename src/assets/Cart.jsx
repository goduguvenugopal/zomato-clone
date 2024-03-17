import React, { useState } from "react";

const Orders = (props) => {
  
  return (
    <>
      {props.orders && props.orders.length > 0 ? (
        <div className="container pt-4">
          <h3 className=" ">Cart Items</h3>
          <h5 className="explore"></h5>
        </div>
      ) : (
        ""
      )}

      <div className="pb-5 pt-3 non-map-card">
        {props.orders && props.orders.length > 0 ? (
          props.orders.map((cartItem, index) => (
            <div key={index} className="card1" style={{ width: "18rem" }}>
              <img src={cartItem.url} className="card-img" alt="..." />
              <div className="card-b">
                <h5 className="card-title">{cartItem.name}</h5>
                <p className="card-text">{cartItem.title}</p>
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          ))
        ) : (<div className="text-center"> 
          <h5 className="mb-3">No Items In The Cart </h5>
          <button className="btn btn-primary ">click Home</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;
