import { motion } from "framer-motion";

export const WeddingVendors = () => {
  return (
    <div className="vendors--container">
      <div className="left">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.25,
            ease: [0.6, 0.01, 0.05, 0.9],
            duration: 1,
          }}
          viewport={{ once: true }}
          className="left--inner"
        >
          <h2>Wedding Vendors</h2>
          <p>
            We offer a comprehensive suite of services designed to bring your
            vision to life. From exquisite photography and catering to
            captivating entertainment options, we have everything you need to
            create a truly unforgettable event.{" "}
          </p>
          <div className="services">
            <div className="column">
              <h4>PHOTOGRAPHY</h4>
              <h4>CATERING</h4>
              <h4>DECORATION</h4>
              <h4>BUFFET DESIGNING</h4>
            </div>
            <hr />
            <div className="column">
              <h4>EVENT BRANDING</h4>
              <h4>BACKDROP</h4>
              <h4>TABLESCAPES</h4>
              <h4>FLORAL ARRANGEMENTS</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
