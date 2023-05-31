import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

export const Review = () => {
  const data = [
    {
      id: 1,
      text: "B & R Elegant Affairs turned my daughter's birthday party into a whimsical wonderland! The theme they created was beyond our imagination, and the attention to detail was extraordinary. The team was professional, friendly, and attentive throughout the planning process. The children were captivated by the enchanting atmosphere, and the parents were equally impressed. Thank you for making our daughter's birthday celebration truly magical!",
      name: "Lisa",
      location: "Miami",
    },
    {
      id: 2,
      text: "B & R Elegant Affairs truly exceeded our expectations! From the moment we started planning our wedding, their team was attentive, organized, and full of creative ideas. The attention to detail was impeccable, and they flawlessly executed every aspect of our big day. Our guests were blown away by the stunning decor and seamless coordination. We couldn't have asked for a better team to bring our dream wedding to life!",
      name: "Sarah and Jonathan",
      location: "Jacksonville",
    },
    {
      id: 3,
      text: "B & R Elegant Affairs went above and beyond to make our corporate event a huge success. From the initial planning stages to the day of the event, their attention to detail and professionalism were exceptional. The venue was transformed into a sophisticated and elegant space that perfectly reflected our brand. The team flawlessly managed the logistics, ensuring a seamless experience for all attendees. We received numerous compliments from our guests, and we can't recommend B & R Elegant Affairs enough!",
      name: "David",
      location: "Jacksonville",
    },
  ];

  return (
    <div className="review--container">
      <div className="review-inner">
        <h4 className="header">READ REVIEWS FROM CLIENTS LIKE YOU</h4>
        <Swiper
          className="swiper"
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
        >
          {data.map((review) => (
            <SwiperSlide key={review.id} className="swiper-slide">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.25,
                  ease: [0.6, 0.01, 0.05, 0.9],
                  duration: 1,
                }}
                viewport={{ once: true }}
                className="review"
              >
                <p>{review.text}</p>
                <div className="about">
                  <h3> - {review.name}</h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
