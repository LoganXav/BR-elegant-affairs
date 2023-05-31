import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer--container">
      <motion.div
       initial={{ opacity: 0, y: 100 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{
         ease: [0.6, 0.01, 0.05, 0.9],
         duration: 1,
       }}
       viewport={{ once: true }}
      className="footer">
        <img src={logo} />
        <div className="icons">
          <span><i className="ri-facebook-circle-fill"></i></span>
          <span><i className="ri-twitter-fill"></i></span>
          <span><i className="ri-instagram-fill"></i></span>
          <span><i className="ri-youtube-fill"></i></span>
        </div>
        <div className="footer-bottom">
          <p className="center">Exceeding Expectations Every Event</p>
          <span>©2023 Copyright B & R Elegant Affairs</span>
        </div>
      </motion.div>
    </div>
  );
};
export default Footer;
