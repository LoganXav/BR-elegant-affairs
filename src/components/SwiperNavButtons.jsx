import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <div onClick={() => swiper.slidePrev()}></div>
      <div onClick={() => swiper.slideNext()}></div>
    </div>
  );
};