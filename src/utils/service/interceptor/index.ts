import { getServerCookie } from "@/utils/helper/cookie/server-cookie";
import axios, { AxiosResponse, AxiosError } from "axios";

export const baseURL = process.env.NEXT_PUBLIC_API_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = <T>(response: AxiosResponse<T>): T => {
  return response.data;
};

const onError = (error: AxiosError): Promise<never> => {
  if (error.response) {
    //
    if (error.response.status >= 404 && error.response.status < 500) {
      console.log("Client Error:" + error.response.status);
    }
  }
  console.error(error);
  return Promise.reject(error);
};

instance.interceptors.response.use(onSuccess, onError);

instance.interceptors.request.use(
  async (config) => {
    const token = await getServerCookie("serverAccessToken");
    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;

// // Response interceptor to handle 401 errors (token expired)
// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 401) {
//       // Attempt to refresh
//       const refreshToken = await getServerCookie("refreshToken");
//       if (refreshToken) {
//         RefreshToken();
//       }
//     }
//     return Promise.reject(error);
//   }
// );
