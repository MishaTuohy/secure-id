import { OAuthGrant } from 'src/auth/entities/oauth-grant.entity';
import { Role } from 'src/role/entities/role.entitiy';

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  salt: string;
  isActive: boolean;
  roles: Role[];
  oauthGrants: OAuthGrant[];
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
}
