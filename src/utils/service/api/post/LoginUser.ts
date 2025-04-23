import { loginUserParams, loginUserResponse } from "@/core/models/types/auth.models";
import { AxiosError, AxiosResponse } from "axios";
import http from "../../interceptor";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { setServerCookie } from "@/utils/helper/cookie/server-cookie";
import { setClientCookie } from "@/utils/helper/cookie/client-cookie";

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
    onSuccess: async (response: AxiosResponse) => {
      // console.log(response)
      toast.success("ورود با موفقیت انجام شد");
      await setServerCookie("serverAccessToken", response.accessToken);
      await setServerCookie("serverRefreshToken", response.refreshToken);
      setClientCookie("clientAccessToken", response.accessToken,15)
    },
    onError: (error: AxiosError) => {
      if (error.status === 404) toast.error("کاربری با این اطلاعات پیدا نشد");
      else if (error.status && error.status >= 500)
        toast.info("برای سرور مشکلی پیش آمده لطفا بعدا تلاش کنید!");
    },
  });
};
