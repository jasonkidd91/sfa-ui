import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { config } from "../config";

// Create a custom Axios instance
const api: AxiosInstance = axios.create({
  baseURL: config.api, // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Set up a request interceptor for appending JWT token to headers
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("jwtToken"); // Replace with your token retrieval logic
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Set up a response interceptor for handling exceptions
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Check for specific error status codes or error responses from backend
    if (
      error.response &&
      (error.response.status === 401 ||
        (error.response.data as any)?.error === "Unauthorized")
    ) {
      // Handle unauthorized access or expired token
      // Redirect to login page or perform token refresh
    } else {
      // Handle other errors
      // Display error message or perform other error handling logic
    }
    return Promise.reject(error);
  }
);

// Common function for making API requests
export const makeApiRequest = async <T>(
  config: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.request<T>(config);
    return response.data;
  } catch (error) {
    // Handle error
    throw error;
  }
};
