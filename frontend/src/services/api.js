import axios from "axios";

const API = axios.create({
  baseURL: "https://secure-auth-backend-fx2c.onrender.com/api",
});

// 🔥 auto attach token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
