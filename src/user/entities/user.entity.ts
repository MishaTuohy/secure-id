export interface User {
  id: string;
  email: string;
  passwordHash: string;
  salt: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
}
