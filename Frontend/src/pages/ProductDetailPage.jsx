
import React, { useEffect, useState } from "react";


import Header from "../components/Header"; 
import Footer from "../components/Footer";
import ProductDetailCart from "../components/ProductDetailCart";
import { ProductService } from "../services/productService";

function ProductDetailPage() {
  const [product, setProduct] = useState(null);


  useEffect(() => {
    const productId = window.location.pathname.split("/").pop();
    console.log(`Product ID: ${productId}`);
    const fetchProduct = async () => {
      try {
        const product = await ProductService.getProductById(productId);
        setProduct(product);
        console.log("Fetched product:", product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);
  return (
    <div className="bg-[#FFFAF6] min-h-screen">
    <Header />
    <ProductDetailCart product={product} />
    </div>
  );
}

export default ProductDetailPage;