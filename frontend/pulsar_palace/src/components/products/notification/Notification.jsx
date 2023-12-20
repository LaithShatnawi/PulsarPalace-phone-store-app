/* eslint-disable react/prop-types */
import "./Notification.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

const Notification = ({ handleClose }) => {
  const state = useContext(DataContext);
  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, 3000);
  }, [handleClose]);

  return (
    <>
      {!state.isInCart && (
        <div className="notif_container">
          <div className="icon">
            <FontAwesomeIcon icon={faCircleCheck} />
          </div>
          <div className="text">Item Has Been Added to The Cart</div>
          <div className="closeBtn" onClick={handleClose}>
            X
          </div>
        </div>
      )}
      {state.isInCart && (
        <div className="notif_container_ex">
          <div className="icon">
            <FontAwesomeIcon icon={faTriangleExclamation} />
          </div>
          <div className="text">Item Already Exists in The Cart</div>
          <div className="closeBtn" onClick={handleClose}>
            X
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
