import "./Footer.scss";
import Reviews from "./reviews/Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="review_section">
        <Reviews />
      </div>
      <div className="contact_section">
        <div className="footer_links">
          <div className="line">
            <div className="title">Links</div>
            <div className="links">
              <Link to="products">Products</Link>
              <Link to="about">About Us</Link>
            </div>
          </div>
          <div className="line">
            <div className="title">Office</div>
            <div className="links">
              <div>Rainbow Street, Amman, Jordan</div>
              <div>pulsarpalace@outlook.com</div>
              <div>+9876543211</div>
            </div>
          </div>
        </div>
        <div className="footer_socials">
          <div className="container">
            <FontAwesomeIcon
              className="icon"
              icon={faFacebook}
              style={{ color: "#000000" }}
            />
          </div>
          <div className="container">
            <FontAwesomeIcon
              className="icon"
              icon={faTwitter}
              style={{ color: "#000000" }}
            />
          </div>
          <div className="container">
            <FontAwesomeIcon
              className="icon"
              icon={faInstagram}
              style={{ color: "#000000" }}
            />
          </div>
        </div>
        <div className="footer_form">
          <div className="input_container">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className="input_container">
            <label htmlFor="">Subject</label>
            <input type="text" />
          </div>
          <div className="input_container">
            <label htmlFor="">Comment</label>
            <textarea name="" id=""></textarea>
          </div>
          <button>Submit</button>
        </div>
      </div>
      <div className="copyright">
        <div>Pulsar Palace, 2023-2024 &#169;</div>
      </div>
    </div>
  );
};

export default Footer;
