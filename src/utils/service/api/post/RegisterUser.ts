import {
  RegisterUserParamsType,
  RegisterUserResponseType,
} from "@/core/models/types/auth.models";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import http from "@/utils/service/interceptor";
import { useMutation } from "@tanstack/react-query";
import { redirect } from "next/dist/server/api-utils";

export const RegisterUser = async (
  params: RegisterUserParamsType
): Promise<AxiosResponse<RegisterUserResponseType>> => {
  const response = await toast.promise(
    http.post("/api/auth/register", params),
    {
      pending: "درحال پردازش...",
    }
  );
  return response;
};

export const useRegisterUser = () => {
  return useMutation({
    mutationKey: ["REGISTER_USER"],
    mutationFn: RegisterUser,
    onSuccess: async (response: AxiosResponse) => {
      console.log(response);
       toast.success("ثبت نام با موفقیت انجام شد");
    },
    onError: (error: AxiosError) => {
      if (error.status < 500) toast.error("اطلاعات درست نیست");
      else if (error.status && error.status >= 500)
        toast.info("برای سرور مشکلی پیش آمده لطفا بعدا تلاش کنید!");
    },
  });
};
