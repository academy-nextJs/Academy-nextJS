import { loginUserParams, loginUserResponse } from "@/core/models/auth.models";
import { AxiosError, AxiosResponse } from "axios";
import http from "../../interceptor";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const LoginUser = async (
  params: loginUserParams
): Promise<AxiosResponse<loginUserResponse>> => {
  const response = await toast.promise(http.post("/auth/login", params), {
    pending: "درحال پردازش...",
  });
  return response;
};

export const useLoginUser = () => {
  return useMutation({
    mutationKey: ["LOGIN_USER"],
    mutationFn: LoginUser,
    onSuccess: (response: AxiosResponse) => {
      toast.success("ورود با موفقیت انجام شد");
      console.log(response);
    },
    onError: (error: AxiosError) => {
      if (error.status === 404) toast.error("کاربری با این اطلاعات پیدا نشد");
      else if (error.status && error.status >= 500)
        toast.info("برای سرور مشکلی پیش آمده لطفا بعدا تلاش کنید!");
    },
  });
};
