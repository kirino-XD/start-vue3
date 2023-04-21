import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import route from "@/router/index";
axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_API_PREFIX;
axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accessToken: string | null = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = "Bearer " + accessToken;
    }
    return config;
  },
  (error: AxiosError): never => {
    throw new Error(error.message);
  }
);
axios.interceptors.response.use(
  (res: AxiosResponse): any => {
    if (res.status && res.status === 200) {
      return res.data;
    }
    ElMessage.error(`请求失败，状态码${res.status}`);
  },
  (error: AxiosError): never => {
    const response = error.response;
    if (response?.status === 401) {
      localStorage.removeItem("access_token");
      if (route.currentRoute.value.path !== "/login") {
        route.replace({
          path: "/login",
          query: {
            beforePath: route.currentRoute.value.path,
          },
        });
        ElMessage.error("登录已超时，请重新登录");
      }
    } else {
      ElMessage.error("请求失败");
    }
    throw new Error(error.message);
  }
);

export default axios;
