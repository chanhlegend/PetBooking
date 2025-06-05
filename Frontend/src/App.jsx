import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import OTPVerifyPage from './pages/VerifyPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ServicePage from './pages/ServicePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ScrollToTop from './ScrollToTop';
import ProfileUser from './pages/ProfileUser';


function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify" element={<OTPVerifyPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile/:id" element={<ProfileUser />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
