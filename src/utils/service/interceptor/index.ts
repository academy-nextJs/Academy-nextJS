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
  console.error(error);
  return Promise.reject(error);
};

instance.interceptors.response.use(onSuccess, onError);

export default instance;