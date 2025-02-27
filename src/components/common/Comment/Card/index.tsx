import { CommentIcon2, DateIcon } from "@/core/icon/icons";
import { Score } from "../../CardItems/components/common-grid";
import FileContainer, { FileContainerProps } from "../../FileContainer";
import CardFooter from "./CardFooter";
import { FC } from "react";

interface CardCommentProps {
  view: "readonly" | "writeonly";
  message: string;
  name: string;
  date: string;
}

const CardComment: FC<CardCommentProps & Partial<FileContainerProps>> = (
  props
) => {
  const footer = (
    <CardFooter
      name={props.name}
      date={props.date}
      holderStyles="mt-3"
      view={props.view}
    />
  );

  return (
    <FileContainer
      background="#393939"
      radius="md"
      size="md"
      label={<Score score={"4.5"} />}
      labelHeight="40px"
      labelWidth="90px"
      width="487px"
      classNames={{
        base: "flex flex-wrap p-4 gap-y-6 pt-[32px] text-white font-Peyda-400",
        innerLabel: "!p-3 flex justify-center items-center",
        wrapperLabel: "group-hover:!bg-green",
        coverHollow: "group-hover:!text-green",
      }}
      {...props}
    >
      <p
        className={`font-Peyda-400 leading-10 ${
          props.view == "writeonly" ? "line-clamp-2" : "line-clamp-3 text-xl"
        }`}
      >
        ” {props.message} “
      </p>
      {props.view == "writeonly" ? (
        <>
          <div className="w-full flex gap-x-8 items-center h-fit">
            <button className="min-w-[155px] flex gap-2 items-center font-Peyda-600 bg-[#7569FF] rounded-2xl px-6 py-3 shadow-[0px_8px_16px_rgba(117,105,255,0.2)]">
              <CommentIcon2 />
              پاسخ کاربران
            </button>
            <div className="w-full h-[3px] bg-gradient-to-l to-white/0 from-white"></div>
          </div>
          <div className="w-full flex flex-wrap gap-y-5">
            <div className="w-full h-fit flex gap-x-4 items-center">
              <h1>{props.name}</h1>|
              <span className="flex gap-x-2 font-Peyda-Numeric text-[#AAAAAA] text-sm">
                <DateIcon />
                {props.date}
              </span>
            </div>
            <p className="w-full">
              ” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گ...
            </p>
            {footer}
          </div>
        </>
      ) : (
        footer
      )}
    </FileContainer>
  );
};

export default CardComment;
