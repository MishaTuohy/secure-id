import { Permission } from 'src/permission/entities/permission.entity';

export interface Role {
  id: string;
  roleName: string;
  permissions: Permission[];
  description?: string;
}
