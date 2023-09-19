import { TokenType } from '../enums/token-type.enum';

export interface Token {
  id: string;
  userId: string;
  accessToken: string;
  refreshToken?: string;
  expiryDate: Date;
  tokenType: TokenType;
  isRevoked: boolean;
  createdAt: Date;
}
