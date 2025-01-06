import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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

      {/* 404 처리 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
