import "./Cart.scss";
import { DataContext } from "../../context/DataContext";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "./chekoutModal/Modal";
import Notification from "../notification/Notification";

const Cart = () => {
  const state = useContext(DataContext);
  const [openModal, setOpenModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  let total = 0;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="cartt_container">
        <h1>Shopping Cart</h1>
        <div className="cart_inner_container">
          <div className="cart_contents">
            <div className="item_card1">
              <div className="image">
                <span></span>
              </div>
              <div className="description">
                <div className="name">Product</div>
                <div className="quantity">Quantity</div>
                <div className="price">Price</div>
              </div>
              <div className="closeBTN">
                <span >
                </span>
              </div>
            </div>
            <div className="inner">
              {state.cart.map((el, idx) => {
                const numPrice = el.price.substring(1).replace(",", "");
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
                      <span onClick={() => state.removeFromCart(el)}>
                        <FontAwesomeIcon icon={faXmark} />
                      </span>
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
              <button
                className="checkout_btn"
                onClick={() => {
                  if (state.cart.length) {
                    setOpenModal(true);
                  }
                }}
              >
                Checkout
              </button>
              <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                total={total}
                handleShow={handleShow}
              />
            </div>
          </div>
        </div>
        {show && <Notification handleClose={handleClose} />}
      </div>
    </>
  );
};

export default Cart;
