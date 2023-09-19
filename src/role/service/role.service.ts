/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleService {
  createRole(roleData: any): Promise<any> {
    throw new Error('Not Implemented');
  }

  getRoleById(id: string): Promise<any> {
    throw new Error('Not Implemented');
  }

  updateRole(id: string, roleData: any): Promise<any> {
    throw new Error('Not Implemented');
  }

  deleteRole(id: string): Promise<any> {
    throw new Error('Not Implemented');
  }
}
