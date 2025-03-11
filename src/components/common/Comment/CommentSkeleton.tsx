import { Skeleton } from "@heroui/react";
import FileContainer from "../FileContainer";

export default function CommentSkeleton() {
  return (
    <FileContainer
      background="#393939"
      radius="md"
      size="md"
      label={<Skeleton className="w-[67px] h-[32px] rounded-lg"></Skeleton>}
      labelHeight="30px"
      labelWidth="100px"
      classNames={{
        base: "w-[full] flex flex-wrap p-4 pt-[32px] text-white font-Peyda-400",
        innerLabel: "!p-3 flex justify-center items-center",
        wrapperLabel: "group-hover:!bg-green",
        coverHollow: "group-hover:!text-green",
      }}
    >
      <Skeleton className="w-full h-20 rounded-3xl"></Skeleton>
      <div className="w-full flex gap-x-8 items-center h-fit">
        <Skeleton className="min-w-[175px] h-[49px] rounded-2xl mt-6"></Skeleton>
        <div className="w-full h-[3px] bg-gradient-to-l to-white/0 from-white"></div>
      </div>
      <Skeleton className="w-full h-5 rounded-3xl mt-5"></Skeleton>
      <Skeleton className="w-full h-[72px] rounded-3xl mt-4"></Skeleton>
      <Skeleton className="w-full h-20 rounded-3xl mt-10"></Skeleton>
    </FileContainer>
  );
}
