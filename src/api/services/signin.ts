import { http } from "api/http";

const signin = (data: any) => {
  return http.post("/auth/login", data);
};

const sendOtp = (data: any) => {
  return http.post("/auth/send-otp", data);
};

const verifyOtp = ({ data, query }: any) => {
  return http.post(`/auth/verify-otp?type=${query}`, data);
};

const forgotPassword = (data: any) => {
  return http.post("/auth/forgot-password", data);
};

const changePassword = ({ data }: any) => {
  return http.post("/auth/change-password", data);
};

export { sendOtp, verifyOtp, changePassword, signin, forgotPassword };
