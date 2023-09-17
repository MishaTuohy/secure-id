export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      OAuthClient: {
        Row: {
          clientName: string
          clientSecret: string
          createdAt: string
          id: number
          redirectUri: string
          scopes: string
        }
        Insert: {
          clientName: string
          clientSecret: string
          createdAt?: string
          id?: number
          redirectUri: string
          scopes: string
        }
        Update: {
          clientName?: string
          clientSecret?: string
          createdAt?: string
          id?: number
          redirectUri?: string
          scopes?: string
        }
        Relationships: []
      }
      Permission: {
        Row: {
          createdAt: string
          description: string | null
          id: number
          name: string
        }
        Insert: {
          createdAt?: string
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          createdAt?: string
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      Role: {
        Row: {
          description: string | null
          id: number
          roleName: string
        }
        Insert: {
          description?: string | null
          id?: number
          roleName: string
        }
        Update: {
          description?: string | null
          id?: number
          roleName?: string
        }
        Relationships: []
      }
      RolePermission: {
        Row: {
          createdAt: string
          id: number
          permissionId: number
          roleId: number
        }
        Insert: {
          createdAt: string
          id?: number
          permissionId: number
          roleId: number
        }
        Update: {
          createdAt?: string
          id?: number
          permissionId?: number
          roleId?: number
        }
        Relationships: [
          {
            foreignKeyName: "RolePermission_permissionId_fkey"
            columns: ["permissionId"]
            referencedRelation: "Permission"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "RolePermission_roleId_fkey"
            columns: ["roleId"]
            referencedRelation: "Role"
            referencedColumns: ["id"]
          }
        ]
      }
      Token: {
        Row: {
          accessToken: string | null
          createdAt: string
          expiryDate: string | null
          id: number
          isRevoked: boolean | null
          refreshToken: string | null
          tokenType: string | null
          userId: number | null
        }
        Insert: {
          accessToken?: string | null
          createdAt?: string
          expiryDate?: string | null
          id?: number
          isRevoked?: boolean | null
          refreshToken?: string | null
          tokenType?: string | null
          userId?: number | null
        }
        Update: {
          accessToken?: string | null
          createdAt?: string
          expiryDate?: string | null
          id?: number
          isRevoked?: boolean | null
          refreshToken?: string | null
          tokenType?: string | null
          userId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Token_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      User: {
        Row: {
          createdAt: string
          email: string | null
          id: number
          isActive: boolean | null
          passwordHash: string | null
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string
          email?: string | null
          id?: number
          isActive?: boolean | null
          passwordHash?: string | null
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string
          email?: string | null
          id?: number
          isActive?: boolean | null
          passwordHash?: string | null
          updatedAt?: string | null
        }
        Relationships: []
      }
      UserOAuthGrant: {
        Row: {
          clientId: number
          createdAt: string
          id: number
          scopes: string
          userId: number
        }
        Insert: {
          clientId: number
          createdAt?: string
          id?: number
          scopes: string
          userId: number
        }
        Update: {
          clientId?: number
          createdAt?: string
          id?: number
          scopes?: string
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "UserOAuthGrant_clientId_fkey"
            columns: ["clientId"]
            referencedRelation: "OAuthClient"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "UserOAuthGrant_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      UserRole: {
        Row: {
          createdAt: string
          id: number
          roleId: number
          userId: number
        }
        Insert: {
          createdAt?: string
          id?: number
          roleId: number
          userId: number
        }
        Update: {
          createdAt?: string
          id?: number
          roleId?: number
          userId?: number
        }
        Relationships: [
          {
            foreignKeyName: "UserRole_roleId_fkey"
            columns: ["roleId"]
            referencedRelation: "Role"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "UserRole_userId_fkey"
            columns: ["userId"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
