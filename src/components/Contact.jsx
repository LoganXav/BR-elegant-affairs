import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="contact--container">
      <motion.div 
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       transition={{
         delay: 0.25,
         ease: [0.6, 0.01, 0.05, 0.9],
         duration: 1,
       }}
       viewport={{ once: true }}
      className="contact">
        <h2>Find us, Book us and stay a spell</h2>
        <div className="details">
          <div className="info">
            <h4>INFORMATION</h4>
            <div className="address">
                <p>Miami</p>
                <p>+1 (305) 586-0497</p>
                <p>brelegantaffairs@gmail.com</p>
            </div>
          </div>
          <hr />
          <div className="contact-us">
            <h4>CONTACT US</h4>
            <h3>+1 (305) 586-0497</h3>
            <p>Miami</p>
          </div>
          <hr />
          <div className="connect">
            <h4>CONNECT WITH US</h4>
            <div className="address">
                <p>E: periclesbebe@gmail.com</p>
                <p>T: +1 (305) 586-0497</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
