import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from '../components/MainPage/MainPage';
import LoginPage from '../components/LoginPage/LoginPage';
import CartPage from '../components/CartPage/CartPage';
import ProductDetailPage from '../components/ProductDetailPage/ProductDetailPage';
import SignUpPage from '../components/SignUpPage/SignUpPage';
import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        }
      />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="register" element={<SignUpPage />} />

      {/* 404 처리 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
