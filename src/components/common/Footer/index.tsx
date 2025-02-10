"use client";
import { PhoneIcon } from "@/core/icon/icons";
import Image from "next/image";
import FileContainer from "../FileContainer";
import Poster from "./Poster";
import WrapperForm from "./WrapperForm";
import WrapperLinks from "./WrapperLinks";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div dir="ltr">
      {pathname == "/login" ||
      pathname == "/register" ||
      pathname == "/contact-us" ? (
        <WrapperLinks color="#393939" />
      ) : (
        <FileContainer
          background="#8CFF45"
          radius="md"
          size="lg"
          labelHeight="80px"
          labelWidth="30%"
          tagHeight="140px"
          classNames={{
            base: "max-w-[1376px] !h-fit grid grid-cols-2 p-8 pt-14 !mt-[140px] max-sm:!rounded-t-none sm:mx-8 mb-6",
            innerLabel: "flex justify-center h-full",
            wrapperTag: "h-[140px] top-[-140px] !justify-start",
            wrapperLabel:
              "max-sm:!w-full max-xl:!w-[50%] max-sm:overflow-hidden max-sm:!rounded-t-3xl",
          }}
          tag={
            <Image
              alt=""
              src={"/delta-icon.svg"}
              width={756}
              height={80}
              className="max-xl:hidden"
            />
          }
          label={
            <div className="bg-base font-Peyda-Numeric flex gap-x-3 items-center justify-center text-white relative w-[330px] rounded-2xl py-4 h-fit text-center">
              <PhoneIcon width={20} height={20} />
              <span>09229167194 - 09154569872</span>
            </div>
          }
        >
          <Poster />
          <WrapperForm />
          <WrapperLinks color="#232323" />
        </FileContainer>
      )}
    </div>
  );
}
