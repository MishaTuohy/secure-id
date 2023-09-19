export interface UserOAuthGrant {
  id: string;
  userId: string;
  clientId: string;
  scopes: string[];
  createdAt: Date;
}
