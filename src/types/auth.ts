export type UserRole = 'admin' | 'staff' | 'customer';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  password?: string;
}