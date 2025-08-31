import { PhoneIcon } from "@/core/icon/icons";
import Image from "next/image";
import FileContainer from "../FileContainer";
import Poster from "./poster";
import WrapperForm from "./wrapper-form";
import WrapperLinks from "./wrapper-links";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const FooterLabel = () => {
    return (
      <div className="bg-base font-Peyda-Numeric flex gap-x-3 items-center justify-center text-white relative w-[330px] rounded-2xl py-4 h-fit text-center">
        <PhoneIcon width={20} height={20} />
        <span>09229167194 - 09154569872</span>
      </div>
    );
  };

  const FooterTag = () => {
    return (
      <Image
        alt="footer"
        src="/delta-icon.svg"
        fill
        style={{ objectFit: "cover" }}
        className="max-xl:hidden"
      />
    );
  };

  // finding special page that need to a simple footer
  const simplePage: string[] = ["/login", "/register", "/contact-us"];
  const isSimplePage: boolean = simplePage.includes(pathname);

  return (
    <>
      {isSimplePage ? (
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
            base: `
            max-w-[1376px] !h-fit flex flex-wrap p-8 pt-14 !mt-[140px] 
            max-sm:!rounded-t-none xl:mx-auto mx-8
            `,
            innerLabel: "flex justify-center h-full",
            wrapperTag: "!w-[756px] h-[140px] top-[-140px] !justify-end",
            wrapperLabel: `
            max-sm:!w-full max-xl:!w-[50%] max-sm:overflow-hidden 
            max-sm:!rounded-t-3xl
            `,
          }}
          tag={<FooterTag />}
          label={<FooterLabel />}
        >
          <div className="relative w-full h-fit flex">
            <WrapperForm />
            <Poster />
          </div>
          <WrapperLinks color="#232323" />
        </FileContainer>
      )}
    </>
  );
}
