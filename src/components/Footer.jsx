import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer--container">
      <div className="footer">
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
      </div>
    </div>
  );
};
export default Footer;
