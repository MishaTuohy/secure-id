export interface Token {
  id: string;
  userId: string;
  accessToken: string;
  refreshToken?: string;
  expiryDate: Date;
  tokenType: string;
  isRevoked: boolean;
  createdAt: Date;
}
