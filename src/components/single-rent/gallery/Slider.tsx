import SliderHolder from "@/components/common/Slider";
import { Dispatch, FC, SetStateAction } from "react";
import { SwiperSlide } from "swiper/react";
import { GalleryWrapperProps } from ".";

interface SliderProps {
  setActive: Dispatch<SetStateAction<number>>;
}

const Slider: FC<Pick<GalleryWrapperProps, "photos"> & SliderProps> = ({
  photos,
  setActive,
}) => {
  return (
    <div className="max-md:col-span-full max-md:row-span-5 col-span-6 row-span-4 rounded-[32px] overflow-hidden">
      <SliderHolder
        slidesPerView={1}
        onSlideChange={(ev) => {
          setActive(ev.activeIndex);
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full h-full mb-20"
      >
        {photos?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="text-green bg-gray text-center leading-[368px]"
          >
            <img alt="" src={item} />
          </SwiperSlide>
        ))}
      </SliderHolder>
    </div>
  );
};

export default Slider;
