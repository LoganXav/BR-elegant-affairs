import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const WhoWeAre = () => {
  return (
    <div className="about--container">
      <div className="about">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: [0.6, 0.01, 0.05, 0.9],
            duration: 1,
          }}
          viewport={{ once: true }}
          className="about--details"
        >
          <h4>EVENT PLANNING AND DECOR</h4>
          <p>
            The #1 ranked,{" "}
            <Link className="link" to="/gallery">
              Helped over 1,000 clients
            </Link>{" "}
            around the country and we look forward to supporting you along your
            event planning journey.
          </p>
        </motion.div>
        <div className="about--icons">
          <div className="about--icons-left">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              transition={{
                delay: 0.25,
                ease: [0.6, 0.01, 0.05, 0.9],
                duration: 1,
              }}
              viewport={{ once: true }}
              className="about--service"
            >
              <i className="ri-file-list-line"></i>
              <div className="text">
                <h3 className="header">Checklist</h3>
                <p className="info">
                  The ultimate wedding checklist to make sure everything gets
                  done.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                ease: [0.6, 0.01, 0.05, 0.9],
                duration: 1,
              }}
              viewport={{ once: true }}
              className="about--service"
            >
              <i className="ri-group-line"></i>
              <div className="text">
                <h3 className="header">Guest List</h3>
                <p className="info">
                  Seamlessly create and manage lists and RSVPs for all your
                  events.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.75,
                ease: [0.6, 0.01, 0.05, 0.9],
                duration: 1,
              }}
              viewport={{ once: true }}
              className="about--service"
            >
              <i className="ri-calculator-line"></i>
              <div className="text">
                <h3 className="header">Budget</h3>
                <p className="info">
                  Let us run the numbers and keep your spending on track.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="about--icons-right">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 1,
                ease: [0.6, 0.01, 0.05, 0.9],
                duration: 1,
              }}
              viewport={{ once: true }}
              className="about--service"
            >
              <i className="ri-bar-chart-2-line"></i>
              <div className="text">
                <h3 className="header">Seating Chart</h3>
                <p className="info">
                  Drag and drop from your list to assign each guest a seat.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 1.25,
                ease: [0.6, 0.01, 0.05, 0.9],
                duration: 1,
              }}
              viewport={{ once: true }}
              className="about--service"
            >
              <i className="ri-git-repository-line"></i>
              <div className="text">
                <h3 className="header">Vendor Management</h3>
                <p className="info">
                  Quickly find, manage and message your favourite vendors.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.5,
                ease: [0.6, 0.01, 0.05, 0.9],
                duration: 1,
              }}
              viewport={{ once: true }}
              className="about--service"
            >
              <i className="ri-timer-line"></i>
              <div className="text">
                <h3 className="header">Event Timeline</h3>
                <p className="info">
                  Create a detailed timeline, ensuring that every aspect runs
                  seamlessly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
