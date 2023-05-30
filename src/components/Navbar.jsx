import logo from "../assets/logo.png";
import { useState } from "react";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar--container">
      <div className="navbar">
        <Link to="/" className="link">
          <div className="logo">
            <img src={logo} />
          </div>
        </Link>
        <div className="menu">
          {/* <div className="number">Number</div> */}
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
