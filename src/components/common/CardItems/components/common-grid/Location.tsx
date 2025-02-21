import { LocationIcon } from "@/core/icon/icons";

const Location = ({ location }: { location: string }) => {
  return (
    <div className="w-full flex gap-x-3 text-[#AAAAAA]">
      <LocationIcon width={16} height={16} />
      <span className="font-Peyda-500">{location}</span>
    </div>
  );
};

export default Location;
