import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export const Menu = ({ setMenuOpen }) => {
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
              <img src="https://media.istockphoto.com/id/1464666987/photo/beautiful-emotional-woman-with-natural-make-up.jpg?b=1&s=170667a&w=0&k=20&c=3pBli3ApYNyyNc9MXWkXk3ByDOW-_7nnlL6RuhScEwo=" />
              <img src="https://media.istockphoto.com/id/1440458000/photo/young-girl-with-hands-near-skin-face.jpg?b=1&s=170667a&w=0&k=20&c=vXSG4-x3jbQEqD_l9nwpqdWjAMsmcJjHt6LFAQ2vIDc=" />
              <img src="https://media.istockphoto.com/id/1442495175/photo/beauty-portrait-and-natural-face-of-black-woman-with-healthy-freckle-skin-texture-touch.jpg?b=1&s=170667a&w=0&k=20&c=ROYbN_x6cYubTzSW3EzzaL_NCFjMzoXR2XXch9pXUCo=" />
              <img src="https://media.istockphoto.com/id/1377343276/photo/pretty-young-afro-woman.jpg?b=1&s=170667a&w=0&k=20&c=Z-UXLUcC8MfiHr9OMzH79s50pXovz_WZPW-cbiobFnM=" />
              <img src="https://media.istockphoto.com/id/1409084667/photo/brown-hair-beauty-woman-brunette-model-with-shiny-straight-long-hairstyle-hair-care-spa-and.jpg?b=1&s=170667a&w=0&k=20&c=9Pwz2Uwz2WcgD_bfBBeLI6Eef0GS9aqRCrPyqR0j-G4=" />
              <img src="https://media.istockphoto.com/id/1371802936/photo/beautiful-emotional-woman-with-perfect-make-up.jpg?b=1&s=170667a&w=0&k=20&c=Sdiq2RAY1MmqkzH_EEmGI1BzU7k-vKvN7zfep9CEUok=" />
            </div>
            <div className="address">
              <h3>MIAMI</h3>
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
