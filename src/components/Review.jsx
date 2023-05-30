import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export const Review = () => {
  const data = [
    {
      id: 1,
      text: "I love B & Rpppppppppppppppppppppppppppppppppppp",
      name: "Julia Roberts",
      location: "Miami",
    },
    {
      id: 2,
      text: "I really do love B & Rpppppppppppppppppppppppppppppppppppp",
      name: "Mila Kunis",
      location: "Jacksonville",
    },
    {
      id: 3,
      text: "Trust me, I really do love B & Rpppppppppppppppppppppppppppppppppppp",
      name: "Dua Lipa",
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
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
        >
          {data.map((review) => (
            <SwiperSlide key={review.id} className="swiper-slide">
              <div className="review">
                <p>{review.text}</p>
                <div className="about">
                  <h3> - {review.name}</h3>
                  <span> - {review.location}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
