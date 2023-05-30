import { Link } from "react-router-dom";
import { Card } from "./Card";

export const Portfolio = () => {
  return (
    <div className="portfolio--container">
      <div className="portfolio">
        <div className="top">
          <h2>PORTFOLIO</h2>
          <h4>Our amazing work</h4>
        </div>
        <div className="grid">
          <Card />
          <Card />
          <Card />
        </div>
        <Link to="/gallery">
          <button>VIEW MORE EVENTS</button>
        </Link>
      </div>
    </div>
  );
};
