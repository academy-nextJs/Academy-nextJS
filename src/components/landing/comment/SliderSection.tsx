"use client";
import { SwiperSlide } from "swiper/react";
import Card from "./card";
import Slider from "@/components/common/Slider";

const SliderSection = () => {
  return (
    <div className="w-full max-w-[1376px] mt-12">
      <Slider
        slidesPerView={2}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full h-full rounded-[20px] mb-12"
        loop
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          780: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Slider>
    </div>
  );
};

export default SliderSection;
