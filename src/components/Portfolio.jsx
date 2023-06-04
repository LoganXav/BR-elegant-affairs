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
      name: "Richard and Junide",
      img: img3,
      location: "Miami",
      year: "2023",
    },
    {
      id: 2,
      name: "Natasha",
      img: img1,
      location: "Miami",
      year: "2021",
    },
    {
      id: 3,
      name: "Demetri and Katia",
      img: img2,
      location: "Miami",
      year: "2018",
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
