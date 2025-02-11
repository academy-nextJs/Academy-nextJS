import CreateIconList from "./CreateIconList";
import CreateLinks from "./CreateLinks";
import {
  FooterLinks,
  FooterParagraph,
  TrustBadge,
  SocialNetworks,
} from "@/core/constants/Footer";

export default function WrapperLinks({ color }: { color: string }) {
  return (
    <div
      dir="rtl"
      className="p-[48px] pb-6 min-h-[496px] rounded-[56px] col-span-2 relative text-white"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-[32px] font-Peyda-500 max-xl:hidden">پلتفرم دلتا</h1>
      <div className="w-full flex max-md:gap-y-12 max-md:flex-wrap max-xl:justify-evenly min-[1360px]:gap-x-[71px] gap-x-10 mt-4 mb-[39px]">
        <p className="font-Peyda-400 max-w-[365px] leading-[36px] max-xl:hidden">
          {FooterParagraph}
        </p>
        {FooterLinks.map((links) => (
          <CreateLinks
            key={links.id}
            title={links.title}
            links={links.links}
            isLink={links.isLink}
          />
        ))}
      </div>
      <div className="w-full h-[56px] flex max-md:justify-center gap-6 mb-[36px]">
        {TrustBadge.map((trust, index) => (
          <CreateIconList
            height={36}
            width={trust.width ? trust.width : 36}
            href={trust.href}
            picture={trust.picture}
            type="picture"
            size="lg"
            key={index}
          />
        ))}
      </div>
      <h1 className="text-[32px] font-Peyda-500 xl:hidden w-full max-md:text-center">
        پلتفرم دلتا
      </h1>
      <p className="font-Peyda-400 leading-[36px] xl:hidden mb-[36px] max-md:text-center">
        {FooterParagraph}
      </p>
      <hr />
      <div className="w-full h-fit flex max-sm:flex-wrap justify-between items-center max-sm:gap-y-5 mt-[32px]">
        <p className="font-Peyda-400 w-full max-sm:text-center">
          تمام حقوق مادی و معنوی این اثر برای دلتا محفوظ است .
        </p>
        <ul className="flex gap-x-4 max-sm:w-full justify-center">
          {SocialNetworks.map((social, index) => (
            <CreateIconList
              height={36}
              width={17}
              href={social.href}
              type="icon"
              Icon={social.icon}
              size="md"
              key={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
