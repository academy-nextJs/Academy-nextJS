import { loginUserParams, loginUserResponse } from "@/core/models/auth.models";
import { AxiosError, AxiosResponse } from "axios";
import http from "../../interceptor";
import { useMutation } from "@tanstack/react-query";

export const LoginUser = async (
  params: loginUserParams
): Promise<AxiosResponse<loginUserResponse>> => {
  //   console.log(params);
  const response = await http.post("/users/login", params);
  return response;
};

export const useLoginUser = () => {
  return useMutation({
    mutationKey: ["LOGIN_USER"],
    mutationFn: LoginUser,
    onSuccess: (response) => {
      //   alert(response.message);
      localStorage.setItem("token", JSON.stringify(response.data));
    },
    onError: (error: AxiosError) => {
      // alert(error.status)
      if (error.status === 404) {
        alert("کاربری با این اطلاعات پیدا نشد");
        // toast.error("کاربری با این اطلاعات پیدا نشد")
      }
    },
  });
};
