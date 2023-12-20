/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useEffect, useState } from "react";
import cookie from "react-cookies";

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [details, setDetails] = useState({});
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [isInCart, setIsInCart] = useState(false);

  const savedDetails = cookie.load("details");
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  // const savedQuantity = JSON.parse(localStorage.getItem("quantity"));

  const saveCookie = (phone) => {
    setDetails(phone);
    cookie.save("details", JSON.stringify(phone));
  };

  const addToCart = (phone, num) => {
    const parsedNum = parseInt(num);

    const itemExists = cart.some(
      (item) => item.item === phone.brandName + " " + phone.modelName
    );

    if (itemExists) {
      console.log(
        "Item already exists in the cart:",
        phone.brandName + " " + phone.modelName
      );
      setIsInCart(true);
      setTimeout(() => {
        setIsInCart(false);
      }, 3000);
      return;
    }

    const cartData = {
      item: phone.brandName + " " + phone.modelName,
      image: phone.images.split("||")[0],
      quantity: parsedNum,
      price: phone.price,
    };

    setCart((prevCart) => {
      const updatedCart = [...prevCart, cartData];
      console.log("from context => ", updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });

    setQuantity((q) => {
      const newQuantity = (q += parsedNum);
      localStorage.setItem("quantity", JSON.stringify(newQuantity));
      return newQuantity;
    });
  };

  const removeFromCart = (phone) => {
    setCart(() => {
      const updatedCart = cart.filter((el) => el.item != phone.item);
      console.log("from context => ", updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
    setQuantity((q) => {
      const newQuantity = (q -= parseInt(phone.quantity));
      localStorage.setItem("quantity", JSON.stringify(newQuantity));
      return newQuantity;
    });
  };

  useEffect(() => {
    console.log(cart);
  }, [cart, quantity]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }

    const savedQuantity = JSON.parse(localStorage.getItem("quantity"));
    if (savedQuantity) {
      setQuantity(savedQuantity);
    }

    const getData = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/products`
      );
      console.log(response.data);
      setData(response.data);
    };
    getData();
  }, []);

  const state = {
    data,
    page,
    setPage,
    details: savedDetails || details,
    setDetails,
    saveCookie,
    addToCart,
    cart: savedCart || cart,
    removeFromCart,
    quantity: quantity,
    setQuantity,
    isInCart,
  };

  return (
    <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
  );
};

export default DataProvider;
