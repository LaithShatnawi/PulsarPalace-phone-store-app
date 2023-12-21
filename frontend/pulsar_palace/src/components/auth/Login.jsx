import { useState } from "react";
import "./Login.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [clicked, setClicked] = useState(false);
  const variants = {
    right: {
      x: "350px",
      transition: { ease: "easeInOut", duration: 0.5 },
      "border-radius": "0 16px 16px 0",
    },
    left: {
      x: "0px",
      transition: { ease: "easeInOut", duration: 0.5 },
    },

    formLeft: {
      x: "-350px",
      transition: { ease: "easeInOut", duration: 0.5 },
      "z-index": -1,
    },
    formRight: {
      x: "0px",
      transition: { ease: "easeInOut", duration: 0.5 },
      "z-index": -1,
    },

    btnRight: {
      left: "-15px",
    },
    btnLeft: {
      right: "-15px",
    },
  };
  return (
    <>
      <div className="overlay_shade"></div>
      <div className="login_section">
        <motion.div className="login_box_container">
          {!clicked ? (
            <>
              <motion.div
                className="cover"
                variants={variants}
                initial="left"
                animate={clicked ? "right" : "left"}
              >
                <motion.div className="title">Log In</motion.div>
                <motion.button
                  className="arrow"
                  onClick={() => setClicked(!clicked)}
                  variants={variants}
                  animate="btnLeft"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </motion.button>
              </motion.div>
              <motion.div
                className="form"
                variants={variants}
                animate="formRight"
              >
                <div className="input_container">
                  <input type="text" placeholder="Username" required />
                </div>
                <div className="input_container">
                  <input type="text" placeholder="Password" required />
                </div>
                <button className="log_sign_btn" type="submit">
                  Login
                </button>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                className="cover"
                variants={variants}
                initial="left"
                animate={clicked ? "right" : "left"}
              >
                <motion.div className="title">Sign Up</motion.div>
                <motion.button
                  className="arrow"
                  onClick={() => setClicked(!clicked)}
                  variants={variants}
                  animate="btnRight"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </motion.button>
              </motion.div>
              <motion.div
                className="form"
                variants={variants}
                animate="formLeft"
              >
                <div className="input_container">
                  <input type="text" placeholder="Email" required />
                </div>
                <div className="input_container">
                  <input type="text" placeholder="Username" required />
                </div>
                <div className="input_container">
                  <input type="text" placeholder="passowrd" required />
                </div>
                <button className="log_sign_btn" type="submit">
                  Register
                </button>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Login;
