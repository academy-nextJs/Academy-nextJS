import WrapperForm from "./WrapperForm";
import Poster from "./Poster";
import WrapperLinks from "./WrapperLinks";
import FileContainer from "../FileContainer";
import Image from "next/image";

export default function Footer() {
  return (
    <FileContainer
      background="#8CFF45"
      radius="md"
      size="lg"
      classNames={{
        base: "w-full !h-fit grid grid-cols-2 p-8 pt-16 !mt-[140px]",
        labelHeight: "80px",
        labelWidth: "400px",
        label: "flex justify-center h-full",
        tag: "h-[140px] top-[-140px]"
      }}
      tag={<Image alt="" src={"/delta-icon.svg"} width={756} height={80} />}
      label={
        <h1 className="bg-base text-white relative w-[330px] rounded-2xl py-4 pr-6 pl-12 h-fit font-Peyda-600 text-center">
          09229167194 - 09154569872
        </h1>
      }
    >
    {/* <footer className="mx-8 h-fit grid grid-cols-2 p-8 pt-16 rounded-3xl bg-[#8CFF45]"> */}
      <Poster />
      <WrapperForm />
      <WrapperLinks />
    </FileContainer>
  );
}
