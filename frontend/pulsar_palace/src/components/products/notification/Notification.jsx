/* eslint-disable react/prop-types */
import "./Notification.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTriangleExclamation,
  faXmark,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { OrderContext } from "../../context/OrderContext";

const Notification = ({ handleClose }) => {
  const state = useContext(DataContext);
  const loginState = useContext(LoginContext);
  const orderState = useContext(OrderContext);

  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, 3000);
  }, [handleClose]);

  const handleInfo = () => {
    if (orderState.added) {
      return (
        <div className="notif_container">
          <div className="icon">
            <FontAwesomeIcon icon={faCircleCheck} />
          </div>
          <div className="text">Order Has Been Placed</div>
          <div className="closeBtn" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      );
    }

    if (!loginState.loggedIn) {
      return (
        <div className="notif_container_ex">
          <div className="icon" id="orange">
            <FontAwesomeIcon icon={faCircleExclamation} />
          </div>
          <div className="text">
            You Have to Login/Register in Order to Add to Cart
          </div>
          <div className="closeBtn" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      );
    }
    if (!state.isInCart) {
      return (
        <div className="notif_container">
          <div className="icon">
            <FontAwesomeIcon icon={faCircleCheck} />
          </div>
          <div className="text">Item Has Been Added to The Cart</div>
          <div className="closeBtn" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="notif_container_ex">
          <div className="icon">
            <FontAwesomeIcon icon={faTriangleExclamation} />
          </div>
          <div className="text">Item Already Exists in The Cart</div>
          <div className="closeBtn" onClick={handleClose}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      );
    }
  };

  return <>{handleInfo()}</>;
};

export default Notification;
