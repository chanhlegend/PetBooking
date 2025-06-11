import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex-shrink-0 w-full md:w-[220px] lg:w-[260px] pr-0 md:pr-6">
      <div className="flex flex-col space-y-3">
        <div className="rounded-lg bg-white px-5 py-3 text-sm text-gray-700 shadow-sm">
          Xin Chào
          <div className="mt-1 font-pacifico text-orange-500 text-lg leading-none">
            Bí Bo Shop
          </div>
        </div>
        <button className="text-sm text-gray-700 bg-white rounded-lg border border-gray-200 px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-200">
          Quản lí doanh thu
        </button>
        <button className="text-sm text-gray-700 bg-white rounded-lg border border-gray-200 px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-200">
          Quản lí dịch vụ
        </button>
        <button className="text-sm text-white bg-orange-500 rounded-lg border border-orange-500 px-4 py-2.5 text-left hover:bg-orange-600 transition-colors duration-200">
          Quản lí sản phẩm
        </button>
        <button className="text-sm text-gray-700 bg-white rounded-lg border border-gray-200 px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-200">
          Quản lí cửa hàng
        </button>
        <button className="text-sm text-gray-700 bg-white rounded-lg border border-gray-200 px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-200">
          Quản lí đặt hàng
        </button>
        <button className="text-sm text-gray-700 bg-white rounded-lg border border-gray-200 px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-200">
          Quản lí lịch khám
        </button>
      </div>
    </div>
  );
};

export default Sidebar;