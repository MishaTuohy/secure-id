/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionService {
  createPermission(permissionData: any): Promise<any> {
    throw new Error('Not Implemented');
  }

  getPermissionById(id: string): Promise<any> {
    throw new Error('Not Implemented');
  }

  updatePermission(id: string, permissionData: any): Promise<any> {
    throw new Error('Not Implemented');
  }

  deletePermission(id: string): Promise<any> {
    throw new Error('Not Implemented');
  }
}
