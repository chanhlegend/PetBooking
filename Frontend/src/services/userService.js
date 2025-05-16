// src/services/UserService.js
const API_URL = "http://localhost:3000/api/user/account";

export const UserService = {
  login: async (email, password) => {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Đăng nhập thất bại");
    } else {
      window.location.href = "/";
    }

    return data;
  },

  register: async (fullname, email, password) => {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Đăng ký thất bại");
    } 

    return data;
  },

  getOTPVerify: async (email) => {
    try {
      const res = await fetch(`${API_URL}/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Lấy OTP thất bại");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Lỗi khi gọi getOTPVerify:", error);
      throw error;
    }
  },
  
  verifyOTP: async (email, otp) => {
    const res = await fetch(`${API_URL}/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Xác thực OTP thất bại");
    } 

    return data;
  },
};
