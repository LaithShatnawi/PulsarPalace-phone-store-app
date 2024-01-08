/* eslint-disable react/prop-types */
import "./Modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { OrderContext } from "../../../context/OrderContext";

const Modal = ({ open, onClose, total, handleShow }) => {
  const orderState = useContext(OrderContext);

  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");

  if (!open) return null;

  const handleNewOrder = (e) => {
    e.preventDefault();
    orderState.addOrder(date, address, total);
    handleShow()
    onClose();
  };
  return (
    <div onClick={onClose} className="modalOverlay">
      <div onClick={(e) => e.stopPropagation()} className="containerr">
        <div className="modalRight">
          <div className="closeContain" onClick={onClose}>
            <div className="closeBtn">
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
          <form className="content" onSubmit={handleNewOrder}>
            <div className="info">Delivery Information</div>
            <div className="inputContain">
              <label htmlFor="usernameField" className="usernamelabel label">
                Address
              </label>
              <input
                type="text"
                placeholder="Address"
                id="usernameField"
                required="required"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className="inputContain">
              <label htmlFor="usernameField" className="usernamelabel label">
                Arrival Date
              </label>
              <input
                type="date"
                placeholder="Arrival Date"
                id="usernameField"
                required="required"
                min={new Date().toJSON().slice(0, 10)}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <button type="submit">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
