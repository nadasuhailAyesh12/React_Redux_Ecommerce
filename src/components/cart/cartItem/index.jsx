import React from "react";
import { useDispatch } from "react-redux";

import { deleteFromCart, updateQuantity } from "../../../actions/cartActions";
import "./style.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="product">
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid mx-auto d-block image" src={item.image} />
        </div>
        <div className="col-md-8">
          <div className="info">
            <div className="row">
              <div className="col-md-5 product-name">
                <div className="product-name">
                  <span className="name">{item.name}</span>
                  <div className="product-info">
                    <p className="value">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 quantity">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  max="5"
                  defaultValue="1"
                  className="form-control quantity-input"
                  onChange={(e) => {
                    dispatch(updateQuantity(item.id, e.target.value));
                  }}
                  onClick={(e) => {
                    dispatch(updateQuantity(item.id, e.target.value));
                  }}
                />
              </div>
              <div className="col-md-3 price">
                <span>{item.price}</span>
                <span
                  className="fa-sharp fa-solid fa-trash"
                  onClick={() => dispatch(deleteFromCart(item))}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
