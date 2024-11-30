import React from 'react';
import { LogOut, User } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export function UserMenu() {
  const { user, logout } = useAuthStore();

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
        <User className="h-5 w-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">{user?.name}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 hidden group-hover:block">
        <div className="px-4 py-2 border-b border-gray-100">
          <p className="text-sm font-medium text-gray-900">{user?.email}</p>
          <p className="text-xs text-gray-500 capitalize">Role: {user?.role}</p>
        </div>
        
        <button
          onClick={logout}
          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
}