export interface OAuthClient {
  id: string | number;
  clientName: string;
  clientSecret: string;
  redirectUri: string;
  scopes: string;
  createdAt: Date;
}
