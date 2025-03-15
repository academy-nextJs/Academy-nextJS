import axios, { AxiosResponse, AxiosError } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

const onSuccess = <T>(response: AxiosResponse<T>): T => {
  return response.data;
};

const onError = (error: AxiosError): Promise<never> => {
  if (error.response) {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
    }
    if (error.response.status >= 404 && error.response.status < 500) {
      console.log("Client Error:" + error.response.status);
    }
  }
  console.error(error);
  return Promise.reject(error);
};

instance.interceptors.response.use(onSuccess, onError);

export default instance;
