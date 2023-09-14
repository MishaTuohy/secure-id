export interface User {
  userId: string | number;
  username: string;
  email: string;
  passwordHash: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}
