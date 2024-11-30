import { User } from '../types/auth';

export const dummyUsers: User[] = [
  {
    id: '1',
    email: 'admin@stylehub.com',
    name: 'Admin User',
    role: 'admin',
    password: 'admin123' // In a real app, passwords would be hashed
  },
  {
    id: '2',
    email: 'staff@stylehub.com',
    name: 'Staff Member',
    role: 'staff',
    password: 'staff123'
  },
  {
    id: '3',
    email: 'customer@stylehub.com',
    name: 'John Customer',
    role: 'customer',
    password: 'customer123'
  }
] as const;