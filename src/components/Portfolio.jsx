import { Link } from "react-router-dom";
import { Card } from "./Card";
import img1 from "../assets/portfolio-2.jpg";
import img2 from "../assets/portfolio-1.jpg";
import img3 from "../assets/portfolio-3.jpg";
import { motion } from "framer-motion";

export const Portfolio = () => {
  const data = [
    {
      id: 1,
      name: "Nicole and Micheal",
      img: img3,
      location: "The Moore Building, Miami",
      year: "2019",
    },
    {
      id: 2,
      name: "Alberta",
      img: img1,
      location: "Collins Avenue, Miami",
      year: "2021",
    },
    {
      id: 3,
      name: "George and Abby",
      img: img2,
      location: "South Miami, Miami",
      year: "2022",
    },
  ];
  return (
    <div className="portfolio--container">
      <div className="portfolio">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.9],
            duration: 1,
          }}
          viewport={{ once: true }}
          className="top"
        >
          <h2>PORTFOLIO</h2>
          <h4>OUR AMAZING WORK</h4>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.9],
            duration: 1,
          }}
          viewport={{ once: true }}
          className="grid"
        >
          {data.map((event) => (
            <Card event={event} key={event.id} />
          ))}
        </motion.div>
        <Link to="/gallery">
          <button>VIEW MORE EVENTS</button>
        </Link>
      </div>
    </div>
  );
};
