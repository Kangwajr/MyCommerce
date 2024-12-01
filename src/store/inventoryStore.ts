import { create } from 'zustand';
import type { InventoryItem, InventoryUpdateData } from '../types/inventory';

interface InventoryState {
  inventory: InventoryItem[];
  updateInventory: (productId: string, data: InventoryUpdateData) => void;
  reserveStock: (productId: string, quantity: number) => boolean;
  releaseStock: (productId: string, quantity: number) => void;
}

export const useInventoryStore = create<InventoryState>((set, get) => ({
  inventory: [
    {
      id: '1',
      productId: '1',
      productName: 'Classic White Sneakers',
      inStock: 50,
      reserved: 0,
      reorderPoint: 10,
      lastRestocked: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],

  updateInventory: (productId, data) =>
    set((state) => ({
      inventory: state.inventory.map((item) =>
        item.productId === productId
          ? {
              ...item,
              ...data,
              lastRestocked: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            }
          : item
      ),
    })),

  reserveStock: (productId, quantity) => {
    const item = get().inventory.find((i) => i.productId === productId);
    if (!item || item.inStock - item.reserved < quantity) return false;

    set((state) => ({
      inventory: state.inventory.map((item) =>
        item.productId === productId
          ? {
              ...item,
              reserved: item.reserved + quantity,
              updatedAt: new Date().toISOString(),
            }
          : item
      ),
    }));
    return true;
  },

  releaseStock: (productId, quantity) =>
    set((state) => ({
      inventory: state.inventory.map((item) =>
        item.productId === productId
          ? {
              ...item,
              reserved: Math.max(0, item.reserved - quantity),
              updatedAt: new Date().toISOString(),
            }
          : item
      ),
    })),
}));