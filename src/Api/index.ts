import axios from "axios";
// import { toast } from "react-toastify";

export const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

// API.interceptors.request.use((config) => {
//   let token = "";
//   if (typeof window !== "undefined") {
//     const localToken = sessionStorage.getItem("@token");

//     if (localToken) {
//       token = localToken.replaceAll('"', "");
//     }

//     if (token && config.headers !== undefined) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//   }

//   return config;
// });

// API.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 403) {
//       toast.error("Token expirado");
//       setTimeout(() => {
//         sessionStorage.clear();
//         window.location.href = "/login";
//       }, 1000);
//     }

//     return Promise.reject(error);
//   }
// );
