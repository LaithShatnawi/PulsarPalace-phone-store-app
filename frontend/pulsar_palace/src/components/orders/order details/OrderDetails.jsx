/* eslint-disable react/prop-types */
import "./OrderDetails.scss";
import "../Orders.scss";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../context/OrderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faTrashCan,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../context/DataContext";
import { motion } from "framer-motion";

const OrderDetails = ({ item }) => {
  const state = useContext(OrderContext);
  const data = useContext(DataContext);
  const [show, setShow] = useState(false);
  const [orId, setOrId] = useState(null);

  const handleClick = (id) => {
    setOrId(id);
    setShow(!show);
  };

  const returnData = (phoneId) => {
    const phone = data.data.filter((el) => phoneId == el.id);
    return phone[0];
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="elelele">
        <div className="address el">{item.address}</div>
        <div className="date el">{item.date.substring(0, 10)}</div>
        <div className="total el">${item.total_pay}</div>
        <div className="status_remove el">
          <div className="status">{item.status}</div>
          <button onClick={() => state.removeOrder(item.id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
      {show && (
        <motion.div
          className="concon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {state.orderDetails.map((item) => {
            return item.map((el, idx) => {
              if (el.orderId == orId) {
                console.log(returnData(el.phoneId));
                return (
                  <div key={idx} className="orderdetails_container">
                    <div className="element">
                      <img
                        src={returnData(el.phoneId).images.split("||")[0]}
                        alt=""
                      />
                    </div>
                    <div className="element">
                      {returnData(el.phoneId).brandName +
                        " " +
                        returnData(el.phoneId).modelName}
                    </div>
                    <div className="element">
                      <b>Quantity:</b>
                      <span>{el.quantity}</span>
                    </div>
                    <div className="element">
                      <b>Price:</b>
                      <span>{el.price}</span>
                    </div>
                  </div>
                );
              }
            });
          })}
        </motion.div>
      )}
      <div className="floating_list" onClick={() => handleClick(item.id)}>
        {!show ? (
          <FontAwesomeIcon icon={faChevronDown} className="arrow" />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} className="arrow" />
        )}
      </div>
    </>
  );
};

export default OrderDetails;
