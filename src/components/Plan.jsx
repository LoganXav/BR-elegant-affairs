import betty from "../assets/betty-crop.png";
import { motion } from "framer-motion";
import { LazyImage } from "./LazyImage"

export const Plan = () => {
  return (
    <div className="plan--container">
      <div className="plan">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.9],
            duration: 1,
          }}
          viewport={{ once: true }}
          className="image"
        >
          <LazyImage img={betty} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.9],
            duration: 1,
          }}
          viewport={{ once: true }}
          className="plan--details"
        >
          <h2 className="header">B & R Elegant Affairs</h2>
          <p> Miami's premier event and wedding planner</p>
          <p>
            Our dedicated team of experienced planners is committed to bringing
            your unique vision to life with impeccable attention to detail. From
            elegant centerpieces to immersive theme events, we transform
            ordinary spaces into extraordinary settings that reflect your
            personal style. Whether you're planning an intimate gathering or a
            grand celebration, trust B & R Elegant Affairs to curate an
            unforgettable event that exceeds your expectations.
          </p>
          <p>
            Let us handle the planning while you relax and enjoy every moment of
            your special day. Contact us today and let's embark on a journey of
            creating magical memories together.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
