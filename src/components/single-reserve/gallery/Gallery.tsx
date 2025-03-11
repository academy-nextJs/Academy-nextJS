/* eslint-disable @next/next/no-img-element */
"use client";
import Slider from "@/components/common/Slider";
import { useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/types";

const Gallery = ({ pictures }: { pictures: string[] }) => {
  const swiperRef = useRef<null | Swiper>(null);
  const [active, setActive] = useState<number>(0);

  const Sidebar = () => {
    return (
      <div className="w-[calc(100%-1143px)] h-full grid grid-cols-2 grid-rows-8 gap-[21px]">
        {pictures.map((item, index) => (
          <img
            alt=""
            src={item}
            key={index}
            onClick={() => swiperRef.current?.slideTo(index)}
            className={`${
              index == active &&
              "shadow-[0px_8px_20px_rgba(140,255,69,0.16)] border-green border-2"
            } row-span-2 hover:border-2 cursor-pointer hover:border-green bg-gray 
              hover:shadow-[0px_8px_20px_rgba(140,255,69,0.16)] rounded-[32px] w-24 h-24`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full h-[444px] gap-[21px] flex">
      <Slider
        onSwiper={(swiper: Swiper) => (swiperRef.current = swiper)}
        onSlideChange={(ev) => {
          setActive(ev.activeIndex);
        }}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="mb-20 w-[1140px] max-w-[1140px] h-full bg-gray rounded-[40px] overflow-hidden"
      >
        {pictures.map((item, index) => (
          <SwiperSlide key={index}>
            <img className="w-full h-full" src={item} alt="" />
          </SwiperSlide>
        ))}
      </Slider>
      <Sidebar />
    </div>
  );
};

export default Gallery;
