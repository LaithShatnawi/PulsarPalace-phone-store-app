import { useState } from "react";
import "./Login.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [loginClicked, setloginClicked] = useState(false);
  const [signupClicked, setsignupClicked] = useState(true);

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
          {!loginClicked && (
            <>
              <motion.div
                className="cover"
                variants={variants}
                animate={loginClicked ? "right" : "left"}
              >
                <motion.div className="title">Log In</motion.div>
                <motion.button
                  className="arrow"
                  onClick={() => {
                    setloginClicked(!loginClicked);
                    setsignupClicked(!signupClicked);
                  }}
                  variants={variants}
                  animate="btnLeft"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </motion.button>
              </motion.div>
              <motion.form
                className="form"
                variants={variants}
                animate="formRight"
              >
                <input type="text" placeholder="Username" required />
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                />
                <button className="log_sign_btn" type="submit">
                  Login
                </button>
              </motion.form>
            </>
          )}
          {!signupClicked && (
            <>
              <motion.div
                className="cover"
                variants={variants}
                initial="left"
                animate={loginClicked ? "right" : "left"}
              >
                <motion.div className="title">Sign Up</motion.div>
                <motion.button
                  className="arrow"
                  onClick={() => {
                    setsignupClicked(!signupClicked);
                    setloginClicked(!loginClicked);
                  }}
                  variants={variants}
                  animate="btnRight"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </motion.button>
              </motion.div>
              <motion.form
                className="form"
                variants={variants}
                animate="formLeft"
              >
                <input
                  type="text"
                  placeholder="Email"
                  autoComplete=""
                  required
                />
                <input
                  type="text"
                  placeholder="Username"
                  autoComplete="username"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                  required
                />
                <button className="log_sign_btn" type="submit">
                  Register
                </button>
              </motion.form>
            </>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Login;
