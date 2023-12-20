/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Card.scss";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";

const Card = ({ phone }) => {
  const data = useContext(DataContext);
  return (
    <Link to="/product/details" onClick={() => data.saveCookie(phone)}>
      <div className="card_container">
        <div className="img_container">
          <img src={phone?.images?.split("||")[0]} alt="" />
        </div>
        <div className="brand">{phone.brandName}</div>
        <div className="model">{phone.modelName}</div>
        <div className="desc_and_price">
          <div>
            {phone.displayDetails.features.map((feature, idx) => {
              return <span key={idx}>{feature}, </span>;
            })}
          </div>
          <div className="price">{phone.price}</div>
        </div>
        <p></p>
      </div>
    </Link>
  );
};

export default Card;
