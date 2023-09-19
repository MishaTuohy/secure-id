import { TokenType } from '../enums/token-type.enum';

export interface Token {
  id: string;
  userId: string;
  tokenValue: string;
  expiryDate: Date;
  tokenType: TokenType;
  isRevoked: boolean;
  createdAt: Date;
}
