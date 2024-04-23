import React, { useContext, useState } from "react";
import "../App.css";
import { foodList, scroll } from "./data";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cart1Context } from "./WebPages";

const MainComp = () => {
  const [data, setData] = useContext(cart1Context);

  const [food, setFood] = useState(foodList);
  const [scrollList, setScrollList] = useState(scroll);
  
  const [addedToCart, setAddedToCart] = useState({});

  // items adding in the cart function

  const filterFunc = (selectedfFood) => {
    const filtered = foodList.find((item) => item.name === selectedfFood.name);
    let cartItems = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve existing cart items
    if (!Array.isArray(cartItems)) {
        cartItems = []; // Ensure cartItems is an array
    }
    const updatedCartItems = [...cartItems,  { ...filtered, counti: 1 }]; // Updated cart items
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    setData([...data, { ...filtered, counti: 1 }]);
    // addcart button function
    setAddedToCart({ ...addedToCart, [selectedfFood.name]: true });
    notify();
  };
  // tostify function
  const notify = () => toast("Item Added Successfully To The Cart");

  return (
    <>
      <ToastContainer />

      <div className="">
        <div className="container pt-4">
          <h3 className=" ">Collections</h3>
          <div className="scroll-card">
            {scrollList.map((item, index) => (
              <div key={index} className=" overflow-card">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="pb-5 pt-3 non-map-card">
          {food.map((foodItem, index) => (
            <div key={index} className="card1" style={{ height: "390px" }}>
              <img src={foodItem.url} className="card-img" alt="..." />
              <div className="card-b">
                <h5 className="card-title">{foodItem.name}</h5>
                <div className="pb-2 d-flex justify-content-between align-items-center">
                  <h6 className="card-text title-txt">{foodItem.title}</h6>
                  <div className=" d-flex justify-content-between align-items-center">
                    <span className="material-symbols-outlined rupee-icon">
                      currency_rupee
                    </span>
                    <h6 className="title-txt">{foodItem.cost} for one</h6>
                  </div>
                </div>
                {addedToCart[foodItem.name] ? (
                  <button className="btn btn-primary" disabled>
                    Added
                  </button>
                ) : (
                  <button
                    onClick={() => filterFunc(foodItem)}
                    className="btn btn-primary"
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainComp;
