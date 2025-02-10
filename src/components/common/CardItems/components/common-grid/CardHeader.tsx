import { SwiperSlide } from "swiper/react";
import Score from "./Score";
import Arrow from "./Arrow";
import FileContainer from "@/components/common/FileContainer";
import Slider from "@/components/common/Slider";
import { FC, Fragment, ReactNode } from "react";

interface CardHeaderProps {
  children: ReactNode;
  score: string;
  href: string;
}

const CardHeader: FC<CardHeaderProps> = ({ children, score, href }) => {
  return (
    <Fragment>
      <FileContainer
        background="#393939"
        radius="md"
        size="md"
        label={<Score score={score} />}
        tag={<Arrow href={href} />}
        labelHeight="30px"
        labelWidth="100px"
        tagHeight="30px"
        width="310px"
        classNames={{
          base: "h-[202px] p-4 pt-[32px] group-hover:!bg-green hover:shadow-[0px_8px_24px_rgba(140,255,69,0.12)]",
          innerLabel: "!p-3 flex justify-center items-center",
          wrapperLabel: "group-hover:!bg-green",
          coverHollow: "group-hover:!text-green",
        }}
      >
        <Slider slidesPerView={1} className="w-full h-full rounded-[20px]" loop>
          <SwiperSlide className="bg-[#444444] w-full h-full text-center leading-[140px] text-white">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className="bg-[#444444] w-full h-full text-center leading-[140px] text-white">
            Slide 2
          </SwiperSlide>
          <SwiperSlide className="bg-[#444444] w-full h-full text-center leading-[140px] text-white">
            Slide 3
          </SwiperSlide>
          <SwiperSlide className="bg-[#444444] w-full h-full text-center leading-[140px] text-white">
            Slide 4
          </SwiperSlide>
        </Slider>
      </FileContainer>
      {children}
    </Fragment>
  );
};

export default CardHeader;
