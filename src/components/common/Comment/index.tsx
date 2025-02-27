import { Button, Input, Slider } from "@heroui/react";
import { useFormik } from "formik";
import { Fragment } from "react";
import { RiArrowDropLeftLine } from "react-icons/ri";

const Comment = () => {
  // Handle Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      massage: "",
      score: 1,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-full flex gap-5 items-end mb-10">
          <Input
            className="w-[186px] font-Peyda-400"
            label="نام و نام خانوادگی :"
            labelPlacement="outside"
            placeholder=" "
            variant="bordered"
            classNames={{
              label: `label-input !bg-base text-white`,
              input: "text-white",
              inputWrapper: `inputWrapper-input !text-black border-[#AAAAAA] h-[53px]`,
            }}
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <Input
            className="w-[186px] font-Peyda-400"
            label="ایمیل :"
            labelPlacement="outside"
            variant="bordered"
            placeholder=" "
            classNames={{
              label: `label-input !bg-base text-white`,
              input: "text-white",
              inputWrapper: `inputWrapper-input !text-black border-[#AAAAAA] h-[53px]`,
            }}
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <div className="h-[53px] relative border-2 border-[#AAAAAA] rounded-2xl pt-[18px] pb-[10px] pr-6 pl-[88px]">
            <div className="absolute -top-3 bg-base px-2 text-[#AAAAAA] font-Peyda-500">
              امتیاز شما :
            </div>
            <Slider
              dir="ltr"
              className="w-[475px]"
              color="foreground"
              maxValue={5}
              minValue={1}
              showSteps={true}
              size="md"
              step={1}
              id="score"
              name="score"
              aria-label="score-slider"
              defaultValue={formik.values.score}
              onChange={(ev) => formik.setFieldValue("score", ev)}
              classNames={{
                step: "bg-white w-[1px] h-full rounded-none",
                thumb:
                  "w-[24px] h-[24px] bg-[#7569FF] border-white border-2 shadow-[0px_0px_10px_rgba(117,105,255,1)] rounded-[5px] after:hidden",
                track: "!bg-[#565656]",
                filler: "bg-gradient-to-r to-[#7569FF] from-[#E2DFFF]",
              }}
            />
          </div>
        </div>
        <div className="w-full flex items-end gap-8">
          <Input
            className="w-[856px] font-Peyda-400"
            label="پیام شما : :"
            labelPlacement="outside"
            variant="bordered"
            placeholder=" "
            classNames={{
              label: `label-input !bg-base text-white`,
              input: "text-white",
              inputWrapper: `inputWrapper-input !text-black border-[#AAAAAA] h-[53px]`,
            }}
            id="massage"
            name="massage"
            value={formik.values.massage}
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
