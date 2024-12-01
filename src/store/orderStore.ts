import { create } from 'zustand';
import type { Order, OrderStatus } from '../types/order';

interface OrderState {
  orders: Order[];
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  addOrder: (order: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  orders: [
    {
      id: '1',
      userId: '3',
      customerName: 'John Customer',
      customerEmail: 'customer@stylehub.com',
      items: [
        {
          productId: '1',
          name: 'Classic White Sneakers',
          quantity: 1,
          price: 89.99,
          subtotal: 89.99,
        },
      ],
      total: 89.99,
      status: 'processing',
      shippingAddress: '123 Main St, City, Country',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],

  updateOrderStatus: (orderId, status) =>
    set((state) => ({
      orders: state.orders.map((order) =>
        order.id === orderId
          ? { ...order, status, updatedAt: new Date().toISOString() }
          : order
      ),
    })),

  addOrder: (orderData) =>
    set((state) => ({
      orders: [
        ...state.orders,
        {
          id: Math.random().toString(36).substr(2, 9),
          ...orderData,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
    })),
}));