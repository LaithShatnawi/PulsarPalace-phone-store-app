/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "./LoginContext";
import { DataContext } from "./DataContext";
import cookie from "react-cookies";

export const OrderContext = React.createContext();

const OrderProvider = (props) => {
  const loginState = useContext(LoginContext);
  const dataState = useContext(DataContext);

  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [added, setAdded] = useState(false);
  const [load, setLoad] = useState(false);

  console.log("???????????????????? ", orderDetails);

  const addOrder = (date, address, total) => {
    const bodyObject = {
      date,
      address,
      total_pay: parseInt(total),
      status: "Pending",
      user_id: loginState.user.id,
    };
    const response = axios
      .post(`${import.meta.env.VITE_SERVER_URL}/order`, bodyObject, {
        headers: {
          Authorization: `Bearer ${cookie.load("auth")}`,
        },
      })
      .then(async (data) => {
        const body = [];
        dataState.cart.map((item) => {
          item.orderId = data.data.id;
          item.phoneId = item.id;
          body.push(item);
        });
        const response2nd = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/productInOrder`,
          body,
          {
            headers: {
              Authorization: `Bearer ${cookie.load("auth")}`,
            },
          }
        );
        console.log(response2nd.data);
        setAdded(true);
        setLoad(!load);
        setTimeout(() => {
          setAdded(false);
        }, 3000);
      });
    console.log(response.data);
    dataState.emptyCart();
  };

  const removeOrder = async (id) => {
    const response = axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/order/${id}`, {
        headers: {
          Authorization: `Bearer ${cookie.load("auth")}`,
        },
      })
      .then(async () => {
        const response2nd = await axios.delete(
          `${import.meta.env.VITE_SERVER_URL}/productInOrder/${id}`,
          {
            headers: {
              Authorization: `Bearer ${cookie.load("auth")}`,
            },
          }
        );
        console.log(response2nd.data);
        setLoad(!load);
      });
    console.log(response.data);
  };

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const promises = orders.map(async (item) => {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/contents/${item.id}`,
          {
            headers: {
              Authorization: `Bearer ${cookie.load("auth")}`,
            },
          }
        );
        return response.data;
      });

      const orderDetailsData = await Promise.all(promises);
      setOrderDetails(orderDetailsData);
    };

    fetchOrderDetails();
  }, [orders]);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/orders/${loginState.user.id}`,
        {
          headers: {
            Authorization: `Bearer ${cookie.load("auth")}`,
          },
        }
      );
      console.log("orders: ", response.data);
      setOrders(response.data);
    };
    getOrders();
  }, [loginState.user.id, load]);

  const state = {
    orders,
    addOrder,
    added,
    removeOrder,
    orderDetails,
  };
  return (
    <OrderContext.Provider value={state}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
