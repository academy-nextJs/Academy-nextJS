import Image from "next/image";
import mainImg from "../../assets/image/Rectangle.png";
import group from "../../assets/image/Group.png";
import winner from "../../assets/image/winner.png";
import CustomTab from "../login/Tab";
import { loginStatus } from "@/core/constants/Auth";

const WinnerBox = () => {
  return (
    <div className="h-full lg:w-1/2 relative">
      <Image src={mainImg} alt="bg-main " className="w-full"/>
      <div className="w-64 absolute top-10 left-[6%]">
      <CustomTab buttonArray={loginStatus} color={"default"}/>
      </div>
      <div className="w-[88%] absolute -mt-20 bottom-[9%] right-[6%] mx-auto bg-zinc-700/70 backdrop-blur-sm p-4 rounded-3xl flex gap-3">
        <Image src={group} alt="bg-main " className="max-sm:hidden"/>
        <div className="text-white z-40">
          <h1 className="font-Peyda-600 text-xl">بیش از 5600+</h1>
          <h2>مشتریانی لذت سفرشان را با ما تجربه کردند !</h2>
        </div>
        <Image
          src={winner}
          alt="bg-main "
          className="absolute bottom-0 left-1"
        />
      </div>
    </div>
  );
};

export default WinnerBox;
