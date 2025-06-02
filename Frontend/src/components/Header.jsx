
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function Header() {
    const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    // Kiểm tra user trong localStorage (hoặc sessionStorage)
    const user = localStorage.getItem("user");
    if (user) {
      console.log("User is logged in:", user);
      
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  
  
  return (
    <div>
      <nav className="flex items-center justify-between px-4 py-5 bg-white border-b border-gray-200 shadow-md pl-20 pr-20">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src="https://storage.googleapis.com/a1aa/image/962a10e2-06ea-402f-a24c-f8e5a4367e3e.jpg"
          alt="Small fluffy white dog with a happy expression in a circular frame"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-[#E35E25] font-serif font-semibold text-lg select-none">
          PETBOOKING
        </span>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex space-x-10 font-bold text-[18px] leading-[24px]">
      <li>
        <Link
          to="/home"
          className={`px-6 py-2 rounded-full ${
            isActive('/home') ? 'bg-[#E35E25] text-white' : 'text-[#1E2A6F]'
          }`}
        >
          TRANG CHỦ
        </Link>
      </li>
      <li>
        <Link
          to="/product"
          className={`px-6 py-2 rounded-full ${
            isActive('/product') ? 'bg-[#E35E25] text-white' : 'text-[#1E2A6F]'
          }`}
        >
          SẢN PHẨM
        </Link>
      </li>
      <li>
        <Link
          to="/service"
          className={`px-6 py-2 rounded-full ${
            isActive('/service') ? 'bg-[#E35E25] text-white' : 'text-[#1E2A6F]'
          }`}
        >
          DỊCH VỤ
        </Link>
      </li>
      <li>
        <Link
          to="/shop"
          className={`px-6 py-2 rounded-full ${
            isActive('/shop') ? 'bg-[#E35E25] text-white' : 'text-[#1E2A6F]'
          }`}
        >
          CỬA HÀNG
        </Link>
      </li>
    </ul>

      {/* Action Buttons */}
      <div className="hidden md:flex space-x-6 text-white text-lg">
        <button
          aria-label="Shopping cart"
          className="bg-[#E35E25] rounded-full w-10 h-10 flex items-center justify-center"
        >
          <ShoppingCartIcon />
        </button>
        <button
          aria-label="Search"
          className="bg-[#E35E25] rounded-full w-10 h-10 flex items-center justify-center"
        >
          <SearchIcon />
        </button>
        <button type='b'
          aria-label="User account"
          className="bg-[#E35E25] rounded-full w-10 h-10 flex items-center justify-center hover:cursor-pointer"
        >
          <AccountCircleIcon />
        </button>
      </div>
    </nav>
    </div>
  )
}

export default Header
