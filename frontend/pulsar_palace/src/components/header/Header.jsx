import "./Header.scss";
import logo from "../../assets/pp-logo-white.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

const Header = () => {
  const state = useContext(DataContext);

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
          <Link className="tab" to="/orders">
            Orders
          </Link>
          <Link className="tab" to="/about">
            About
          </Link>
        </div>
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
        <Link className="tab" to="/login">
          Login
        </Link>
        <Link className="tab" to="/signup">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Header;
