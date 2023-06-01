import logo from "../assets/logo.png";
import { useState } from "react";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar--container">
      <div className="navbar">
        <Link to="/" className="link">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: [0.6, 0.01, 0.05, 0.9],
              duration: 1,
            }}
            viewport={{ once: true }}
            className="logo"
          >
            <img src={logo} />
          </motion.div>
        </Link>
        <div className="menu">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.5,
              ease: [0.6, 0.01, 0.05, 0.9],
              duration: 1,
            }}
            viewport={{ once: true }}
            className="contact"
          >
            <i className="ri-phone-line"></i>
            <div className="number">
              <h3>T: +1 (305) 586-0497</h3>
              <h3>E: brelegantaffairs@gmail.com</h3>
            </div>
          </motion.div>
          <div onClick={() => setMenuOpen(true)} className="menu--icon">
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </div>
      {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
    </div>
  );
};

export default Navbar;
