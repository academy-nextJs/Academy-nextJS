"use client";
import { FC, ReactNode } from "react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { SwiperOptions } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./SwiperCustomize.css";

interface SliderProps {
  children: ReactNode;
  className: string;
}

const Slider: FC<Partial<SwiperOptions & SliderProps>> = (props) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, A11y]}
      pagination={{ clickable: true }}
      {...props}
    >
      {props.children}
    </Swiper>
  );
};

export default Slider;
