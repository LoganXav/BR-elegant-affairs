import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import img1 from "../assets/ideas1.jpg";
import img2 from "../assets/ideas2.jpg";
import img3 from "../assets/ideas3.jpg";
import img4 from "../assets/ideas4.jpg";
import img5 from "../assets/ideas5.jpg";
import img6 from "../assets/ideas6.jpg";


export const Menu = ({ setMenuOpen }) => {
  const data = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
  ];

  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const transition = { duration: 0.5, ease: [0.9, 0.9, 0.9, 0.96] };
  return (
    <>
      <div className="menu-container">
        <motion.div
          ref={menuRef}
          className="menu"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={transition}
        >
          <div className="menu-inner">
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="grid">
              {data.map((idea) => (
                <img key={idea.img} src={idea.img} />
              ))}
            </div>
            <div className="address">
              <h4>CONTACT US:</h4>
              <p>+1 (305) 586-0497</p>
            </div>
            <div className="contact">
              <p>brelegantaffairs@gmail.com</p>
              <p className="tagline">Exceeding Expectations Every Event</p>
            </div>
            <div className="buttons">
              <span>
                <i className="ri-facebook-circle-fill"></i>
              </span>
              <span>
                <i className="ri-twitter-fill"></i>
              </span>
              <span>
                <i className="ri-instagram-fill"></i>
              </span>
              <span>
                <i className="ri-youtube-fill"></i>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
