import axios from "axios";

const API_URL = "https://petbooking-backend.onrender.com/api/product";

export const ProductService = {
  getProducts: async () => {
    try {
      const response = await axios.get(`${API_URL}/get`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
  getProductById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/get/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      throw error;
    }
  },
  getProductsByName: async (name) => {
    try {
      const response = await axios.get(`${API_URL}/search`, {
        params: { query: name }
      });
      return response.data;
    } catch (error) {
      console.error("Error searching products by name:", error);
      throw error;
    }
  },

  getProductsBySellerId: async (sellerId) => {
    try {
      const response = await axios.get(`${API_URL}/get/seller/${sellerId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products by seller ID:", error);
      throw error;
    }
  }
};
