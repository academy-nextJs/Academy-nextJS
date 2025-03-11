import { StarIcon } from "@/core/icon/icons";
import { useCreateComment } from "@/utils/service/api/post/CreateComment";
import { Button, Input, Slider } from "@heroui/react";
import { useFormik } from "formik";
import { FC, Fragment } from "react";
import { RiArrowDropLeftLine } from "react-icons/ri";

interface CommentProps {
  view: "rent" | "reserve";
  house_id: string;
}

const Comment: FC<CommentProps> = ({ view, house_id }) => {
  const initialValues = {
    title: "",
    caption: "",
    rating: 1,
  };
  const { mutate } = useCreateComment();

  // Handle Formik
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      mutate({ ...values, house_id: house_id });
    },
  });

  const InputWidth =
    view == "rent" ? "w-[212px] min-w-[424px]" : "w-[372px] min-w-[372px]";

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="w-full flex gap-5 items-end mb-10">
          <Input
            className={`font-Peyda-400 ${InputWidth}`}
            label="تایتل :"
            labelPlacement="outside"
            variant="bordered"
            placeholder="تایتل"
            classNames={{
              label: `label-input !bg-base text-white`,
              input: "text-white",
              inputWrapper: `inputWrapper-input !text-black border-[#AAAAAA] h-[53px]`,
            }}
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          <div className="w-full h-[53px] relative border-2 border-[#AAAAAA] rounded-2xl pt-[18px] pb-[10px] pr-6 flex">
            <div className="absolute -top-3 bg-base px-2 text-[#AAAAAA] font-Peyda-500">
              امتیاز شما :
            </div>
            <Slider
              dir="ltr"
              className="w-full"
              color="foreground"
              maxValue={5}
              minValue={1}
              showSteps={true}
              size="md"
              step={0.5}
              id="rating"
              name="rating"
              aria-label="rating-slider"
              defaultValue={formik.values.rating}
              onChange={(ev) => formik.setFieldValue("rating", ev)}
              classNames={{
                step: "bg-white w-[1px] h-full rounded-none",
                thumb:
                  "w-[24px] h-[24px] bg-[#7569FF] border-white border-2 shadow-[0px_0px_10px_rgba(117,105,255,1)] rounded-[5px] after:hidden",
                track: "!bg-[#565656]",
                filler: "bg-gradient-to-r to-[#7569FF] from-[#E2DFFF]",
              }}
            />
            <div className="w-[88px] flex justify-center gap-x-[6px] items-center">
              <span className="font-Peyda-Numeric">{formik.values.rating}</span>
              <StarIcon fill="#fff" />
            </div>
          </div>
        </div>
        <div
          className={`w-full flex items-end ${
            view == "rent" ? "gap-8" : "gap-16"
          }`}
        >
          <Input
            className="w-full font-Peyda-400"
            label="پیام شما :"
            labelPlacement="outside"
            variant="bordered"
            placeholder="پیام"
            classNames={{
              label: `label-input !bg-base text-white`,
              input: "text-white",
              inputWrapper: `inputWrapper-input !text-black border-[#AAAAAA] h-[53px]`,
            }}
            id="caption"
            name="caption"
            value={formik.values.caption}
            onChange={formik.handleChange}
          />
          <Button
            type="submit"
            className="!bg-green text-[#363636] font-Peyda-500 py-2 px-4"
          >
            ارسال نظر
            <RiArrowDropLeftLine size={25} className="text-black" />
          </Button>
        </div>
      </form>
      <div className="w-full h-[3px] bg-gradient-to-r mt-10 from-[rgba(170,170,170,0)] via-[#565656] to-[rgba(170,170,170,0)]"></div>
    </Fragment>
  );
};

export default Comment;
