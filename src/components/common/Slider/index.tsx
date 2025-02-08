import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./SwiperCustomize.css";
import React, { FC } from "react";

interface SliderProps {
  loop: boolean;
  className: string;
  slidesPerView: number;
  children: React.ReactNode;
}

const Slider: FC<SliderProps> = (props) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, A11y]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      {...props}
    >
      {props.children}
    </Swiper>
  );
};

export default Slider;
