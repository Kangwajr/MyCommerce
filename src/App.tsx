import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { CategorySection } from './components/CategorySection';
import { ReviewSection } from './components/ReviewSection';
import { NewArrivals } from './components/NewArrivals';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { useAuthStore } from './store/authStore';

function StoreFront() {
  return (
    <main className="pt-16">
      <Hero />
      <ProductSection />
      <CategorySection />
      <NewArrivals />
      <ReviewSection />
    </main>
  );
}

function App() {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<StoreFront />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute
              isAllowed={isAuthenticated && user?.role === 'admin'}
              redirectPath="/"
            >
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;