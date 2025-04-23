import * as yup from "yup";

export const loginValidations = yup.object().shape({
  email: yup.string().email("لطفا ایمیل را به درستی وارد کنید").required("این فیلد الزامی است"),
  password: yup
    .string()
    .required("این فیلد الزامیست!")
    .min(3, "رمز عبور باید بیشتر از 3 حرف باشد"),
});
