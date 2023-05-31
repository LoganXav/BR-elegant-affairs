import { Link } from "react-router-dom";
import { Card } from "./Card";

export const Portfolio = () => {
  const data = [
    {
      id: 1,
      name: "Nicole and Micheal",
      img: "https://demo2wpopal.b-cdn.net/dreama/wp-content/uploads/2019/02/bn1.jpg",
      location: "The Moore Building, Miami",
      year: "2019",
    },
    {
      id: 2,
      name: "Alberta",
      img: "https://demo2wpopal.b-cdn.net/dreama/wp-content/uploads/2019/02/bn1.jpg",
      location: "Collins Avenue, Miami",
      year: "2021",
    },
    {
      id: 3,
      name: "George and Abby",
      img: "https://demo2wpopal.b-cdn.net/dreama/wp-content/uploads/2019/02/bn1.jpg",
      location: "South Miami, Miami",
      year: "2022",
    },
  ];
  return (
    <div className="portfolio--container">
      <div className="portfolio">
        <div className="top">
          <h2>PORTFOLIO</h2>
          <h4>OUR AMAZING WORK</h4>
        </div>
        <div className="grid">
          {data.map((event) => (
            <Card event={event} />
          ))}
        </div>
        <Link to="/gallery">
          <button>VIEW MORE EVENTS</button>
        </Link>
      </div>
    </div>
  );
};
