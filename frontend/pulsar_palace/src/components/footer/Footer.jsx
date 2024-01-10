import "./Footer.scss";
import Reviews from "./reviews/Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const show = !location.pathname.includes("login");

  return (
    <>
      {show && (
        <div className="footer_container">
          <div className="review_section">
            <Reviews />
          </div>
          <div className="contact_section">
            <div className="footer_links">
              <div className="line" id="line1">
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
              <div className="line">
                <div className="title">Support</div>
                <div className="links">
                  <div>Support Request</div>
                  <div>Contact</div>
                </div>
              </div>
            </div>
            <div className="footer_socials">
              <div className="input_container">
                <div className="subscribe">Subscribe</div>
                <form
                  className="textttt"
                  id="myForm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    document.getElementById("myForm").reset();
                  }}
                >
                  <input type="text" placeholder="Email" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
              <div className="icons_cont">
                <FontAwesomeIcon className="icon social" icon={faFacebook} />
                <FontAwesomeIcon className="icon social" icon={faTwitter} />
                <FontAwesomeIcon className="icon social" icon={faInstagram} />
              </div>
            </div>
            {/* <div className="footer_form">
              <div className="input_container">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="input_container">
                <textarea name="" id="" placeholder="Comment"></textarea>
              </div>
            </div> */}
          </div>
          <div className="copyright">
            <div>Pulsar Palace, 2023-2024 &#169;</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
