import React, { useState, useContext } from "react";
import { cart1Context, photoContext, profileContext } from "./WebPages";
import "../App.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

const Cart1 = () => {
  const [data, setData] = useContext(cart1Context);
  const [order, setOrder] = useState([]);
  const [count, setCount] = useState(1);
  const [soup, setSoup] = useState(0);
  const [image, setImage] = useContext(photoContext);
  const [text, setText] = useContext(profileContext);

  const notify = () => toast("Successfully Removed Item from Cart");
  const notify2 = () => toast("Your Order Has Been Placed Successfully ");
  // remove items in cart functions
  const removeFunc = (del) => {
    const updatedCart = data.filter((rem) => rem.name !== del.name);
    setData(updatedCart);
    notify();
  };

  // placing order function

  const placeOrder = (order) => {
    const ordered = data.find((item) => item.name === order.name);
    setOrder([ordered]);
    setCount(0);
  };

  // price increment function
  const increFunc = (product) => {
    const updated = order.map((check) => {
      if (check.name === product.name) {
        check.counti = product.counti + 1;
      }
      return check;
    });
    setOrder([...updated]);

    setCount(count + 1);
  };

  // price decrement function
  const decreFunc = (product) => {
    const updated = order.map((check) => {
      if (check.name === product.name) {
        check.counti = product.counti - 1;
      }
      return check;
    });
    setOrder([...updated]);

    setCount(count - 1);
  };
  // total cost of all items function

  return (
    <>
      <nav className="navbar shadow navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a href="">
            <img
              src="image/logo.png"
              className="rounded logo-img"
              alt="zomato"
            />
          </a>
          <a className="navbar-brand  fs-3 fw-bold" href="">
            Zomato
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mt-2 m-auto">
              <h5 className="">
                <Link
                  to="/"
                  className="nav-link active  home-text "
                  aria-current="page"
                >
                  Home
                </Link>
              </h5>
              <h5 style={{textTransform:'capitalize'}} className="home-text text-dark">
                <Link style={{textTransform:'capitalize'}} className="home-text nav-link text-dark" to="/profile">
                  <img src={image} className="logo-img1" alt="profile" />
                  {text.name}
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </nav>
      {/* cart mapping code  */}
      <>
        <ToastContainer />
        {data && data.length > 0 ? (
          <div className="container pt-5 mt-5 d-flex flex-wrap justify-content-between align-items-center">
            <div className="">
              <h3 className=" ">My Cart</h3>
              <h5 className="explore">
                Here Are The Your Favourite Food Items Added To Cart
              </h5>
            </div>
            <div className="pt-2">
              <h5 className="">Total Cart items : {data.length}</h5>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="pb-5 pt-3 non-map-card">
          {data && data.length > 0 ? (
            data.map((cartItem, index) => (
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
            <div
              style={{ height: "100vh" }}
              className="text-center  d-flex justify-content-between align-items-center"
            >
              <div className="">
                <h5 className="mb-3">No Items In The Cart </h5>
                <button className="btn btn-primary ">
                  Click Home To Go Back
                </button>
              </div>
            </div>
          )}
        </div>

        <>
          {/* placing order modal code  */}
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
                    <div className="place-card" key={index}>
                      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
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
                          <h4 className="">Add </h4>
                          <div className="counter-card">
                            <span
                              disabled={item.counti === 1}
                              onClick={() => decreFunc(item)}
                              className={`material-symbols-outlined countbt ${
                                item.counti === 1 ? "disabled" : ""
                              }`}
                            >
                              remove
                            </span>

                            <h6 className="count">{item.counti}</h6>

                            <span
                              onClick={() => increFunc(item)}
                              class="material-symbols-outlined countbt"
                            >
                              add
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                        <div className=" d-flex justify-content-between align-items-center">
                          <div className="meals-card">
                            <h4 className="">Veg Soup</h4>

                            <div className="d-flex justify-content-start align-items-center">
                              <span
                                className="material-symbols-outlined fw-bold"
                                style={{
                                  fontSize: "16px",
                                  marginBottom: "5px",
                                }}
                              >
                                currency_rupee
                              </span>
                              <h6 className="title-txt text-dark">80</h6>
                            </div>
                          </div>
                        </div>

                        <div className=" d-flex flex-column  align-items-center ">
                          <h4 className="">Add </h4>
                          <div className="counter-card">
                            <span
                              onClick={() => setSoup(soup - 1)}
                              className={`material-symbols-outlined countbt ${
                                soup === 0 ? "disabled" : ""
                              }`}
                            >
                              remove
                            </span>

                            <h6 className="count">{soup} </h6>

                            <span
                              onClick={() => setSoup(soup + 1)}
                              class="material-symbols-outlined countbt"
                            >
                              add
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex align-items-center">
                        <span class="material-symbols-outlined timer-icon ">
                          timer
                        </span>
                        <h6 className=" timer-txt">
                          Delivery in <b className="text-dark">29 </b> mintues
                        </h6>
                      </div>
                      <hr />
                      <div className="d-flex flex-column align-items-start">
                        <div className="d-flex align-items-center">
                          <span class="material-symbols-outlined timer-icon ">
                            home
                          </span>
                          <h6 className=" timer-txt">
                            Delivery at <b className="text-dark">Home</b>
                          </h6>
                        </div>
                        <h6   style={{ textTransform:'capitalize' }} className="timer-txt">{text.address} </h6>
                      </div>
                      <hr />
                      <div className="d-flex align-items-center">
                        <span class="material-symbols-outlined timer-icon ">
                          call
                        </span>
                        <h6 className="timer-txt ">
                          <b   style={{ textTransform:'capitalize' }} className="timer-txt">{text.name}</b>  ,
                          <b className="text-dark">+91 {text.phone}</b>
                        </h6>
                      </div>
                      <hr />
                      <div className="">
                        <h4 className="">Price Details</h4>
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="timer-txt">
                            price ( <b className="text-dark">{item.counti}</b>{" "}
                            item )
                          </h5>

                          <div className="d-flex">
                            <span
                              style={{
                                fontSize: "16px",
                                marginTop: "3px",
                                fontWeight: "bold",
                              }}
                              className="material-symbols-outlined "
                            >
                              currency_rupee
                            </span>
                            <h5
                              style={{ fontSize: "16px", fontWeight: "bold" }}
                              className=""
                            >
                              {item.counti * item.cost}
                            </h5>
                          </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex">
                            <span
                              style={{
                                fontSize: "17px",
                                marginTop: "2px",
                                marginRight: "3px",
                              }}
                              class="material-symbols-outlined "
                            >
                              description
                            </span>
                            <h5
                              style={{ fontSize: "16px", fontWeight: "bold" }}
                              className=""
                            >
                              Total Bill
                            </h5>
                          </div>
                          <div className="d-flex">
                            <span
                              style={{
                                fontSize: "16px",
                                marginTop: "3px",
                                fontWeight: "bold",
                              }}
                              className="material-symbols-outlined "
                            >
                              currency_rupee
                            </span>
                            <h5
                              style={{
                                fontSize: "16px",
                                marginTop: "px",
                                fontWeight: "bold",
                              }}
                              className=""
                            >
                              {item.counti * item.cost}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <h6 className="timer-txt">
                        Including All Taxes, Charges & donation
                      </h6>
                    </div>
                  ))}
                </div>
                <div className="modal-footer">
                  {order.map((item1) => (
                    <div
                      onClick={notify2}
                      style={{ height: "45px", width: "180px" }}
                      className="py-4 btn bg-danger d-flex flex-row justify-content-between align-items-center"
                    >
                      <div className=" d-flex flex-column justify-content-center align-items-center">
                        <div className="mt-3 d-flex flex-row justify-content-center align-items-center">
                          <span
                            style={{
                              fontSize: "16px",
                              marginBottom: "4px",
                              marginRight: "0px",
                            }}
                            className="material-symbols-outlined text-white"
                          >
                            currency_rupee
                          </span>
                          <h6
                            style={{
                              fontSize: "17px",
                              marginTop: "1px",
                              marginRight: "2px",
                            }}
                            className="text-white"
                          >
                            {" "}
                            {item1.cost * item1.counti}
                          </h6>
                        </div>
                        <div className="text-center pb-2">
                          <h6
                            style={{ fontSize: "12px" }}
                            className="text-light"
                          >
                            Total
                          </h6>
                        </div>
                      </div>
                      <h6 style={{ fontSize: "17px" }} className="text-white">
                        Place Order
                      </h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      </>
      <Footer />
    </>
  );
};

export default Cart1;
