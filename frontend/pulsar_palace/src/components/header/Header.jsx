import "./Header.scss";
import logo from "../../assets/pp-logo-white.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../context/DataContext";
import { LoginContext } from "../context/LoginContext";
import { useContext, useState } from "react";
import { When } from "react-if";

const Header = () => {
  const state = useContext(DataContext);
  const loginState = useContext(LoginContext);

  const [showHam, setShowHam] = useState(false);

  return (
    <>
      <div className="nav_container">
        <div className="main_tabs">
          <Link to="/">
            <img className="logo_img" src={logo} alt="logo" />
          </Link>
          <div className="tabs_container">
            <Link className="tab" to="/">
              Home
            </Link>
            <Link className="tab" to="/products">
              Products
            </Link>
            <When condition={loginState.loggedIn}>
              <Link className="tab" to="/orders">
                Orders
              </Link>
            </When>
            <Link className="tab" to="/about">
              About
            </Link>
          </div>
        </div>
        <div className="secondary_tabs">
          <When condition={loginState.loggedIn}>
            <Link className="tab" to="/cart" id="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              {state.quantity != 0 && (
                <div className="num_of_items">
                  <span>{state.quantity}</span>
                </div>
              )}
            </Link>
            <Link className="tab" onClick={loginState.handleLogout}>
              Signout
            </Link>
          </When>
          <When condition={!loginState.loggedIn}>
            <Link className="tab" to="/login">
              Login / Register
            </Link>
          </When>
        </div>
      </div>
      <div className="ompalumpa">
        <div className="hamburger_nav">
          <div className="main_tabs">
            <Link to="/">
              <img className="logo_img" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="secondary_tabs">
            <Link className="tab" to="/cart" id="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              {state.quantity != 0 && (
                <div className="num_of_items">
                  <span>{state.quantity}</span>
                </div>
              )}
            </Link>
            <Link
              className="tab"
              id="ham"
              onClick={() => {
                setShowHam(!showHam);
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </Link>
          </div>
        </div>
        {showHam && (
          <div className="ham_list">
            <div className="tabs_container">
              <Link
                className="tab"
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    setShowHam(false);
                  }, 100);
                }}
              >
                Home
              </Link>
              <Link
                className="tab"
                to="/products"
                onClick={() => {
                  setTimeout(() => {
                    setShowHam(false);
                  }, 100);
                }}
              >
                Products
              </Link>
              <When condition={loginState.loggedIn}>
                <Link
                  className="tab"
                  to="/orders"
                  onClick={() => {
                    setTimeout(() => {
                      setShowHam(false);
                    }, 100);
                  }}
                >
                  Orders
                </Link>
              </When>
              <Link
                className="tab"
                to="/about"
                onClick={() => {
                  setTimeout(() => {
                    setShowHam(false);
                  }, 100);
                }}
              >
                About
              </Link>
            </div>
            <When condition={loginState.loggedIn}>
              <Link
                className="tab"
                onClick={() => {
                  setTimeout(() => {
                    loginState.handleLogout();
                    setShowHam(false);
                  }, 100);
                }}
              >
                Signout
              </Link>
            </When>
            <When condition={!loginState.loggedIn}>
              <Link
                className="tab"
                to="/login"
                onClick={() => {
                  setTimeout(() => {
                    setShowHam(false);
                  }, 100);
                }}
              >
                Login / Register
              </Link>
            </When>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
