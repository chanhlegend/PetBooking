import axios from "axios";

const API_URL = "https://petbooking-backend.onrender.com/api/user/account";

export const UserService = {
  login: async (email, password) => {
    // Đăng nhập cứng, không gọi API
    if (email === "admin@gmail.com" && password === "123456") {
      const user = { email, fullname: "Admin", role: "admin" };
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/";
      return { user };
    } else {
      try {
        const res = await axios.post(`${API_URL}/login`, { email, password });
        const user = res.data.user;
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/";
        return { user };
      } catch (error) {
        throw new Error(error.response?.data?.message || "Đăng nhập thất bại");
      }
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

  getUserById: async (id) => {
    try {
      const res = await axios.get(`${API_URL}/${id}`);
      return res.data;
    } catch (error) {
      console.error("Lỗi khi gọi getUserById:", error);
      throw new Error(
        error.response?.data?.message || "Lấy thông tin người dùng thất bại"
      );
    }
  },

  updateUser: async (id, userData) => {
    try {
      const res = await axios.post(`${API_URL}/change-profile/${id}`, {
        name: userData.name,
        address: userData.address,
        email: userData.email,
        phone: userData.phone,
        gender: userData.gender,
        dob: null, // Giả sử không có trường dob trong userData
      });
      return res.data;
    } catch (error) {
      console.error("Lỗi khi gọi updateUser:", error);
      throw new Error(
        error.response?.data?.message ||
          "Cập nhật thông tin người dùng thất bại"
      );
    }
  },
};
