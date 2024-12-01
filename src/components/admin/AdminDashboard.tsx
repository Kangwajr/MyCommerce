import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SalesAnalytics } from './SalesAnalytics';
import { AdminSidebar } from './AdminSidebar';
import { ProductList } from './products/ProductList';
import { InventoryList } from './inventory/InventoryList';
import { OrderList } from './orders/OrderList';
import { useAuthStore } from '../../store/authStore';

export function AdminDashboard() {
  const { user } = useAuthStore();
  const canManageProducts = user?.role === 'admin' || user?.role === 'staff';

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <AdminSidebar />
      <main className="flex-1 overflow-auto bg-gray-50 p-6">
        <Routes>
          <Route index element={<SalesAnalytics />} />
          <Route path="analytics" element={<SalesAnalytics />} />
          {canManageProducts && (
            <>
              <Route path="products" element={<ProductList />} />
              <Route path="inventory" element={<InventoryList />} />
              <Route path="orders" element={<OrderList />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </main>
    </div>
  );
}