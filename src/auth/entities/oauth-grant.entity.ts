import { OAuthClient } from './oauth-client.entity';

export interface OAuthGrant {
  id: string;
  client: OAuthClient;
  scopes: string[];
  createdAt: Date;
}
