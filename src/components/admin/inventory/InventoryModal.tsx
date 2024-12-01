import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useInventoryStore } from '../../../store/inventoryStore';
import type { InventoryItem } from '../../../types/inventory';

interface InventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: InventoryItem | null;
}

export function InventoryModal({ isOpen, onClose, item }: InventoryModalProps) {
  const [inStock, setInStock] = useState(0);
  const [reorderPoint, setReorderPoint] = useState(0);
  
  const updateInventory = useInventoryStore((state) => state.updateInventory);

  useEffect(() => {
    if (item) {
      setInStock(item.inStock);
      setReorderPoint(item.reorderPoint);
    }
  }, [item]);

  if (!isOpen || !item) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    updateInventory(item.productId, {
      inStock,
      reorderPoint,
    });
    
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Update Inventory: {item.productName}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              In Stock
            </label>
            <input
              type="number"
              min="0"
              value={inStock}
              onChange={(e) => setInStock(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reorder Point
            </label>
            <input
              type="number"
              min="0"
              value={reorderPoint}
              onChange={(e) => setReorderPoint(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Update Stock
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}