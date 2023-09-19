export interface OAuthClient {
  id: string;
  clientName: string;
  clientSecret: string;
  redirectUri: string;
  scopes: string[];
  createdAt: Date;
}
