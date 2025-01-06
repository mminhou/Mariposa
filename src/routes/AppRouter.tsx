import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../components/MainPage/MainPage';
import LoginPage from '../components/LoginPage/LoginPage';
import CartPage from '../components/CartPage/CartPage';
import ProductDetailPage from '../components/ProductDetailPage/ProductDetailPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
    </Routes>
  );
};

export default AppRouter;
