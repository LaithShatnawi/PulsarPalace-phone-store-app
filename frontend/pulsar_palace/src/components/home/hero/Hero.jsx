import "./Hero.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import phone from "../../../assets/phone.png";
import iphone from "../../../assets/iphone11.png";

const Hero = () => {
  const animate4 = {
    hidden: { opacity: 0, x: "-3.125rem", rotate: "-10deg" },
    show: {
      opacity: 100,
      x: "0rem",
      rotate: 0,
      transition: { duration: 1, delay: 1.5 },
    },
  };

  const animate2 = {
    hidden: { opacity: 0, y: "2.125rem" },
    show: {
      opacity: 100,
      y: "0rem",
      transition: { duration: 1, delay: 0.5 },
    },
  };

  const header = {
    hidden: { opacity: 0 },
    show: {
      opacity: 100,
      transition: { duration: 1 },
    },
  };

  const text = {
    hidden: { opacity: 0 },
    show: {
      opacity: 100,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  const paragraph = {
    hidden: { opacity: 0, x: -200 },
    show: {
      opacity: 100,
      x: 0,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  const button = {
    hidden: { opacity: 0 },
    show: {
      opacity: 100,
      transition: { duration: 1, delay: 1.5 },
    },
  };

  return (
    <>
      <motion.div className="hero_container">
        <div className="hero_text">
          <motion.h1>
            <motion.span
              className="pulsar"
              variants={header}
              initial="hidden"
              animate="show"
            >
              Pulsar Palace
            </motion.span>
            <motion.span
              className="highlight"
              variants={text}
              initial="hidden"
              animate="show"
            >
              -Elevate Your Tech Game, Amplify Your Lifestyle.
            </motion.span>
          </motion.h1>
          <motion.p variants={paragraph} initial="hidden" animate="show">
            Welcome to Pulsar Palace – where tech meets style. Elevate your
            lifestyle with our curated collection of cutting-edge smartphones.
            From top-tier performance to sleek aesthetics, discover innovation
            that seamlessly integrates into your daily life. Redefine your
            connectivity and communication at Pulsar Palace, your destination
            for extraordinary smart living.
          </motion.p>
          <Link to="/products" className="explore_button_container">
            <motion.span
              className="explore_button"
              variants={button}
              initial="hidden"
              animate="show"
            >
              Explore...
            </motion.span>
          </Link>
        </div>
        <div className="hero_banner">
          <motion.img
            className="display_phone samsung"
            src={phone}
            alt="phone"
            variants={animate2}
            initial="hidden"
            animate="show"
          />
          <motion.img
            className="display_phone iphone"
            src={iphone}
            alt="phone"
            variants={animate4}
            initial="hidden"
            animate="show"
          />
        </div>
        <div className="disapear">
          <motion.h1>
            <motion.span
              className="pulsar"
              variants={header}
              initial="hidden"
              animate="show"
            >
              Pulsar Palace
            </motion.span>
            <motion.span
              className="highlight"
              variants={text}
              initial="hidden"
              animate="show"
            >
              -Elevate Your Tech Game, Amplify Your Lifestyle.
            </motion.span>
          </motion.h1>
          <Link to="/products" className="explore_button_container">
            <motion.span
              className="explore_button"
              variants={button}
              initial="hidden"
              animate="show"
            >
              Explore...
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
