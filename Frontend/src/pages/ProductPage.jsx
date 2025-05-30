import React, { useState } from 'react';
import { Box, Slider, Button, Radio, RadioGroup, FormControlLabel, TextField, IconButton } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ProductPage() {
  const [price, setPrice] = useState(3000);
  const [category, setCategory] = useState('');

  const categories = [
    { id: 'cat1', label: 'Thức ăn - Dinh dưỡng' },
    { id: 'cat2', label: 'Phụ kiện - Đồ dùng' },
    { id: 'cat3', label: 'Vệ sinh và Chăm sóc' },
    { id: 'cat4', label: 'Đồ chơi - Huấn luyện' },
    { id: 'cat5', label: 'Bảo vệ sức khỏe' },
    { id: 'cat6', label: 'Khác' },
  ];

  const petTypes = [
    { icon: 'fa-dog', label: 'Cho Chó', active: true },
    { icon: 'fa-cat', label: 'Cho Mèo', active: false },
    { icon: 'fa-hippo', label: 'Chuột Hamster', active: false },
    { icon: 'fa-dove', label: 'Chim', active: false },
    { icon: '', label: 'Khác', active: false },
  ];

  // Product Card Component
  const ProductCard = () => (
    <div className="bg-white rounded-lg shadow p-2 flex flex-col">
      <img
        alt="Snack Tell me cho Chó package front view"
        className="rounded-md mb-2 object-contain w-full h-36"
        src="https://storage.googleapis.com/a1aa/image/d0c0d444-2cf0-4ba5-cbc2-d89524e60dab.jpg"
        width="150"
        height="150"
      />
      <h3 className="text-[10px] text-[#F97316] font-semibold mb-1 leading-tight">
        Snack Tell me cho Chó
      </h3>
      <div className="flex items-center justify-between text-[10px] text-[#F97316] mb-1">
        <span>60.000 đ</span>
        <IconButton aria-label="Add to cart" sx={{ color: '#F97316', '&:hover': { color: '#f97316' } }}>
          <i className="fas fa-cart-plus"></i>
        </IconButton>
      </div>
      <div className="flex space-x-0.5 text-[#F97316] text-[10px]">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white font-sans text-gray-900">
      <Header />
      <div className="max-w-7xl mx-auto p-4">
        {/* Banner */}
        <div className="bg-[#F9E2A1] rounded-lg p-6 mb-8 relative flex justify-center">
          <img
            alt="Dog looking up with pet shop banner background with orange and white abstract shapes"
            className="rounded-lg max-w-full h-auto"
            src="https://storage.googleapis.com/a1aa/image/4b911f4a-d10f-4043-de4f-fefb895b54d5.jpg"
            width="900"
            height="200"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between px-4">
            <IconButton
              sx={{ bgcolor: 'white', '&:hover': { bgcolor: '#f3f4f6' } }}
              aria-label="Previous"
            >
              <i className="fas fa-chevron-left text-gray-700"></i>
            </IconButton>
            <IconButton
              sx={{ bgcolor: 'white', '&:hover': { bgcolor: '#f3f4f6' } }}
              aria-label="Next"
            >
              <i className="fas fa-chevron-right text-gray-700"></i>
            </IconButton>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar */}
          <aside className="flex-shrink-0 w-full md:w-60 space-y-6">
            {/* Price Filter */}
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-sm font-semibold text-[#1E1E4F] mb-2">Lọc theo giá</h3>
              <div className="text-xs text-gray-500 flex justify-between mb-1">
                <span>3.000đ</span>
                <span>400.000đ</span>
              </div>
              <Slider
                value={price}
                onChange={(e, newValue) => setPrice(newValue)}
                min={3000}
                max={400000}
                aria-label="Price range slider"
                sx={{
                  color: '#f97316',
                  '& .MuiSlider-thumb': {
                    width: 16,
                    height: 16,
                    bgcolor: '#f97316',
                    borderRadius: '50%',
                  },
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  bgcolor: '#f97316',
                  '&:hover': { bgcolor: '#ea580c' },
                  textTransform: 'none',
                  fontSize: '0.75rem',
                }}
              >
                LỌC
              </Button>
            </div>

            {/* Product Categories */}
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-sm font-semibold text-[#1E1E4F] mb-3">Danh mục sản phẩm</h3>
              <RadioGroup
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="text-xs text-[#F97316] space-y-2"
              >
                {categories.map((cat) => (
                  <FormControlLabel
                    key={cat.id}
                    value={cat.id}
                    control={<Radio size="small" sx={{ color: '#f97316', '&.Mui-checked': { color: '#f97316' } }} />}
                    label={cat.label}
                    sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.75rem' } }}
                  />
                ))}
              </RadioGroup>
            </div>

            {/* Map */}
            <div className="relative w-full h-48 rounded-lg overflow-hidden shadow">
              <img
                alt="Map showing locations with red markers and dark theme"
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/a1aa/image/ef2cd366-a061-4bc9-ba96-3437024a732c.jpg"
                width="240"
                height="192"
              />
              <div className="absolute top-1 left-1 bg-black bg-opacity-70 text-white text-xs px-2 py-0.5 rounded">
                Bản đồ
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Pet Types */}
            <div className="flex flex-wrap gap-3 mb-6 text-xs font-semibold text-[#1E1E4F]">
              {petTypes.map((pet, index) => (
                <Button
                  key={index}
                  variant={pet.active ? 'contained' : 'outlined'}
                  sx={{
                    borderColor: '#f97316',
                    color: pet.active ? 'white' : '#f97316',
                    bgcolor: pet.active ? '#f97316' : 'transparent',
                    '&:hover': {
                      bgcolor: pet.active ? '#ea580c' : '#fff7ed',
                      borderColor: '#f97316',
                    },
                    textTransform: 'none',
                    fontSize: '0.75rem',
                    px: 3,
                    py: 1,
                  }}
                  startIcon={pet.icon ? <i className={`fas ${pet.icon}`}></i> : null}
                >
                  {pet.label}
                </Button>
              ))}
            </div>

            {/* Search and Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
              <div className="relative flex-1 max-w-md w-full">
                <TextField
                  fullWidth
                  placeholder="Tìm kiếm vị trí"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <IconButton aria-label="Search">
                        <i className="fas fa-search text-[#F97316]"></i>
                      </IconButton>
                    ),
                    sx: {
                      borderRadius: '0.375rem',
                      '& .MuiOutlinedInput-notchedOutline': { borderColor: '#f97316' },
                      '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#f97316' },
                      fontSize: '0.75rem',
                      color: '#1E1E4F',
                    },
                  }}
                  sx={{ '& .MuiInputBase-input::placeholder': { color: '#f97316', opacity: 1 } }}
                />
              </div>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#f97316',
                  '&:hover': { bgcolor: '#ea580c' },
                  textTransform: 'none',
                  fontSize: '0.75rem',
                  px: 4,
                  py: 1,
                }}
              >
                Gần bạn
              </Button>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-[#1E1E4F] mb-4">Sản phẩm</h2>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[...Array(16)].map((_, index) => (
                <ProductCard key={index} />
              ))}
            </div>

            {/* Pagination */}
            <nav className="flex justify-center mt-6 space-x-3 text-xs text-gray-600">
              {[1, 2, 3].map((page) => (
                <Button
                  key={page}
                  sx={{
                    color: '#4b5563',
                    '&:hover': { color: '#f97316' },
                    minWidth: 'auto',
                    fontSize: '0.75rem',
                  }}
                >
                  {page}
                </Button>
              ))}
            </nav>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;