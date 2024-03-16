import React, { useContext } from 'react'
import {cartContext} from './MainComp'
import '../App.css'

const OrderList = () => {
    const cart = useContext(cartContext)
   
  return (
    <div className="pb-5 pt-3 non-map-card">
  {cart.map((cart, index) => (
          <div key={index} className="card1" style={{ width: "18rem" }}>
            <img src={cart.url} className="card-img" alt="..." />
            <div className="card-b">
              <h5 className="card-title">{cart.name}</h5>
              <p className="card-text">{cart.title}</p>
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        ))}

    </div>
  )
}

export default OrderList