export interface Token {
  tokenId: string | number;
  userId: string | number;
  accessToken: string;
  refreshToken?: string;
  expiryDate: Date;
  tokenType: string;
  createdAt: Date;
  isRevoked: boolean;
}
