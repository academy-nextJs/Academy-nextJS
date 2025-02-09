import WrapperForm from "./WrapperForm";
import Poster from "./Poster";
import WrapperLinks from "./WrapperLinks";
import FileContainer from "../FileContainer";
import Image from "next/image";
import { PiPhoneCallLight } from "react-icons/pi";

export default function Footer() {
  return (
    <FileContainer
      background="#8CFF45"
      radius="md"
      size="lg"
      classNames={{
        base: "w-full !h-fit grid grid-cols-2 p-8 pt-14 !mt-[140px] mx-8 mb-6",
        labelHeight: "80px",
        labelWidth: "400px",
        label: "flex justify-center h-full",
        tag: "h-[140px] top-[-140px]",
      }}
      tag={<Image alt="" src={"/delta-icon.svg"} width={756} height={80} />}
      label={
        <div className="bg-base font-Peyda-Numeric flex gap-x-3 items-center justify-center text-white relative w-[330px] rounded-2xl py-4 h-fit text-center">
          <PiPhoneCallLight size={25} />
          <span>09229167194 - 09154569872</span>
        </div>
      }
    >
      <Poster />
      <WrapperForm />
      <WrapperLinks />
    </FileContainer>
  );
}
