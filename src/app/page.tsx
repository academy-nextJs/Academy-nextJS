import AboutUs from "@/components/landing/about";
import BuyProperty from "@/components/landing/buy-property";
import Comment from "@/components/landing/comment";
import CircleShadow from "@/components/landing/common/CircleShadow";
import Holder from "@/components/landing/common/Holder";
import Hero from "@/components/landing/hero/Hero";
import NewestEntertainmentAreas from "@/components/landing/newest-entertainment";

export default function Home() {
  return (
    <div className="w-full flex flex-wrap">
      {/* <p className="font-Peyda-900"> سلام </p>  */}
      {/* <Hero /> */}

      <Holder
        background="#232323"
        className="p-8 pb-16 flex justify-center flex-wrap absolute z-10 -bottom-20"
      >
        <AboutUs />
        <CircleShadow color="#7569FF" opacity="0.3" top="50px" right="-86px" />
      </Holder>
      <Holder
        background="#2D2D2D"
        className="mb-[132px] sm:px-8 sm:pb-16 flex justify-center flex-wrap gap-y-[150px]"
      >
        <BuyProperty />
        <NewestEntertainmentAreas />
        <CircleShadow color="#8CFF45" opacity="0.3" left="-86px" top="200px" />
        <CircleShadow color="#7569FF" opacity="0.3" top="900px" right="-86px" />
      </Holder>
      <Comment />
    </div>
  );
}
