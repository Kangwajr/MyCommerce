export interface InventoryItem {
  id: string;
  productId: string;
  productName: string;
  inStock: number;
  reserved: number;
  reorderPoint: number;
  lastRestocked: string;
  updatedAt: string;
}

export interface InventoryUpdateData {
  inStock: number;
  reorderPoint: number;
}