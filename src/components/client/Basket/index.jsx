import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Basket/style.css";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../redux/api/cartSlice";
import { CiSquareRemove } from "react-icons/ci";


function Basket() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container basket">
      <div className="row">
        <div className="bgHeader_basket">
          <div>
            <h2>Cart List</h2>
          </div>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className="container">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <>
                    <tr key={index}>
                      <td>
                        <div className="img_title d-flex align-items-center gap-4">
                          <img src={item.image} alt="productImg" />
                          <p>{item.name}</p>
                        </div>
                      </td>
                      <td>
                        <div className="price_title d-flex align-items-center">
                          <h5>${item.price.toString().slice(0, 3)}</h5>
                        </div>
                      </td>
                      <td>
                        <div className="count_basket">
                          <div
                            onClick={() => dispatch(decrementQuantity(item.id))}
                            className="count_inc_dec"
                          >
                            <CiSquareMinus
                              style={{ width: "25px", height: "30px" }}
                            />
                          </div>
                          <input
                            className="input-number"
                            type="text"
                            value={item.quantity}
                            min={0}
                            max={10}
                          />
                          <div
                            onClick={() => dispatch(incrementQuantity(item.id))}
                            className="count_inc_dec"
                          >
                            <CiSquarePlus
                              style={{ width: "25px", height: "30px" }}
                            />
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="price_title d-flex align-items-center">
                          <h5>
                            ${item.price * item.quantity}
                          </h5>
                        </div>
                      </td>


                      <span onClick={()=> dispatch(removeFromCart(item.id))} className="removeCart">
                        < CiSquareRemove/>
                      </span>
                    </tr>
                  </>
                ))}
                
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                        <h5>Subtotal</h5>
                      </td>
                      <td>
                        <h5 className="subtotal">${subtotal.toFixed(2)}</h5>
                      </td>
                    </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
