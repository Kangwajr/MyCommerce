import { create } from 'zustand';
import type { Product, ProductFormData } from '../types/product';

interface ProductState {
  products: Product[];
  addProduct: (data: ProductFormData) => void;
  updateProduct: (id: string, data: ProductFormData) => void;
  deleteProduct: (id: string) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [
    {
      id: '1',
      name: 'Classic White Sneakers',
      description: 'Comfortable and stylish sneakers perfect for everyday wear',
      price: 89.99,
      quantity: 50,
      category: 'Footwear',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      name: 'Denim Jacket',
      description: 'Classic denim jacket with a modern fit',
      price: 129.99,
      quantity: 30,
      category: "Men's Collection",
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
  
  addProduct: (data) =>
    set((state) => ({
      products: [
        ...state.products,
        {
          id: Math.random().toString(36).substr(2, 9),
          ...data,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
    })),
    
  updateProduct: (id, data) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? {
              ...product,
              ...data,
              updatedAt: new Date().toISOString(),
            }
          : product
      ),
    })),
    
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
}));