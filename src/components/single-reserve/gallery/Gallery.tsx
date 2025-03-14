"use client";
import Slider from "@/components/common/Slider";
import { useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/types";

const Gallery = () => {
  const swiperRef = useRef<null | Swiper>(null);
  const [active, setActive] = useState<number>(0);

  // wait for api
  const sliders = [
    { name: "Slide 1" },
    { name: "Slide 2" },
    { name: "Slide 3" },
    { name: "Slide 4" },
    { name: "Slide 5" },
    { name: "Slide 6" },
    { name: "Slide 7" },
    { name: "Slide 8" },
  ];

  return (
    <div className="w-full h-[444px] gap-[21px] flex">
      <div className="w-[1140px] max-w-[1140px] h-full bg-gray rounded-[40px]">
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
          className="w-full h-full mb-20"
        >
          {sliders.map((item, index) => (
            <SwiperSlide key={index} className="text-center leading-[444px]">
              {item.name}
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <div className="w-[calc(100%-1143px)] h-full grid grid-cols-2 grid-rows-8 gap-[21px]">
        {sliders.map((item, index) => (
          <div
            key={index}
            onClick={() => swiperRef.current?.slideTo(index)}
            className={`${
              index == active &&
              "shadow-[0px_8px_20px_rgba(140,255,69,0.16)] border-green border-2"
            } row-span-2 hover:border-2 cursor-pointer hover:border-green bg-gray 
              hover:shadow-[0px_8px_20px_rgba(140,255,69,0.16)] rounded-[32px]`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
