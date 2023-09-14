export interface OAuthClient {
  clientId: string | number;
  clientName: string;
  clientSecret: string;
  redirectUri: string;
  scopes: string;
}
