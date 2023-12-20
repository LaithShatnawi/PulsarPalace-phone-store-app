/* eslint-disable react/no-unescaped-entities */
import "./ScrollSection.scss";
import { motion } from "framer-motion";
import design from "../../../assets/design.jpg";
import connect from "../../../assets/5g.jpg";
import capture from "../../../assets/capture.jpg";
import performance from "../../../assets/performance.jpg";
import display from "../../../assets/display.avif";

const ScrollSection = () => {
  return (
    <div className="scroll_container">
      <div className="left_scroll_section">
        <div className="left_section_text">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Cutting-Edge Displays
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Immerse yourself in stunning visuals with our cutting-edge
            smartphone displays. Boasting vibrant colors and sharp contrasts,
            our phones feature the latest in display technology, ensuring an
            unparalleled viewing experience for your favorite content. Whether
            you're a movie enthusiast, a gaming aficionado, or a productivity
            pro, our smartphones deliver brilliance at your fingertips.
          </motion.p>
        </div>
        <div className="right_scroll_section">
          <motion.img
            src={display}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
      <div className="left_scroll_section">
        <div className="right_scroll_section">
          <motion.img
            src={performance}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
        <div className="left_section_text" id="right_text">
          <motion.h1
            id="h1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Powerful Performance
          </motion.h1>
          <motion.p
            id="h1"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Elevate your mobile experience with smartphones engineered for power
            and speed. Our devices come equipped with state-of-the-art
            processors, providing seamless multitasking and lightning-fast
            responsiveness. Whether you're running resource-intensive apps or
            breezing through everyday tasks, our smartphones empower you with
            the performance you need to stay ahead in the digital world.
          </motion.p>
        </div>
      </div>
      <div className="left_scroll_section">
        <div className="left_section_text">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Capture Every Moment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Unleash your inner photographer with our advanced camera technology.
            Our smartphones feature cutting-edge camera systems that capture
            every detail, from breathtaking landscapes to vibrant selfies. With
            innovative imaging capabilities, you can express your creativity and
            document life's moments in stunning clarity. Explore the world of
            mobile photography with our exceptional smartphone cameras.
          </motion.p>
        </div>
        <div className="right_scroll_section">
          <motion.img
            src={capture}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
      <div className="left_scroll_section">
        <div className="right_scroll_section">
          <motion.img
            src={connect}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
        <div className="left_section_text" id="right_text">
          <motion.h1
            id="h1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Intelligent Connectivity
          </motion.h1>
          <motion.p
            id="h1"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Stay connected in the smartest way possible with our intelligent
            connectivity features. From 5G capabilities for lightning-fast data
            speeds to advanced Bluetooth technology for seamless device
            integration, our smartphones keep you effortlessly connected to the
            world. Enjoy smooth communication, swift downloads, and a connected
            lifestyle that adapts to your needs.
          </motion.p>
        </div>
      </div>
      <div className="left_scroll_section">
        <div className="left_section_text">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Sleek Design, Premium Build
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Elevate your style with smartphones that marry form and function.
            Our devices boast sleek, modern designs crafted from premium
            materials, providing a luxurious feel and a stylish aesthetic. With
            attention to detail in every curve and contour, our smartphones not
            only perform exceptionally but also make a bold statement about your
            taste and sophistication. Experience technology in a design that
            complements your lifestyle.
          </motion.p>
        </div>
        <div className="right_scroll_section">
          <motion.img
            src={design}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
