/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useEffect, useState } from "react";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import base64 from "base-64";
import { jwtDecode } from "jwt-decode";

export const LoginContext = React.createContext();
const LoginProvider = (props) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [signError, setSignError] = useState(false);

  console.log("status: ", loggedIn);
  console.log(user);

  const savedUser = cookie.load("user");

  const handleLogin = async (username, password) => {
    const userData = { username, password };
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/signin`,
      userData,
      {
        headers: {
          Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
        },
      }
    );

    if (response.data) {
      try {
        validateToken(response.data);
        console.log(response.data);
        navigate("/");
      } catch (e) {
        setLoginState(loggedIn, token, user, e);
        console.error(e);
      }
    }
  };

  const handleSignup = async (email, username, password) => {
    const userData = { email, username, password };

    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/signup`,
      userData
    );

    if (response.data) {
      try {
        validateToken(response.data);
        console.log(response.data);
        navigate("/");
      } catch (e) {
        setLoginState(loggedIn, token, user, e);
        console.error(e);
      }
    }
  };

  const handleLogout = () => {
    setLoginState(false, null, {});
    navigate("/");
  };

  const validateToken = (token) => {
    try {
      let validUser = jwtDecode(token);
      setLoginState(true, token, validUser);
    } catch (e) {
      setLoginState(false, null, {}, e);
      console.log("Token Validation Error", e);
    }
  };

  const setLoginState = (loggedIn, token, user, error) => {
    cookie.save("auth", token);
    cookie.save("user", user);
    setLoggedIn(loggedIn);
    setToken(token);
    setUser(user);
    setError(error || null);
  };

  const state = {
    loggedIn,
    token: token,
    user: savedUser || user,
    error,
    handleLogin,
    handleSignup,
    handleLogout,
    signError,
  };

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load("auth");
    const token = qs.get("token") || cookieToken || null;
    validateToken(token);
  }, []);

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
