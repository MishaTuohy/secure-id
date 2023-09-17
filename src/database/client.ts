import { DataSourceOptions, DataSource } from "typeorm";
import { User } from "../models/User";
import { OAuthClient } from "../models/OAuthClient";
import { Permission } from "../models/Permission";
import { Role } from "../models/Role";
import { RolePermission } from "../models/RolePermission";
import { Token } from "../models/Token";
import { UserOAuthGrant } from "../models/UserOAuthGrant";
import { UserRole } from "../models/UserRole";

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'db.tydawjczkunydhodqagr.supabase.co',
  port: 5432,
  username: 'postgres',
  password: 'M1sh@SecureIdDB030299',
  database: 'postgres',
  synchronize: true,
  logging: true,
  entities: [OAuthClient, Permission, Role, RolePermission, Token, User, UserOAuthGrant, UserRole] 
};

export const db = new DataSource(dataSourceOptions);
