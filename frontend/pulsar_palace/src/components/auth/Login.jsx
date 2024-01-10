/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import "./Login.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/pp-logo-white.png";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const loginState = useContext(LoginContext);
  console.log(loginState.signError);

  const [loginClicked, setloginClicked] = useState(false);
  const [signupClicked, setsignupClicked] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPass, setConfirmedPass] = useState("");

  const confirmPassWord = (pass, confirmed) => {
    if (pass == confirmed) {
      return "none";
    } else {
      return "0 0 0 2px rgb(255, 99, 99) inset";
    }
  };

  const handlelogin = (e) => {
    e.preventDefault();
    loginState.handleLogin(username, password);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (password == confirmedPass) {
      loginState.handleSignup(email, username, password);
    }
  };

  const variants = {
    right: {
      x: "100%",
      transition: { ease: "easeInOut", duration: 0.5 },
      "border-radius": "0 16px 16px 0",
    },
    left: {
      x: "0px",
      transition: { ease: "easeInOut", duration: 0.5 },
      "border-radius": "16px 0 0 16px",
    },

    formLeft: {
      x: "-100%",
      transition: { ease: "easeInOut", duration: 0.5 },
      "z-index": -1,
    },
    formRight: {
      x: "0px",
      transition: { ease: "easeInOut", duration: 0.5 },
      "z-index": -1,
    },

    btnRight: {
      left: "-5%",
    },
    btnLeft: {
      right: "-5%",
    },
  };

  const variants2 = {
    right: {
      y: "150%",
      transition: { ease: "easeInOut", duration: 0.5 },
      "border-radius": "0 0 16px 16px",
    },
    left: {
      y: "0px",
      transition: { ease: "easeInOut", duration: 0.5 },
      "border-radius": "16px 16px 0 0",
    },

    formLeft: {
      y: "-67%",
      transition: { ease: "easeInOut", duration: 0.5 },
      "z-index": -1,
    },
    formRight: {
      y: "0px",
      transition: { ease: "easeInOut", duration: 0.5 },
      "z-index": -1,
    },

    btnRight: {
      left: "46%",
      top:"-5%"
    },
    btnLeft: {
      right: "46%",
      bottom:"-5%"
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <div className="overlay_shade"></div>
        <div className="login_section">
          <motion.div className="login_box_container">
            {!loginClicked && (
              <>
                <motion.div
                  className="cover"
                  variants={variants}
                  initial="right"
                  animate={loginClicked ? "right" : "left"}
                >
                  <img src={logo} alt="" />
                  <motion.div className="title">Log In</motion.div>
                  <div className="text">
                    <div>Welcome back!</div> Great to see you again. Let's dive
                    into your account.
                  </div>
                  <motion.button
                    className="arrow"
                    onClick={() => {
                      setloginClicked(true);
                      setsignupClicked(false);
                    }}
                    variants={variants}
                    initial="btnLeft"
                    animate={loginClicked ? "btnRight" : "btnLeft"}
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </motion.button>
                </motion.div>
                <motion.form
                  className="form"
                  variants={variants}
                  initial="formLeft"
                  animate={loginClicked ? "formLeft" : "formRight"}
                  onSubmit={handlelogin}
                >
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {loginState.signError && (
                    <div className="errorMsg">
                      Incorrect Username or Password
                    </div>
                  )}
                  <button className="log_sign_btn" type="submit">
                    Login
                  </button>
                  <div className="signup_text">
                    If you're new you can register{" "}
                    <span
                      onClick={() => {
                        setloginClicked(true);
                        setsignupClicked(false);
                      }}
                    >
                      Here.
                    </span>
                  </div>
                </motion.form>
              </>
            )}
            {!signupClicked && (
              <>
                <motion.div
                  className="cover"
                  variants={variants}
                  animate={signupClicked ? "left" : "right"}
                >
                  <img src={logo} alt="" />
                  <motion.div className="title">Sign Up</motion.div>
                  <div className="text">
                    <div>Welcome aboard!</div> Exciting adventures await. Let's
                    start by creating your new account.
                  </div>
                  <motion.button
                    className="arrow"
                    onClick={() => {
                      setsignupClicked(true);
                      setloginClicked(false);
                    }}
                    variants={variants}
                    initial="btnRight"
                    animate={loginClicked ? "btnRight" : "btnLeft"}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </motion.button>
                </motion.div>
                <motion.form
                  className="form"
                  variants={variants}
                  animate="formLeft"
                  onSubmit={handleSignup}
                >
                  <input
                    type="text"
                    placeholder="Email"
                    autoComplete=""
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    autoComplete="username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    autoComplete="new-password"
                    required
                    onChange={(e) => setConfirmedPass(e.target.value)}
                    style={{
                      "box-shadow": confirmPassWord(password, confirmedPass),
                    }}
                  />
                  <button className="log_sign_btn" type="submit">
                    Register
                  </button>
                </motion.form>
              </>
            )}
          </motion.div>
        </div>
        <div className="login_section_mobile">
          <motion.div className="login_box_container">
            {!loginClicked && (
              <>
                <motion.div
                  className="cover"
                  variants={variants2}
                  initial="right"
                  animate={loginClicked ? "right" : "left"}
                >
                  <div className="coco">
                    <img src={logo} alt="" />
                    <motion.div className="title">Log In</motion.div>
                  </div>
                  <div className="text">
                    <div>Welcome back!</div> Great to see you again. Let's dive
                    into your account.
                  </div>
                  <motion.button
                    className="arrow"
                    onClick={() => {
                      setloginClicked(true);
                      setsignupClicked(false);
                    }}
                    variants={variants2}
                    initial="btnLeft"
                    animate={loginClicked ? "btnRight" : "btnLeft"}
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </motion.button>
                </motion.div>
                <motion.form
                  className="form"
                  variants={variants2}
                  initial="formLeft"
                  animate={loginClicked ? "formLeft" : "formRight"}
                  onSubmit={handlelogin}
                >
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {loginState.signError && (
                    <div className="errorMsg">
                      Incorrect Username or Password
                    </div>
                  )}
                  <button className="log_sign_btn" type="submit">
                    Login
                  </button>
                  <div className="signup_text">
                    If you're new you can register{" "}
                    <span
                      onClick={() => {
                        setloginClicked(true);
                        setsignupClicked(false);
                      }}
                    >
                      Here.
                    </span>
                  </div>
                </motion.form>
              </>
            )}
            {!signupClicked && (
              <>
                <motion.div
                  className="cover"
                  variants={variants2}
                  animate={signupClicked ? "left" : "right"}
                >
                  <div className="coco">
                    <img src={logo} alt="" />
                    <motion.div className="title">Sign Up</motion.div>
                  </div>
                  <div className="text">
                    <div>Welcome aboard!</div> Exciting adventures await. Let's
                    start by creating your new account.
                  </div>
                  <motion.button
                    className="arrow"
                    onClick={() => {
                      setsignupClicked(true);
                      setloginClicked(false);
                    }}
                    variants={variants2}
                    initial="btnRight"
                    animate={loginClicked ? "btnRight" : "btnLeft"}
                  >
                    <FontAwesomeIcon icon={faChevronUp} />
                  </motion.button>
                </motion.div>
                <motion.form
                  className="form"
                  variants={variants2}
                  animate="formLeft"
                  onSubmit={handleSignup}
                >
                  <input
                    type="text"
                    placeholder="Email"
                    autoComplete=""
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    autoComplete="username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    autoComplete="new-password"
                    required
                    onChange={(e) => setConfirmedPass(e.target.value)}
                    style={{
                      "box-shadow": confirmPassWord(password, confirmedPass),
                    }}
                  />
                  <button className="log_sign_btn" type="submit" id="register">
                    Register
                  </button>
                </motion.form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Login;
