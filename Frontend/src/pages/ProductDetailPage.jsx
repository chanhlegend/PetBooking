
import React, { useEffect, useState } from "react";


import Header from "../components/Header"; 
import Footer from "../components/Footer";
import ProductDetailCart from "../components/ProductDetailCart";
import ProductShopTag from "../components/ProductShopTag";
import ProductDescriptionCart from "../components/ProductDescriptionCart";
import ProductReviewCart from "../components/ProductReviewCart";

import { ProductService } from "../services/productService";
import { UserService } from "../services/userService";
function ProductDetailPage() {
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const productId = window.location.pathname.split("/").pop();
    const fetchProduct = async () => {
      try {
        const product = await ProductService.getProductById(productId);
        setProduct(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
      
    };

    const fetchAAllProducts = async (sellerId) => {
      try {
        const products = await ProductService.getProductsBySellerId(sellerId);
        console.log("All Products:", products);
      } catch (error) {
        console.error("Error fetching all products:", error);
      }
    };
    fetchProduct();
    fetchAAllProducts(product?.sellerId?._id || "defaultSellerId"); // Replace with actual seller ID if available
  }, []);

  return (
    <div className="bg-[#FFFAF6] min-h-screen">
    <Header />
    <ProductDetailCart product={product} />
    <ProductShopTag product={product} />
    <ProductDescriptionCart product={product} />
    <h2 className='text-2xl font-bold mb-4 mx-20 text-custom-orange'>Đánh Giá Sản Phẩm</h2>
    <ProductReviewCart />
    <Footer />
    </div>
  );
}

export default ProductDetailPage;