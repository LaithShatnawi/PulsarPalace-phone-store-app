import "./Header.scss";
import logo from "../../assets/pp-logo-white.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../context/DataContext";
import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
import { When } from "react-if";

const Header = () => {
  const state = useContext(DataContext);
  const loginState = useContext(LoginContext);

  return (
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
  );
};

export default Header;
