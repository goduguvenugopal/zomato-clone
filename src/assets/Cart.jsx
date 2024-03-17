import React, { useState } from "react";
import "../App.css";

const Orders = (props) => {
  const [cart, setCart] = useState(props.orders);

  const removeFunc = (del) => {
    const remove = cart.filter((rem) => rem.name !== del.name);
    setCart(remove);
  };

  return (
    <>
      {cart && cart.length > 0 ? (
        <div className="container pt-4 ">
          <h3 className=" ">Cart Items</h3>
          <h5 className="explore">
            Here Are The Your Favourite Food Items Added To Cart
          </h5>
        </div>
      ) : (
        ""
      )}

      <div className="pb-5 pt-4 non-map-card">
        {cart && cart.length > 0 ? (
          cart.map((cartItem, index) => (
            <div key={index} className="card1" style={{ width: "18rem" }}>
              <img src={cartItem.url} className="card-img" alt="..." />
              <div className="card-b">
                <h5 className="card-title">{cartItem.name}</h5>
                <p className="card-text">{cartItem.title} </p>
                <div className="order-bt-card">
                  <button
                    onClick={() => removeFunc(cartItem)}
                    className=" order-bt btn btn-danger "
                  >
                    <span className="material-symbols-outlined  delete-icon ">
                      delete
                    </span>
                    Remove
                  </button>
                  <button className="order-bt btn btn-primary">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <h5 className="mb-3">No Items In The Cart </h5>
            <button className="btn btn-primary ">Click Home</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;
