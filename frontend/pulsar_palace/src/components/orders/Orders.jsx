import "./Orders.scss";
import { useContext, useEffect } from "react";
import { OrderContext } from "../context/OrderContext";
import OrderDetails from "./order details/OrderDetails";

const Orders = () => {
  const state = useContext(OrderContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ord_cont">
      <div className="title">Orders</div>
      <div className="orders_container">
        <div className="single_conatiner">
          <div className="el">Address</div>
          <div className="el">Date</div>
          <div className="el">Total</div>
          <div className="el">Status</div>
        </div>
        {state.orders
          .map((item, idx) => {
            return (
              <div key={idx} className="single_conatiner222">
                <OrderDetails item={item}/>
              </div>
            );
          })
          .reverse()}
      </div>
    </div>
  );
};

export default Orders;
