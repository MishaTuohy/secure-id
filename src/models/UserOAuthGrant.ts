export interface UserOAuthGrant {
  grantId: string | number;
  userId: string | number;
  clientId: string | number;
  scopes: string;
  createdAt: Date;
}
