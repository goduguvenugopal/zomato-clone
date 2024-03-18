import React, { useState } from "react";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orders = (props) => {
  const [cart, setCart] = useState(props.orders);
  const [order, setOrder] = useState([]);
  const [count, setCount] = useState(1);

  const notify = () => toast("Successfully Removed Item from Cart");

  const removeFunc = (del) => {
    const updatedCart = cart.filter((rem) => rem.name !== del.name);
    setCart(updatedCart);
    notify();
    console.log("After removal:", updatedCart);
  };

  const placeOrder = (order) => {
    const ordered = cart.find((item) => item.name === order.name);
    setOrder([ordered]);
    setCount(0);
  };

  const increFunc = () => {
    // Increment count by 1
    setCount(count + 1);
  };
  const decreFunc = () => {
    // Increment count by 1
    setCount(count - 1);
  };

  return (
    <>
      <ToastContainer />
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
            <div key={index} className="card1 " style={{ height: "390px" }}>
              <img src={cartItem.url} className="card-img" alt="..." />
              <div className="card-b">
                <h5 className="card-title">{cartItem.name}</h5>
                <div className="pb-2 d-flex justify-content-between align-items-center">
                  <h6 className="card-text title-txt">{cartItem.title}</h6>
                  <div className=" d-flex justify-content-between align-items-center">
                    <span className="material-symbols-outlined rupee-icon">
                      currency_rupee
                    </span>
                    <h6 className="title-txt">{cartItem.cost} for one</h6>
                  </div>
                </div>

                <div className="order-bt-card">
                  <button
                    onClick={() => removeFunc(cartItem)}
                    className=" order-bt btn btn-danger "
                  >
                    <span className="material-symbols-outlined delete-icon">
                      delete
                    </span>
                    Remove
                  </button>
                  <button
                    onClick={() => placeOrder(cartItem)}
                    className="order-bt btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <h5 className="mb-3">No Items In The Cart </h5>
            <button className="btn btn-primary ">Click Home To Go Back</button>
          </div>
        )}
      </div>
      <>
        {/* Modal */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                 Place Order
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {order.map((item, index) => (
                  <div className="card p-2" key={index}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex justify-content-between align-items-center">
                        <img src={item.url} className="order-img" alt="..." />
                        <div className="meals-card">
                          <h4 className="">{item.name}</h4>
                          <h6 className="title-txt">{item.title}</h6>
                          <div className="d-flex justify-content-start align-items-center">
                            <span className="material-symbols-outlined rupee-icon">
                              currency_rupee
                            </span>
                            <h6 className="title-txt">{item.cost}</h6>
                          </div>
                        </div>
                      </div>

                      <div className=" d-flex flex-column  align-items-center ">
                        <h4 className="">Add Item </h4>
                        <div className="counter-card">
                          <span
                            onClick={() => decreFunc(item)}
                            class="material-symbols-outlined countbt"
                          >
                            remove
                          </span>

                          <h6 className="count">{count}</h6>

                          <span
                            onClick={() => increFunc(item)}
                            class="material-symbols-outlined countbt"
                          >
                            add
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                
                <button type="button" className="btn btn-primary">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Orders;
