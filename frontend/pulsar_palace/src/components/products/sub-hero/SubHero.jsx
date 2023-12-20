import "./SubHero.scss";
import { motion, useAnimation } from "framer-motion";
import asset1 from "../../../assets/Asset1.png";
import asset2 from "../../../assets/Asset2.png";
import asset4 from "../../../assets/Asset4.png";
import asset5 from "../../../assets/Asset5.png";
import asset6 from "../../../assets/Asset6.png";
import asset7 from "../../../assets/Asset7.png";
import asset8 from "../../../assets/Asset8.png";
import asset9 from "../../../assets/Asset9.png";
import { useEffect } from "react";

const SubHero = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();

  const animate = {
    y: ["0rem", "30rem", "-30rem", "0rem"],
    transition: { duration: 20, repeat: Infinity, repeatType: "loop" },
  };

  const animate2 = {
    y: ["0rem", "-30rem", "30rem", "0rem"],
    transition: { duration: 20, repeat: Infinity, repeatType: "loop" },
  };

  useEffect(() => {
    controls.start(animate);
    controls2.start(animate2);
  }, []);

  return (
    <>
      <div className="glass_container">
        <div className="subhero_text">
          <h1>Unlock Your Mobile Potential</h1>
          <p>
            Explore our curated selection of smartphones, blending style with
            cutting-edge technology. Find the ideal device for your connected
            lifestyle.
          </p>
        </div>
      </div>
      <div className="subhero_container">
        <motion.img
          className="animated"
          src={asset2}
          alt=""
          animate={controls}
        />
        <motion.img
          className="animated"
          src={asset5}
          alt=""
          animate={controls2}
        />
        <motion.img
          className="animated"
          src={asset6}
          alt=""
          animate={controls}
        />
        <motion.img
          className="animated"
          src={asset4}
          alt=""
          animate={controls2}
        />
        <motion.img
          className="animated"
          src={asset7}
          alt=""
          animate={controls}
        />
        <motion.img
          className="animated"
          src={asset8}
          alt=""
          animate={controls2}
        />
        <motion.img
          className="animated"
          src={asset9}
          alt=""
          animate={controls}
        />
        <motion.img
          className="animated"
          src={asset1}
          alt=""
          animate={controls2}
        />
        <motion.img
          className="animated"
          src={asset4}
          alt=""
          animate={controls}
        />
        <motion.img
          className="animated"
          src={asset6}
          alt=""
          animate={controls2}
        />
        <motion.img
          className="animated"
          src={asset7}
          alt=""
          animate={controls}
        />
        <motion.img
          className="animated"
          src={asset2}
          alt=""
          animate={controls2}
        />
        <motion.img
          className="animated"
          src={asset1}
          alt=""
          animate={controls}
        />
        <motion.img
          className="animated"
          src={asset1}
          alt=""
          animate={controls2}
        />
        <motion.img
          className="animated"
          src={asset2}
          alt=""
          animate={controls}
        />
        <motion.img
          className="animated"
          src={asset7}
          alt=""
          animate={controls2}
        />
      </div>
    </>
  );
};
export default SubHero;
