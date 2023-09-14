export interface UserOAuthGrant {
  id: number;
  userId: number;
  clientId: number;
  scopes: string;
  createdAt: Date;
}
