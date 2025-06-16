import axios from "axios";

const API_URL = "http://localhost:3000/api/service";

export const ServiceService = {
  getAllServices: async () => {
    try {
      const res = await axios.get(`${API_URL}/getAllServices`);
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Lấy dịch vụ thất bại");
    }
  },

  getAllServicePrice: async () => {
    try {
      const res = await axios.get(`${API_URL}/getServicePrice`);
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Lấy giá dịch vụ thất bại");
    }
  },
};
