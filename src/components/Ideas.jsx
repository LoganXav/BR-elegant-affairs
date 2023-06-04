import { Link } from "react-router-dom";
import { LazyImage } from "./LazyImage"
import img1 from "../assets/ideas1.jpg";
import img2 from "../assets/ideas2.jpg";
import img3 from "../assets/ideas3.jpg";
import img4 from "../assets/ideas4.jpg";
import img5 from "../assets/ideas5.jpg";
import img6 from "../assets/ideas6.jpg";
import img7 from "../assets/ideas7.jpg";
import img8 from "../assets/ideas8.jpg";
import { motion, AnimatePresence } from "framer-motion";

export const Ideas = () => {
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
    {
      id: 7,
      img: img7,
    },
    {
      id: 8,
      img: img8,
    },
  ];

  return (
    <div className="ideas--container">
      <div className="ideas">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.9],
            duration: 1,
          }}
          viewport={{ once: true }}
          className="header"
        >
          <h2>Ideas and tips</h2>
          <p>Browse our gallery for tips and inspiration</p>
        </motion.div>
        <AnimatePresence>
          <div className="grid">
            {data.map((idea, index) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0 + index * 0.25,
                  ease: [0.6, 0.01, 0.05, 0.9],
                  duration: 1,
                }}
                viewport={{ once: true }}
                className="img-container"
                key={idea.id}
              >
                <LazyImage img={idea.img} />
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
        <Link to="/gallery">
          <button>VIEW MORE INSPIRATION</button>
        </Link>
      </div>
    </div>
  );
};
