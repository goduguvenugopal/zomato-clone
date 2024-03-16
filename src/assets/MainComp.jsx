import React, { useState } from "react";
import "../App.css";
import { foodList } from "./data";
import OrderList from "./OrderList";
 

export const cartContext = React.createContext();

const MainComp = () => {
  const [food, setFood] = useState(foodList);
  const [cart, setCart] = useState([]);

  const filterFunc = (selectedfFood) => {
    const filtered = foodList.find((item) => item.name === selectedfFood.name);
    setCart([...cart, { ...filtered }]);
  };
  return (
    <>
      <div className="container pt-4">
        <h3 className=" ">Collections</h3>
        <h5 className="explore">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          India, based on trends
        </h5>
      </div>

      <div className="pb-5 pt-3 non-map-card">
        {food.map((foodItem, index) => (
          <div key={index} className="card1" style={{ width: "18rem" }}>
            <img src={foodItem.url} className="card-img" alt="..." />
            <div className="card-b">
              <h5 className="card-title">{foodItem.name}</h5>
              <p className="card-text">{foodItem.title}</p>
              <button
                onClick={() => filterFunc(foodItem)}
                className="btn btn-primary"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="context-card "> 
      <cartContext.Provider value={cart}>
     <OrderList/>
      </cartContext.Provider>
      </div>
    </>
  );
};

export default MainComp;
