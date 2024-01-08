/* eslint-disable react/no-unescaped-entities */
import "./About.scss";
import laith from "../../assets/laith.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about_body">
      <div className="header">
        <div className="about_title">About</div>
        <div className="title">Pulsar Palace</div>
      </div>
      <div className="text_containerrr">
        <div className="paragraph">
          Welcome to Pulsar Palace – your celestial emporium for the most
          enchanting and pulsating smartphones in the digital galaxy! Step into
          a realm where technology meets majesty, and each smartphone is a
          shining star in the vast cosmos of innovation.
        </div>
        <div className="paragraph">
          At Pulsar Palace, we've curated a stellar collection of phones that
          transcend the ordinary, featuring designs inspired by the cosmic
          wonders themselves. Our website is a celestial observatory where you
          can explore the constellations of cutting-edge features, ensuring you
          find a smartphone that aligns perfectly with your cosmic desires.
        </div>
        <div className="paragraph">
          Embark on a cosmic journey through our user-friendly interface,
          navigating through the galaxies of smartphones that boast features
          such as interstellar connectivity, pulsating holographic displays, and
          celestial cameras that capture moments with otherworldly precision.
        </div>
        <div className="paragraph">
          Pulsar Palace isn't just a store; it's a gateway to a universe of
          possibilities. Immerse yourself in the captivating world of our
          exclusive Pulsar Points program, where every purchase propels you
          closer to the astral realm of exclusive discounts, cosmic accessories,
          and limited-edition releases.
        </div>
        <div className="paragraph">
          Indulge in the stellar shopping experience at PulsarPalace.com, where
          the fusion of technology and elegance creates a celestial symphony in
          the palm of your hand. Your journey to the stars begins here – at
          Pulsar Palace, where the galaxy is your oyster, and each phone is a
          pulsating gem waiting to be discovered!
        </div>
      </div>
      <div className="createdBy_section">
        <h1>Created By</h1>
        <div className="card_containerrrr">
          <img src={laith} alt="" />
          <div className="topHover">
            <div className="name">
              <h3>Laith Shatnawi</h3>
              <div>Full Stack Developer</div>
            </div>
            <div className="socials">
              <a
                href="https://www.facebook.com/laithferas.shatnawi"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.linkedin.com/in/laith-shatnawi-556630146/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/LaithShatnawi"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
