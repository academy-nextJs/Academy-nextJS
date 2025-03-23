import { getCookie, setCookie } from "@/core/models/cookie/token-cookie";
import Http from "../../interceptor";
import { toast } from "react-toastify";

export const RefreshToken = async () => {
  const refreshToken = await getCookie("refreshToken");
  try {
    const res = await Http.post(`/auth/refresh`, {
      token: refreshToken,
    });
    // If the user token expires and access to the site's features is denied, the user will be redirected to the login page.
    if (res.status === 403) {
      if (typeof window !== "undefined") {
        toast.info(
          "دسترسی شما به امکانات سایت منقضی شده  لطفا دوباره وارد شوید"
        );
        window.location.href = "/login";
      }
      return;
    }

    if (res) {
      // console.log(res)
      // toast.success("refresh token successfully")
      await setCookie("accessToken", res.accessToken);
    }
  } catch (error) {
    console.error("Error:", error);
    return Promise.reject(error);
  }
};
