import React from 'react';
import { X } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { isAuthenticated, user, logout } = useAuthStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      <div className="fixed right-0 top-0 bottom-0 w-64 bg-white">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <a href="#" className="block text-gray-700 hover:text-indigo-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-indigo-600">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-indigo-600">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="block text-gray-700 hover:text-indigo-600">
                New Arrivals
              </a>
            </li>
          </ul>
          
          {isAuthenticated && (
            <div className="mt-6 pt-6 border-t">
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500 mb-4">Role: {user?.role}</p>
              <button
                onClick={() => {
                  logout();
                  onClose();
                }}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}