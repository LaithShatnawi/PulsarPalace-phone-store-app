import "./Cart.scss";
import { DataContext } from "../../context/DataContext";
import { useContext, useEffect } from "react";

const Cart = () => {
  const state = useContext(DataContext);
  let total = 0;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cartt_container">
      <h1>Shopping Cart</h1>
      <div className="cart_inner_container">
        <div className="cart_contents">
          <div className="headers">
            <span className="pro">Product</span>
            <span className="qu">Quantity</span>
            <span className="pri">Price</span>
          </div>
          <div className="inner">
            {state.cart.map((el, idx) => {
              const numPrice = el.price.substring(1).replace(",","");
              total += parseFloat(numPrice) * parseFloat(el.quantity);
              return (
                <div key={idx} className="item_card">
                  <div className="image">
                    <img src={el.image} alt="" />
                  </div>
                  <div className="description">
                    <div className="name">{el.item}</div>
                    <div className="quantity">{el.quantity}</div>
                    <div className="price">{el.price}</div>
                  </div>
                  <div className="closeBTN">
                    <span onClick={() => state.removeFromCart(el)}>X</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="checkout_container">
          <div className="checkout">
            <h4>Checkout Information</h4>
            <div className="total">
              <span>Total:</span>${total.toFixed(2)}
            </div>
            <button className="checkout_btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
