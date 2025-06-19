import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getButtonStyle = (path) => {
    const baseStyle =
      "text-sm rounded-lg px-4 py-2.5 text-left transition-colors duration-200";
    if (isActive(path)) {
      return `${baseStyle} text-white bg-orange-500 border border-orange-500 hover:bg-orange-600`;
    }
    return `${baseStyle} text-gray-700 bg-white border border-gray-200 hover:bg-gray-50`;
  };

  return (
    <div className="flex-shrink-0 w-full md:w-[220px] lg:w-[260px] pr-0 md:pr-6">
      <div className="flex flex-col space-y-3">
        <div className="rounded-lg bg-white px-5 py-3 text-sm text-gray-700 shadow-sm">
          Xin Chào
          <div className="mt-1 font-pacifico text-orange-500 text-lg leading-none">
            Bí Bo Shop
          </div>
        </div>
        <button
          onClick={() => handleClick("/shop/revenue")}
          className={getButtonStyle("/shop/revenue")}
        >
          Quản lí doanh thu
        </button>
        <button
          onClick={() => handleClick("/shop/service-manager")}
          className={getButtonStyle("/shop/service-manager")}
        >
          Quản lí dịch vụ
        </button>
        <button
          onClick={() => handleClick("/shop/product-manager")}
          className={getButtonStyle("/shop/product-manager")}
        >
          Quản lí sản phẩm
        </button>
        <button
          onClick={() => handleClick("/shop/store")}
          className={getButtonStyle("/shop/store")}
        >
          Quản lí cửa hàng
        </button>
        <button
          onClick={() => handleClick("/shop/orders")}
          className={getButtonStyle("/shop/orders")}
        >
          Quản lí đặt hàng
        </button>
        <button
          onClick={() => handleClick("/shop/appointments")}
          className={getButtonStyle("/shop/appointments")}
        >
          Quản lí lịch khám
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
