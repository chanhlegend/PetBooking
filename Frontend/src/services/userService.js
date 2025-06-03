import axios from "axios";

const API_URL = "http://localhost:3000/api/user/account";

export const UserService = {
  login: async (email, password) => {
    try {
      const res = await axios.post(`${API_URL}/login`, { email, password });
      localStorage.setItem("user", JSON.stringify(res.data.user));
      window.location.href = "/home";
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Đăng nhập thất bại");
    }
  },

  register: async (fullname, email, password, role) => {
    try {
      const res = await axios.post(`${API_URL}/register`, {
        fullname,
        email,
        password,
        role,
      });
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Đăng ký thất bại");
    }
  },

  getOTPVerify: async (email) => {
    try {
      const res = await axios.post(`${API_URL}/email`, { email });
      return res.data;
    } catch (error) {
      console.error("Lỗi khi gọi getOTPVerify:", error);
      throw new Error(error.response?.data?.message || "Lấy OTP thất bại");
    }
  },

  verifyOTP: async (email, otp) => {
    try {
      const res = await axios.post(`${API_URL}/verify`, { email, otp });
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Xác thực OTP thất bại");
    }
  },

  getShop: async () => {
    try {
      const res = await axios.get(`${API_URL}/shop`);
      return res.data;
    } catch (error) {
      console.error("Lỗi khi gọi getShop:", error);
      throw new Error(
        error.response?.data?.message || "Lấy thông tin cửa hàng thất bại"
      );
    }
  },
};
